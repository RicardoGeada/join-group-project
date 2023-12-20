document.addEventListener("DOMContentLoaded", async function () {
    await initContacts();
});

// ############################################################
// ----- Funktionen zum öffnen/schließen der Views ------------
// ############################################################
/**
 * This function shows the popup for adding new contacts 
 */
function openAddCon() {
    useroptions(true);
    document.getElementById("popup-addcon").classList.add("inview");
}


/**
 * This function shows the popup for changing new contacts
 */
function openEditCon() {
    useroptions(true);
    document.getElementById("popup-editcon").classList.toggle("inview");
}


/**
 * This function shows the details of contacts
 * 
 * @param {number} id - The id of the connected contact
 */
function openContact(id) {
    renderSingleView(id);
    document.getElementById("contact-single").classList.remove("d-none");
    unselectContacts();
    selectContacts(id);
}


/**
 * Help function to remove selection
 */
function unselectContacts() {
    useroptions(true);
    let obj = document.getElementsByClassName("contact-listbox");
    for (let i = 0; i < obj.length; i++) {
        obj[i].classList.remove("select");
    }
}


/**
 * Help function to add selection
 * 
 * @param {number} id - The id of the selected contact
 */
function selectContacts(id) {
    useroptions(true);
    document.getElementById(`contact-listbox-${id}`).classList.add("select");
}


/**
 * This function hide the details of contacts
 */
function closeContact() {
    document.getElementById("contact-single").classList.add("d-none");
    unselectContacts();
}


/**
 * Search the id in Array and returns index
 * 
 * @param {number} id - field in Array
 * @param {Array} arr - Array with contacts or users
 * @returns - index in Array
 */
function idToIndex(id, arr = contacts) {
    return arr.findIndex(function (item, i) {
        return item.id === id;
    });
}


/**
 * Returns two letters from a String. If String contains a word, two letters of that word are returned.
 * If String contains two words, one letter from each of the first two words is returned. 
 * 
 * @param {string} string - from a name-field
 * @returns - two letters
 */
function initialsFrom(string) {
    let wordlist = string.split(" ");
    let words = wordlist.length;
    let result = "--";
    if (words == 1) {
        result = wordlist[0][0];
        result += wordlist[0].length > 1 ? wordlist[0][1] : "-";
    } else if (words > 1) {
        result = wordlist[0][0] + wordlist[1][0];
    }
    return result.toUpperCase();
}


/**
 * Initializes required data
 */
async function initContacts() {
    if(isLoaded == false) {
        await userAndContacts();
    }
    await loadLastContactId();
    sortedContacts = sortMyList(contacts);
    let comeFrom = document.location.pathname;
    if (comeFrom.includes("contacts.html")) {
        renderContacts();
    }
}


function cLog(text, value) {
    console.log(text);
    console.log(value);
}


// ############################################################
/**
 * Is called from the form for creating a contact. If the user is a guest, a message box will be displayed. 
 * Otherwise the new contact will be added to the contact list.
 */
async function saveNewContact() {
    if(loggedInUserID == -2) {
        msgBox();
    } else {
        lastContactId++;
        await saveData("lastContactId", lastContactId);
        let newDataSet = readNewInputs();
        let answer;
        clearAddPopup();
        contacts.push(newDataSet[0]);
        answer = await saveData("contacts", contacts);
        isSavedNewContact(answer);
    }
}


/**
 * Checks the response from saveNewContact(). If saving failed, a message box will be displayed. 
 * If the save was successful, a copy of the contact list is sorted, the rendering of the contacts is started and the popup is closed.
 * 
 * @param {boolean} answer - Indication of whether saving the new contact was successful.
 */
async function isSavedNewContact(answer) {
    if(answer) {
        sortedContacts = sortContacts(contacts);
        renderContacts();
        document.getElementById("contactsuccess").classList.add("shortpopup");
        setTimeout(() => {
            document.getElementById("contactsuccess").classList.remove("shortpopup");
        }, "900");
    } else {
        msgBox('Contact was not saved.');
    }
}


/**
 * Gets data from the fields for the new contact and returns it as an array with Json object.
 * 
 * @returns Array with Json object.
 */
function readNewInputs() {
    return [
        {
            "id": lastContactId,
            "name": document.getElementById("addconname").value,
            "initials": initialsFrom(document.getElementById("addconname").value),
            "email": document.getElementById("addconemail").value,
            "phone": document.getElementById("addconphone").value,
            "badge-color": randomBadgeColor(),
            "userid": -1
        },
    ];
}


/**
 * Generates a random number from 0 to 14 for the color of the badge
 * 
 * @returns Number 0 to 14
 */
function randomBadgeColor() {
    return Math.floor(Math.random() * 15);
}


/**
 * Deletes the input fields from the new contact popup
 */
function clearAddPopup() {
    document.getElementById("popup-addcon").classList.remove("inview");
    document.getElementById("addconname").value = "";
    document.getElementById("addconemail").value = "";
    document.getElementById("addconphone").value = "";
}


// ############################################################
/**
 * Called by the editcontact form. Accesses the functions for changing contact details.
 */
async function saveEditContact() {
    let id = +document.getElementById("editconid").value;
    let index = idToIndex(id, contacts);
    await updateContactFields(index);
    await saveData("contacts", contacts);
    if (isCurrentUser(contacts[index].userid)) updateLocalStorage(index);
    sortedContacts = sortContacts(contacts);
    renderSaveEditContact(id);
}


/**
 * Changes the contact details with the input from the form fields.
 * 
 * @param {number} index - Index for the contact details in the contact list
 */
async function updateContactFields(index) {
    contacts[index].name = document.getElementById("editconname").value;
    contacts[index].initials = initialsFrom(document.getElementById("editconname").value);
    contacts[index].email = document.getElementById("editconemail").value;
    contacts[index].phone = document.getElementById("editconphone").value;
    await updateUserFields(index);
}


/**
 * If contact is also a user, update the user details too.
 * 
 * @param {number} index - Index for the contact details in the contact list
 */
async function updateUserFields(index) {
    let userIndex = idToIndex(contacts[index].userid, userList);
    if(isCurrentUser(contacts[index].userid)) {
        userList[userIndex].name = contacts[index].name;
        userList[userIndex].initials = contacts[index].initials;
        userList[userIndex].email = contacts[index].email;
        userList[userIndex].phone = contacts[index].phone;
        await saveData("users", userList);
    }
}


/**
 * Updated contact details can also be changed in LocalStorage for the logged in user.
 * 
 * @param {*} index - Index for the contact details in the contact list
 */
function updateLocalStorage(index) {
    localStorage.setItem('loggedInUser', contacts[index].name);
    if(localStorage.getItem("rememberEmail")) {
        localStorage.setItem('rememberEmail', contacts[index].email);
    }
    localStorage.setItem('loggedInUser', contacts[index].name);
    loggedInUser = localStorage.getItem("loggedInUser");
}


/**
 * After changing contact information, re-render all areas for it.
 * 
 * @param {number} id - Id of the selected contact.
 */
function renderSaveEditContact(id) {
    renderHeaderUserName();
    renderContacts();
    renderSingleView(id);
    openEditCon();
}


// ############################################################
/**
 * Start delete a contact
 * 
 * @param {number} id The id from user in Database
 */
async function deleteContact(id) {
    let index = idToIndex(id, contacts);
    let userId = contacts[index].userid;
    if(isNotAUser || isCurrentUser(userId)) {
        msgBox();
        closeContact();
        document.getElementById("popup-editcon").classList.remove("inview");
    } else {
        deleteNow(id, index, userId);
    }
}


/**
 * Deletes contact from tasks, from users and from contacts 
 * 
 * @param {*} id - id-field in contacts
 * @param {*} index - the index in array
 * @param {*} userId - id-field in users
 */
async function deleteNow(id, index, userId) {
    deleteContactFromTasks(id);
    deleteUser(userId);
    contacts.splice(index, 1);
    await saveData("contacts", contacts);
    sortedContacts = sortContacts(contacts);
    renderContacts();
    closeContact();
    document.getElementById("popup-editcon").classList.remove("inview");
}


/**
 * Deletes a user and causes logout if this is the current user.
 * 
 * @param {number} userId - Id for user
 */
async function deleteUser(userId) {
    if(userId >= 0) {
        let userIndex = idToIndex(userId, userList);
        userList.splice(userIndex, 1);
        await saveData("users", userList);
        if(userId == loggedInUserID) {
            userLogout();
        }
    }
}


/**
 * Deletes a contact from tasks.
 * 
 * @param {number} id - Id for contact.
 */
async function deleteContactFromTasks(id) {
    let tasks = await loadData('tasks');
    let count = false;
    for(i = 0; i < tasks.length; i++) {
        let arr = tasks[i]['assigned_to'];
        if(arr.includes(id)) {
            let index = arr.indexOf(id);
            arr.splice(index, 1);
            count = true;
        }
    }
    if(count) {
        await saveData('tasks', tasks);
    }
}


// ############################################################
/**
 * Helper function: Sorts an array of Json objects alphabetically by the initials of the contacts.
 * 
 * @param {Array} arr - The array to sort.
 * @returns - Returns a sorted copy.
 */
function sortContacts(arr) {
    let targetArr = [...arr];
    targetArr.sort((c1, c2) => (c1.initials < c2.initials ? -1 : c1.initials > c2.initials ? 1 : 0));
    return targetArr;
}


/**
 *  Helper function: Sorts an array upwards by id.
 * 
 * @param {Array} arr - The array to sort.
 * @returns - Returns a sorted copy.
 */
function sortIds(arr) {
    let targetArr = [...arr];
    targetArr.sort((c1, c2) => (c1.id < c2.id ? -1 : c1.id > c2.id ? 1 : 0));
    return targetArr;
}


/**
 * Opens a subpage.
 */
function openMore() {
    window.location.href = "admin.html";
}


// ############################################################
// ----- Render-Funktionen für Contacts im Allgemeinen --------
// ############################################################
/**
 * Renders the collection of contacts.
 */
function renderContacts() {
    let newContent = "", firstLetter = "";
    for (let i = 0; i < sortedContacts.length; i++) {
        let isUser = isCurrentUserInfo(sortedContacts[i].userid);
        let answer = nextLetter(sortedContacts[i].initials[0], firstLetter);
        firstLetter = answer[1];
        newContent += answer[0];
        newContent += renderListEntry(i, isUser);
    }
    if (newContent == "") {
        newContent += renderLetterbox();
    }
    document.getElementById("contact-list").innerHTML = newContent;
}


/**
 * Gets the additional text for users.
 * 
 * @param {number} userId - Id for user
 * @returns - Returns the additional text.
 */
function isCurrentUserInfo(userId) {
    if (userId === loggedInUserID) {
        return " (You)";
    } else if (userId > -1) {
        return " (User)";
    } else {
        return "";
    }
}


/**
 * Helper function: Checks the current user via the user ID.
 * 
 * @param {number} userId - Id for user
 * @returns - True or false.
 */
function isCurrentUser(userId) {
    return userId === loggedInUserID;
}


/**
 * Checks the change of the next letter for the contacts listing.
 * 
 * @param {string} currentLetter - First letter of the current contact's initials.
 * @param {string} firstLetter - Current letter of the sorted collection.
 * @returns - Returns the new heading if the letter has changed.
 */
function nextLetter(currentLetter, firstLetter) {
    let newContent = "";
    if (currentLetter != firstLetter) {
        firstLetter = currentLetter;
        newContent += renderLetterbox(currentLetter);
    }
    return [newContent, firstLetter];
}


/**
 * Helper function: To render the heading for the new letter.
 * 
 * @param {string} letter - The new letter.
 * @returns - Returns the HTML text.
 */
function renderLetterbox(letter = "No Contacts") {
  return `
        <div class="contact-letterbox">
            <span class="contact-letter">${letter}</span>
        </div>
        <div class="contact-hr"></div>
    `;
}


/**
 * Compiles the HTML code for a contact's list entry.
 * 
 * @param {number} i - i = index number in the sorted contact list.
 * @param {number} isUser - The additional text from the function isCurrentUserInfo
 * @returns - Returns HTML code to render.
 */
function renderListEntry(i, isUser = "") {
  return `
        <div id="contact-listbox-${sortedContacts[i].id}" class="contact-listbox" onclick="openContact(${sortedContacts[i].id})">
            <div class="contact-listbox-badgebox">
                <div class="contact-listbox-badge">
                    <div class="contact-listbox-badge-circle bg-contact-${sortedContacts[i]["badge-color"]}">
                        <span class="contact-listbox-badge-text">${sortedContacts[i].initials}</span>
                    </div>
                </div>
            </div>
            <div class="contact-listbox-namebox">
                <span class="contact-listbox-name">${sortedContacts[i].name}${isUser}</span>
                <span class="contact-listbox-mail">${sortedContacts[i].email}</span>
            </div>
        </div>
    `;
}


// ############################################################
/**
 * Renders the detailed view of a contact.
 * 
 * @param {number} id - Id for contact.
 */
function renderSingleView(id) {
    let index = idToIndex(id, sortedContacts);
    let isUser = isCurrentUserInfo(sortedContacts[index].userid);
    document.getElementById("contact-single-info-badge-text").innerHTML = sortedContacts[index].initials;
    document.getElementById("contact-single-info-name-text").innerHTML = sortedContacts[index].name + isUser;
    document.getElementById("contact-single-info-email-text").innerHTML = sortedContacts[index].email;
    document.getElementById("contact-single-info-phone-text").innerHTML = sortedContacts[index].phone;
    document.getElementById("contact-single-info-badge-circle").className = `contact-single-info-badge-circle bg-contact-${sortedContacts[index]["badge-color"]}`;
    document.getElementById("options").innerHTML = renderOptions(id);
    document.getElementById("contact-single-info-options").innerHTML = renderOptions(id);
    isOptionsView(id, index);
}


// ############################################################
/**
 * Checks contact for user and removes options in mobile view if it is not the current user.
 * 
 * @param {number} id - Id for contact.
 * @param {number} index - Index of the current contact in the sorted contact list.
 */
function isOptionsView(id, index) {
    if(isCurrentUserInfo(sortedContacts[index].userid) != " (User)") {
        document.getElementById('contact-btn-option-box').classList.remove('d-none');
        renderPopupEdit(id);
    } else {
        document.getElementById('contact-btn-option-box').classList.add('d-none');
    }
}


/**
 * Checks contact for user and removes options in desktop view if it is not the current user.
 * 
 * @param {number} id - Id for contact.
 * @returns - Returns the created HTML code.
 */
function renderOptions(id) {
    let content = "";
    if(isCurrentUserInfo(sortedContacts[idToIndex(id, sortedContacts)].userid) != " (User)") {
        content += renderOptionEdit(id);
        content += renderOptionDelete(id);
    }
    return content;
}


/**
 * Created HTML code for the edit button.
 * 
 * @param {number} id - Id for contact.
 * @returns - Returns the created HTML code.
 */
function renderOptionEdit(id) {
  return `
        <div class="options-row" onclick="openEditCon(${id})">
            <div class="options-imgbox">
                <img class="options-img" src="./assets/img/edit.png">
            </div>
            <span>Edit</span>
        </div>
    `;
}


/**
 * Created HTML code for the delete button.
 * 
 * @param {number} id - Id for contact.
 * @returns - Returns the created HTML code.
 */
function renderOptionDelete(id) {
  return `
        <div class="options-row" onclick="deleteContact(${id})">
            <div class="options-imgbox">
                <img class="options-img" src="./assets/img/delete.png">
            </div>
            <span>Delete</span>
        </div>
    `;
}


// ############################################################
/**
 * Fills input fields from the edit form with saved data.
 * 
 * @param {number} id - Id for contact.
 */
function renderPopupEdit(id) {
    let index = idToIndex(id, sortedContacts);
    document.getElementById("popup-person-imgbox").className = `popup-person-imgbox bg-contact-${sortedContacts[index]["badge-color"]}`;
    document.getElementById("popup-person-imgbox-text").innerHTML = sortedContacts[index].initials;
    document.getElementById("editconid").value = sortedContacts[index].id;
    document.getElementById("editconname").value = sortedContacts[index].name;
    document.getElementById("editconemail").value = sortedContacts[index].email;
    document.getElementById("editconphone").value = sortedContacts[index].phone;
    document.getElementById("popup-editcon-btn-delete").innerHTML = `
        <button onclick='deleteContact(${id})' type="button" class="btn light">Delete</button>
    `;
}
