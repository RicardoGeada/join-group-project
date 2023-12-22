//------------------------------//
//------- Edit Functions -------//
//------------------------------//


/**
 * Enables editing of a subtask and populates the input field with the subtask content.
 * @function
 * @param {number} index - The index of the subtask to edit.
 */
function editSubElement(index) {
    let subValue = document.getElementById(`editSubTask${index}`);
    toggleEditSubInput(index);
    subValue.value = addedSubTasks[index]['subtask'];
}


/**
 * Sets a new value for a subtask and updates the user interface.
 * @function
 * @param {number} index - The index of the subtask to update.
 */
function setNewSubValue(index) {
    let newSubValue = document.getElementById(`editSubTask${index}`).value;
    addedSubTasks[index]['subtask'] = newSubValue;
    renderSubTaskUpdate();
}


/**
 * Deletes a subtask at the specified index and updates the user interface.
 * @function
 * @param {number} index - The index of the subtask to delete.
 */
function deleteSub(index) {
    if (index >= 0 && index < addedSubTasks.length) {
        addedSubTasks.splice(index, 1);
        renderSubTaskUpdate();
    }
}


//------------------------------------------//
//------- Toggle and Reset Functions -------//
//------------------------------------------//


/**
 * Stops the propagation of the provided event.
 * @function
 * @param {Event} event - The event object to stop propagation for.
 */
function stopPropagation(event) {
    event.stopPropagation();
}


/**
 * Sets the border color on the focused element and removes it when clicking outside.
 * @function
 * @param {string} inputId - The ID of the input element to focus.
 */
function setFocus(inputId) {
    document.getElementById(inputId).classList.add('brd-focus');
    document.addEventListener('click', function (event) {
        if (event.target.id !== inputId) {
            document.getElementById(inputId).classList.remove('brd-focus');
        }
    });
}


/**
 * Closes the contacts dropdown menu and removes focus from the search input field.
 * @function
 */
function closeAssignedToDropDown() {
    let arrow = document.getElementById('contactsArrow');
    let input = document.getElementById('searchContact');
    let checkboxes = document.getElementById('checkBoxes');
    checkboxes.classList.remove('d-block');
    input.classList.remove('brd-focus');
    arrow.src = "./assets/img/arrow_drop_down.svg"
}


/**
 * Closes the category dropdown menu.
 * @function
 */
function closeCategoryDropDown() {
    let arrow = document.getElementById('categoryArrow');
    let options = document.getElementById('allOptions');

    options.classList.add('d-none');
    arrow.src = "./assets/img/arrow_drop_down.svg"
}





/**
 * Show addNewSubtaskButtons / Hide createNewSubtaskButton
 * @function
 */
function openSubTaskInput() {
    let createNewSubtaskButton = document.getElementById('createNewSubtaskButton');
    let addNewSubtaskButtons = document.getElementById('addNewSubtaskButtons');
    let input = document.getElementById('newSub');
    createNewSubtaskButton.classList.add('d-none');
    addNewSubtaskButtons.classList.remove('d-none');
    input.focus();
}

/**
 * Hide addNewSubtaskButtons / Show createNewSubtaskButton
 * @function
 */
function closeSubTaskInput() {
    let createNewSubtaskButton = document.getElementById('createNewSubtaskButton');
    let addNewSubtaskButtons = document.getElementById('addNewSubtaskButtons');
    let input = document.getElementById('newSub');
    createNewSubtaskButton.classList.remove('d-none');
    addNewSubtaskButtons.classList.add('d-none');
    input.blur();
}


/**
 * Toggles the display of the subtask input.
 * @function
 */
function toggleSubTaskInput() {
    let createNewSubtaskButton = document.getElementById('createNewSubtaskButton');
    let addNewSubtaskButtons = document.getElementById('addNewSubtaskButtons');
    createNewSubtaskButton.classList.toggle('d-none');
    addNewSubtaskButtons.classList.toggle('d-none');
}


/**
 * Clears all data and resets the state for a new task creation.
 * @function
 */
function resetTaskData() {
    let category = document.getElementById('chosenCategory');
    let subTasks = document.getElementById('subTaskList');
    category.innerHTML = 'Select task Category';
    subTasks.innerHTML = '';
    addedContacts = [];
    addedSubTasks = [];
    addedContactInitial = [];
    localStorage.removeItem('taskStatus');
    resetCheckBoxArrow();
}


/**
 * Resets all clicked checkboxes and the contacts dropdown arrow.
 * @function
 */
function resetCheckBoxArrow() {
    let arrow = document.getElementById('contactsArrow');
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
    if (arrow.src === "./assets/img/arrow_drop_down_up.svg") {
        arrow.src = "./assets/img/arrow_drop_down.svg";
    }
    document.getElementById('checkBoxes').classList.remove('d-block');
    renderContacts();
    renderContactInitials();
}


/**
 * Toggles the display of the edit input for a subtask.
 * @function
 * @param {number} index - The index of the subtask to edit.
 */
function toggleEditSubInput(index) {
    let subListElement = document.getElementById(`listElement${index}`);
    let editSubInput = document.getElementById(`editListElement${index}`);
    subListElement.classList.toggle('d-none');
    editSubInput.classList.toggle('d-none');
}