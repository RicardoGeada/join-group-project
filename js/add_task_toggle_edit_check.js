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
 * Removes focus from unfocused input fields based on the provided input field ID.
 * @function
 * @param {string} inputField - The ID of the input field that should remain focused.
 */
function toggleFocus(inputField) {
    const elements = ['titleInput', 'descriptionInput', 'dateToday', 'categoryInput', 'subTaskInputCover', 'searchContact'];

    elements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (elementId !== inputField) {
            element.classList.remove('brd-focus');
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
 * Removes focus from the subtask input and hides the real input field.
 * @function
 */
function closeSubTaskInput() {
    let inputCover = document.getElementById('subTaskInputCover');
    let realInput = document.getElementById('realSubInput');

    inputCover.classList.remove('d-none');
    realInput.classList.add('d-none');
}


/**
 * Toggles the display of the subtask input.
 * @function
 */
function toggleSubTaskInput() {
    let inputCover = document.getElementById('subTaskInputCover');
    let realInput = document.getElementById('realSubInput');

    inputCover.classList.toggle('d-none');
    realInput.classList.toggle('d-none');
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

    if (arrow.src === "./assets/img/arrow_up.svg") {
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


//---------------------------------------------------------------//
//------- Check Buttons, Input Fields and Select Elements -------//
//---------------------------------------------------------------//


/**
 * Sets the priority button icon variable based on the selected button.
 * @function
 * @param {HTMLElement} button - The selected priority button element.
 */
function selectPrio(button) {
    let urgent = document.getElementById('urgent');
    let medium = document.getElementById('medium');
    let low = document.getElementById('low');

    checkPrio(button, urgent, medium, low);
}


/**
 * Styles the selected priority button SVG and removes styling from others.
 * @function
 * @param {number} button - The selected priority button identifier (1 for urgent, 2 for medium, 3 for low).
 * @param {HTMLElement} urgent - The urgent priority button element.
 * @param {HTMLElement} medium - The medium priority button element.
 * @param {HTMLElement} low - The low priority button element.
 */
function checkPrio(button, urgent, medium, low) {
    urgent.classList.remove('selectedSvg');
    medium.classList.remove('selectedSvg');
    low.classList.remove('selectedSvg');

    if (button === 1) {
        urgent.classList.add('selectedSvg');
    }
    if (button === 2) {
        medium.classList.add('selectedSvg');
    }
    if (button === 3) {
        low.classList.add('selectedSvg');
    }
    selectBtn(button);
}


/**
 * Sets the priority button variable based on the selected button identifier.
 * @function
 * @param {number} button - The selected priority button identifier (1 for urgent, 2 for medium, 3 for low).
 */
function selectBtn(button) {
    let urgent = document.getElementById('urgentBtn');
    let medium = document.getElementById('mediumBtn');
    let low = document.getElementById('lowBtn');

    checkBtn(button, urgent, medium, low);
}


/**
 * Styles the selected priority button's background color and removes styling from others.
 * @function
 * @param {number} button - The selected priority button identifier (1 for urgent, 2 for medium, 3 for low).
 * @param {HTMLElement} urgent - The urgent priority button element.
 * @param {HTMLElement} medium - The medium priority button element.
 * @param {HTMLElement} low - The low priority button element.
 */
function checkBtn(button, urgent, medium, low) {
    urgent.classList.remove('urgentBtn');
    medium.classList.remove('mediumBtn');
    low.classList.remove('lowBtn');

    if (button === 1) {
        urgent.classList.add('urgentBtn');
    }
    if (button === 2) {
        medium.classList.add('mediumBtn');
    }
    if (button === 3) {
        low.classList.add('lowBtn');
    }
}


/**
 * Sets the minimum date for the "dateToday" input field to the current date.
 * @function
 */
function today() {
    document.getElementById('dateToday').min = new Date().toISOString().split("T")[0];
}


/**
 * Checks the required input data fields and selects for task creation.
 * @function
 * @returns {boolean} True if all required fields and selects are valid, otherwise false.
 */
function checkInputData() {
    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const dateInput = document.getElementById('dateToday');
    const categoryInput = document.getElementById('chosenCategory');
    const selectedPriority = getSelectedPrio();

    const fieldsValid = checkInputDataFields(titleInput, descriptionInput, dateInput);
    const selectsValid = checkSelectDataFields(categoryInput, selectedPriority);

    return fieldsValid && selectsValid;
}


/**
 * Checks the required input fields for task creation.
 * @function
 * @param {HTMLElement} titleInput - The title input field.
 * @param {HTMLElement} descriptionInput - The description input field.
 * @param {HTMLElement} dateInput - The date input field.
 * @returns {boolean} True if all required input fields are valid, otherwise false.
 */
function checkInputDataFields(titleInput, descriptionInput, dateInput) {
    let fieldsValid = true;

    if (isEmpty(titleInput)) {
        emptyInputAlert(titleInput);
        fieldsValid = false;
    }
    if (isEmpty(descriptionInput)) {
        emptyInputAlert(descriptionInput);
        fieldsValid = false;
    }
    if (isEmpty(dateInput)) {
        emptyInputAlert(dateInput);
        fieldsValid = false;
    }

    return fieldsValid;
}


/**
 * Checks the required select elements for task creation.
 * @function
 * @param {HTMLElement} categoryInput - The category select element.
 * @param {number} selectedPriority - The selected priority identifier (1 for urgent, 2 for medium, 3 for low).
 * @returns {boolean} True if all required select elements are valid, otherwise false.
 */
function checkSelectDataFields(categoryInput, selectedPriority) {
    let selectsValid = true;

    if (categoryInput.innerHTML === 'Select task Category') {
        emptyInputAlert(document.getElementById('categoryInput'));
        selectsValid = false;
    }
    if (selectedPriority === 0) {
        emptyInputAlert(document.getElementById('urgentBtn'));
        emptyInputAlert(document.getElementById('mediumBtn'));
        emptyInputAlert(document.getElementById('lowBtn'));
        selectsValid = false;
    }

    return selectsValid;
}


/**
 * Toggles the checkbox icon of each contact and updates the selected contacts.
 * @function
 * @param {HTMLElement} selectedContact - The selected contact element.
 * @param {HTMLElement} checked - The checkbox element.
 * @param {string} src - The source URL of the checkbox icon.
 * @param {number} id - The ID of the selected contact.
 * @param {number} badge - The badge color of the selected contact.
 * @param {number} index - The index of the selected contact in the list.
 */
function addedContactsCheckBox(selectedContact, checked, src, id, badge, index) {
    if (src === './assets/img/check_button_unchecked.svg') {
        checkedCheckBox(selectedContact, checked, src, id, badge, index);
    } else if (src === './assets/img/check_button_checked.svg') {
        selectedContact.classList.remove('bg-blue', 'font-white');
        checked.src = './assets/img/check_button_unchecked.svg';
        checked.classList.remove('selectedSvg');
        const indexOfId = addedContacts.indexOf(id);
        if (indexOfId !== -1) {
            addedContacts.splice(indexOfId, 1);
            badges.splice(indexOfId, 1);
            addedContactInitial.splice(indexOfId, 1);
        }
    }
}


/**
 * Sets a checkbox as checked for the selected contact and updates the selected contacts.
 * @function
 * @param {HTMLElement} selectedContact - The selected contact element.
 * @param {HTMLElement} checked - The checkbox element.
 * @param {string} src - The source URL of the checkbox icon.
 * @param {number} id - The ID of the selected contact.
 * @param {number} badge - The badge color of the selected contact.
 * @param {number} index - The index of the selected contact in the list.
 */
function checkedCheckBox(selectedContact, checked, src, id, badge, index) {
    selectedContact.classList.add('bg-blue', 'font-white');
    checked.src = './assets/img/check_button_checked.svg';
    checked.classList.add('selectedSvg');
    addedContacts.push(id);
    badges.push(badge);
    addedContactInitial.push(taskContacts[index]['initials']);
    document.getElementById('searchContactInput').value = "";
}


/**
 * Checks the length of the selected contacts and toggles their display.
 * @function
 */
function checkContactLength() {
    const contactDisplay = document.getElementById('contactInitial');

    if (addedContacts.length === 0) {
        contactDisplay.classList.add('d-none');
    } else {
        contactDisplay.classList.remove('d-none');
    }
}


/**
 * Checks if an input field is empty.
 * @function
 * @param {HTMLElement} inputField - The input field to check.
 * @returns {boolean} True if the input field is empty, otherwise false.
 */
function isEmpty(inputField) {
    return inputField.value === '';
}


/**
 * Adds a red border to the input element if it is empty.
 * @function
 * @param {HTMLElement} input - The input element to check and style.
 */
function emptyInputAlert(input) {
    input.classList.add('brd-red');
}


/**
 * Resets the red border of an empty input field.
 * @function
 * @param {string} input - The ID of the input element to reset.
 */
function resetInputAlert(input) {
    let reset = document.getElementById(input);
    reset.classList.remove('brd-red');
}


/**
 * Resets the red border of priority buttons.
 * @function
 * @param {string} urgent - The ID of the urgent priority button.
 * @param {string} medium - The ID of the medium priority button.
 * @param {string} low - The ID of the low priority button.
 */
function resetPrioAlert(urgent, medium, low) {
    let urgentBtn = document.getElementById(urgent);
    let mediumBtn = document.getElementById(medium);
    let lowBtn = document.getElementById(low);
    urgentBtn.classList.remove('brd-red');
    mediumBtn.classList.remove('brd-red');
    lowBtn.classList.remove('brd-red');
}


/**
 * Checks if the subtask input is empty, adds a red border, and toggles the input.
 * @function
 * @param {HTMLElement} subInputCover - The cover element for the subtask input.
 */
function checkSubInputValue(subInputCover) {
    subInputCover.classList.add('brd-red');
    setTimeout(function () {
        subInputCover.classList.remove('brd-red');
    }, 3000);
    toggleSubTaskInput();
}