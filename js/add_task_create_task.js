let expanded = false;
let selectTrigger = document.querySelector('.select-trigger');

let taskStatus = localStorage.getItem('taskStatus') || 'to-do';
let taskContacts = [];
let currentTaskUser = {};
let taskUsers = [];
let loadedTasks = [];
let addedContacts = [];
let sortedTaskContacts = [];
let addedContactInitial = [];
let badges = [];
let categoryColor;
let addedSubTasks = [];


//-------------------------------------------------//
//------- Storage load and Render Functions -------//
//-------------------------------------------------//


/**
 * Initializes task processing and renders contacts.
 * @async
 * @function
 * @returns {Promise<void>} A Promise that resolves when initialization is complete.
 */
async function initAddTask() {
    await loadTaskUsersFromStorage();
    await includeHTML();
    await loadTaskContactsFromStorage();
    await loadTasksFromRemoteStorage();
    renderContacts();
}


/**
 * Loads task contacts from storage and sorts them if necessary.
 * @async
 * @function
 * @throws {Error} Throws an error if loading or sorting contacts fails.
 */
async function loadTaskContactsFromStorage() {
    await loadCurrentFromStorage();
    taskContacts = JSON.parse(await getItem('contacts'));
    if (taskContacts.length > 1) {
        sortTaskContacts(taskContacts);
    } else {
        sortedContactList = taskContacts;
    }
}


/**
 * Loads tasks from remote storage and parses them as JSON.
 * @async
 * @function
 * @throws {Error} Throws an error if loading or parsing tasks fails.
 */
async function loadTasksFromRemoteStorage() {
    loadedTasks = JSON.parse(await getItem('tasks'));
}


/**
 * Loads task users from storage and parses them as JSON.
 * @async
 * @function
 * @throws {Error} Throws an error if loading or parsing task users fails.
 */
async function loadTaskUsersFromStorage() {
    taskUsers = JSON.parse(await getItem('users'));
}


/**
 * Loads the current user from storage or sets it to a guest user.
 * @async
 * @function
 */
async function loadCurrentFromStorage() {
    let currentUserID = localStorage.getItem('loggedInUserID');
    if (currentUserID >= 0) {
        currentTaskUser = taskUsers.find(user => user['id'] == currentUserID)
    } else if (currentUserID == -2) {
        currentTaskUser = {
            'id': -2,
            'name': 'Guest User',
            'initials': 'GU',
            'email': '',
            'password': '',
            'phone': '',
            'badge-color': 1,
            'contacts': [],
        };
    }
}


/**
 * Sorts a list of contacts alphabetically by initials.
 * @async
 * @function
 * @param {Array} arr - The array of contacts to be sorted.
 */
async function sortTaskContacts(arr) {
    sortedContactList = [...arr];
    sortedContactList.sort(
        (c1, c2) =>
            (c1.initials < c2.initials) ? -1 : (c1.initials > c2.initials) ? 1 : 0);
    if (currentTaskUser['id'] >= 0) {
        const currentUserIndex = sortedContactList.findIndex(contact => contact['userid'] == currentTaskUser['id']);
        const currentUserContactInfo = JSON.parse(JSON.stringify(sortedContactList[currentUserIndex]));
        sortedContactList.splice(currentUserIndex, 1);
        sortedContactList.unshift(currentUserContactInfo);
    }
}


/**
 * Renders contacts in the user interface.
 * @function
 */
function renderContacts() {
    let assignedToContact = document.getElementById('contactDropDown');
    assignedToContact.innerHTML = '';

    for (let i = 0; i < sortedContactList.length; i++) {
        const contact = sortedContactList[i];

        assignedToContact.innerHTML += renderContactHTML(i, contact);
    }
}


/**
 * Checks the user state in the contact list.
 * @function
 * @param {number} userid - The user ID to check.
 * @returns {string} A string indicating the user state ('(You)', '', or '(User)').
 */
function checkUserState(userid) {
    if (userid == currentTaskUser['id']) {
        return '(You)';
    } else if (userid < 0) {
        return '';
    } else {
        return '(User)';
    }
}


/**
 * Renders contact initials from added contacts in the user interface.
 * @function
 */
function renderContactInitials() {
    let contactInitialDivs = document.getElementById('contactInitial');
    contactInitialDivs.innerHTML = '';

    for (let l = 0; l < addedContacts.length; l++) {
        const initial = addedContacts[l];
        const index = sortedContactList.findIndex(c => c['id'] == initial);

        contactInitialDivs.innerHTML += contactInitialsHTML(index, initial);
    };
}


/**
 * Reloads edited subtasks and renders them in the user interface.
 * @function
 */
function renderSubTaskUpdate() {
    let showSubs = document.getElementById('subTaskList');
    showSubs.innerHTML = '';

    for (let j = 0; j < addedSubTasks.length; j++) {
        const sub = addedSubTasks[j]['subtask'];
        showSubs.innerHTML += renderSubHTML(sub, j);
    };
}


/**
 * Reloads the contact list by initializing task processing.
 * @async
 * @function
 */
async function reloadContactList() {
    await initAddTask();
}


//----------------------------------------------------//
//------- Get Values and Create Task Functions -------//
//----------------------------------------------------//


/**
 * Gets the selected priority value for a new task based on the active priority button.
 * @function
 * @returns {number} The selected priority value (0 for none, 1 for urgent, 2 for medium, 3 for low).
 */
function getSelectedPrio() {
    let selectedPriority;
    if (document.getElementById('urgentBtn').classList.contains('urgentBtn')) {
        selectedPriority = 1;
    } else if (document.getElementById('mediumBtn').classList.contains('mediumBtn')) {
        selectedPriority = 2;
    } else if (document.getElementById('lowBtn').classList.contains('lowBtn')) {
        selectedPriority = 3;
    } else {
        selectedPriority = 0;
    };

    return selectedPriority;
}


/**
 * Gets the subtask values for a new task from input fields.
 * @function
 * @returns {Array} An array containing the subtask values.
 */
function getSubtasks() {
    let subtasks = [];
    let subtaskInputs = document.querySelectorAll('.subTaskInput input');
    subtaskInputs.forEach(function (input) {
        subtasks.push(input.value);
    });
    return subtasks;
}


/**
 * Toggles the visibility of the category options for a new task.
 * @function
 */
function selectCategory() {
    let arrow = document.getElementById('categoryArrow');
    let options = document.getElementById('allOptions');

    options.classList.toggle('d-none');
    if (options.classList.contains('d-none')) {
        arrow.src = "./assets/img/arrow_drop_down.svg"
    } else {
        arrow.src = "./assets/img/arrow_up.svg"
    };
}


/**
 * Sets the selected category in the category selector and adjusts its appearance.
 * @function
 * @param {HTMLElement} option - The selected category option element.
 */
function selectOption(option) {
    const selectedValue = option.textContent;
    const categorySelector = document.getElementById('chosenCategory');
    const categoryInput = document.getElementById('categoryInput');

    categorySelector.innerHTML = selectedValue;
    checkCategoryColor(selectedValue);
    categoryInput.classList.remove('brd-focus');
    selectCategory();
}


/**
 * Sets the category color based on the selected category value.
 * @function
 * @param {string} selectedValue - The selected category value.
 */
function checkCategoryColor(selectedValue) {
    if (selectedValue == 'Technical Task') {
        categoryColor = 5;
    } else {
        categoryColor = 10;
    }
}


/**
 * Toggles the visibility of the contacts dropdown menu.
 * @function
 */
function showContacts() {
    let arrow = document.getElementById('contactsArrow');
    let checkboxes = document.getElementById('checkBoxes');
    let input = document.getElementById('searchContact');
    if (!expanded) {
        openContactDropDown(arrow, checkboxes, input)
    } else {
        closeContactDropDown(arrow, checkboxes, input)
    }
}


/**
 * Opens the contacts dropdown menu.
 * @function
 * @param {HTMLElement} arrow - The arrow element to indicate the dropdown state.
 * @param {HTMLElement} checkboxes - The checkboxes element for contact selection.
 * @param {HTMLElement} input - The input element for searching contacts.
 */
function openContactDropDown(arrow, checkboxes, input) {
    checkboxes.classList.add('d-block');
    input.classList.add('brd-focus');
    expanded = true;
    arrow.src = "./assets/img/arrow_up.svg"
}


/**
 * Closes the contacts dropdown menu.
 * @function
 * @param {HTMLElement} arrow - The arrow element to indicate the dropdown state.
 * @param {HTMLElement} checkboxes - The checkboxes element for contact selection.
 * @param {HTMLElement} input - The input element for searching contacts.
 */
function closeContactDropDown(arrow, checkboxes, input) {
    checkboxes.classList.remove('d-block');
    input.classList.remove('brd-focus');
    expanded = false;
    arrow.src = "./assets/img/arrow_drop_down.svg";
    document.getElementById('searchContactInput').value = "";
    searchContacts();
}


/**
 * Searches for contacts in the contact dropdown menu based on user input.
 * @function
 */
function searchContacts() {
    const searchInput = document.getElementById('searchContactInput').value.toLowerCase();
    const dropDown = document.getElementById('contactDropDown');
    const taskContacts = dropDown.getElementsByClassName('singleContact');

    for (let l = 0; l < taskContacts.length; l++) {
        const contact = taskContacts[l];
        const contactName = contact.getElementsByTagName('p')[0].textContent.toLowerCase();

        if (searchInput === '') {
            contact.classList.remove('d-none');
        } else if (contactName.includes(searchInput)) {
            contact.classList.remove('d-none');
        } else {
            contact.classList.add('d-none');
        }
    }
}


/**
 * Sets the selected contact's ID, badge color, and updates its checkbox state.
 * @function
 * @param {number} index - The index of the selected contact.
 */
function addedContact(index) {
    let selectedContact = document.getElementById(`contact${index}`);
    let checked = document.getElementById(`check${index}`);
    let src = checked.getAttribute("src");
    let id = sortedContactList[index]['id'];   //set index from Contacts to ID
    let badge = sortedContactList[index]['badge-color'];

    addedContactsCheckBox(selectedContact, checked, src, id, badge, index);

    checkContactLength();
    renderContactInitials();
}


/**
 * Creates and pushes a new subtask to the list of added subtasks.
 * @function
 */
function createSubTask() {
    let newSubTask = document.getElementById('newSub');
    let showSubs = document.getElementById('subTaskList');
    let subInputCover = document.getElementById('subTaskInputCover');

    if (newSubTask.value === '') {
        checkSubInputValue(subInputCover);
    } else {
        addedSubTasks.push(
            {
                done: false,
                subtask: newSubTask.value
            }
        );
        newSubTask.value = '';
        showSubs.innerHTML = '';

        for (let j = 0; j < addedSubTasks.length; j++) {
            const sub = addedSubTasks[j]['subtask'];
            showSubs.innerHTML += renderSubHTML(sub, j);
        };

        toggleSubTaskInput();
    }
}


/**
 * Retrieves all values for creating a new task and takes appropriate actions.
 * @function
 */
function createTask() {
    const checked = checkInputData();
    if (currentTaskUser['id'] == -2 && checked === true) {
        msgBox(text = 'To create a new task, please register and log in.');
        setTimeout(function () {
            window.location.href = 'board.html'
        }, 3500);
    } else if (checked === true) {
        setNewTaskData();
    };
}


/**
 * Sets the data for creating a new task based on user inputs and calls the function to add the new task.
 * @function
 */
function setNewTaskData() {
    let title = document.getElementById('titleInput').value;
    let description = document.getElementById('descriptionInput').value;
    let priority = getSelectedPrio();
    let date = document.getElementById('dateToday').value;
    let category = document.getElementById('chosenCategory').innerHTML;
    let assignedTo = addedContacts;
    let subtasks = addedSubTasks;
    document.getElementById('checkBoxes').classList.remove('d-block');

    addNewTask(title, description, priority, date, category, assignedTo, subtasks);
}


/**
 * Adds a new task with the provided data to the task list.
 * @async
 * @function
 * @param {string} title - The title of the new task.
 * @param {string} description - The description of the new task.
 * @param {number} priority - The priority of the new task.
 * @param {string} date - The due date of the new task.
 * @param {string} category - The category of the new task.
 * @param {Array} assignedTo - An array of assigned contacts for the new task.
 * @param {Array} subtasks - An array of subtasks for the new task.
 * @throws {Error} Throws an error if adding the new task fails.
 */
async function addNewTask(title, description, priority, date, category, assignedTo, subtasks) {
    await loadTasksFromRemoteStorage();
    let newTask = {
        'id': getTaskId(),
        'status': taskStatus,
        'category': category,
        'category_color': categoryColor,
        'title': title,
        'description': description,
        'due_date': date,
        'priority': priority,
        'assigned_to': assignedTo,
        'subtasks': subtasks,
    };

    pushNewTask(newTask);
}


/**
 * Generates a new task ID based on the highest existing ID in the loaded tasks.
 * @function
 * @returns {number} The new task ID.
 */
function getTaskId() {
    let highestID = 0;
    for (let i = 0; i < loadedTasks.length; i++) {
        if (highestID < loadedTasks[i]['id']) {
            highestID = loadedTasks[i]['id'];
        }
    }
    return highestID + 1;
}


/**
 * Pushes a new task to the list of loaded tasks, stores it in storage, clears the task input, and redirects to the board.
 * @async
 * @function
 * @param {object} newTask - The new task object to push.
 * @throws {Error} Throws an error if pushing the new task or storing it in storage fails.
 */
async function pushNewTask(newTask) {
    loadedTasks.push(newTask);
    await setItem('tasks', JSON.stringify(loadedTasks));
    clearTaskInput();
    window.location.href = 'board.html';
}


/**
 * Clears all input data for a new created task.
 * @function
 */
function clearTaskInput() {
    document.getElementById('titleInput').value = "";
    document.getElementById('descriptionInput').value = "";
    document.getElementById('urgentBtn').classList.remove('urgentBtn');
    document.getElementById('urgent').classList.remove('selectedSvg');
    document.getElementById('mediumBtn').classList.remove('mediumBtn');
    document.getElementById('medium').classList.remove('selectedSvg');
    document.getElementById('lowBtn').classList.remove('lowBtn');
    document.getElementById('low').classList.remove('selectedSvg');
    document.getElementById('dateToday').value = "";

    resetTaskData();
}


/**
 * Handles the Enter key press event to create a new subtask.
 * @function
 * @param {KeyboardEvent} event - The keyboard event object.
 */
function enterKeyDownCreateSub(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        createSubTask();
    }
}


/**
 * Handles the Enter key press event to edit a subtask.
 * @function
 * @param {KeyboardEvent} event - The keyboard event object.
 * @param {number} index - The index of the subtask to edit.
 */
function enterKeyDownEditSub(event, index) {
    let input = document.getElementById(`editSubTask${index}`)
    if (event.keyCode === 13) {
        event.preventDefault();
        if (input.value != '') {
            setNewSubValue(index);
        } else {
            deleteSub(index);
        }
    }
}