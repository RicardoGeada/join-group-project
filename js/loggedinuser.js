document.addEventListener('click', hideUserOptions);

let isNotAUser = true;


/**
 * Checks for user data in local storage and redirects to the home page if missing.
 */
if(!loggedInUserID || !loggedInUser) {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUserID");
    let comeFrom = document.location.pathname;
    if (!comeFrom.includes("legal_notice.html") && !comeFrom.includes("privacy_policy.html")) {
        window.location.href = 'index.html';
    }
} else {
    isNotAUser = false;
    initLoggedInUser();
}


/**
 * Checks for guest or logged in user. Displays the user badge or logs the user out.
 */
async function initLoggedInUser() {
    await loadHeaderUsersFromStorage();
    if(loggedInUserID != -2 && useridToIndex(loggedInUserID, users) == -1) {
        userLogout();
    } else {
        renderHeaderUserName();
    }
}


/**
 * Checks the triggering object and closes the options menu.
 * 
 * @param {object} event - Object that triggers the event.
 */
function hideUserOptions(event) {
    const userOptions = document.getElementById('useroptions');
    const userButtonName = document.getElementById('user-name');
    const userButton = document.getElementById('user-icon');
    if(!userOptions.contains(event.target) && !userButton.contains(event.target) && event.target !== userButtonName) {
        userOptions.classList.remove('inview');
    }
}


/**
 * Shows a message box and hides it again after a short time.
 * 
 * @param {string} text - 
 */
function msgBox(text = 'To edit please register and log in.') {
    document.getElementById('msgbox-text').innerHTML = text;
    document.getElementById("msgbox").classList.add("shortpopup");
    setTimeout(() => {
        document.getElementById("msgbox").classList.remove("shortpopup");
    }, "4000");
}


// ab hier erst nutzbar wenn weitere Daten geladen sind.
/**
 * Determines the index in the user list from the user ID.
 * 
 * @param {number} id - Id for contact.
 * @param {Array} arr - Array of users.
 * @returns - returns the index found.
 */
function useridToIndex(id, arr = users) {
    return arr.findIndex(function (item, i) {
        return item.id === id;
    });
  }
  

  /**
   * Loads all users into the user list.
   */
async function loadHeaderUsersFromStorage() {
    let tempData;
    tempData = await loadData('users', users);
    users = tempData;
}


/**
 * Renders the user's initials into the badge.
 */
async function renderHeaderUserName() {
    const observer = new MutationObserver(() => {
        let obj = document.getElementById('user-name');
        if (obj) {
            observer.disconnect(); // Beobachtung stoppen
            let index = useridToIndex(loggedInUserID, users);
            obj.innerHTML = loggedInUserID === -2 ? 'G' : users[index].initials;
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}


/**
 * Logs the user out.
 */
function userLogout() {
    localStorage.removeItem('loggedInUserID');
    localStorage.removeItem('loggedInUser');
    window.location.href = "index.html";
}


/**
 * Opens or closes the user's options menu.
 * 
 * @param {boolean} close - If it is true, the options menu will always close.
 */
function useroptions(close = false) {
    let obj = document.getElementById('useroptions');
    close ? obj.classList.remove('inview') : obj.classList.toggle('inview');
}


/**
 * Triggers the back function in the browser.
 */
function browserBack() {
    useroptions(true);
    history.back();
}