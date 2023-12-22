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
    if (button === 1) urgent.classList.add('selectedSvg');
    if (button === 2) medium.classList.add('selectedSvg');
    if (button === 3) low.classList.add('selectedSvg');
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
    if (button === 1) urgent.classList.add('urgentBtn');
    if (button === 2) medium.classList.add('mediumBtn');
    if (button === 3) low.classList.add('lowBtn');
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
    if (!addedContacts.includes(id)) {
        addedContacts.push(id);
        badges.push(badge);
        addedContactInitial.push(contacts[index]['initials']);
    }
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
 * @param {HTMLElement} newSub - The cover element for the subtask input.
 */
function checkSubInputValue(newSub) {
    newSub.classList.add('brd-red');
    setTimeout(() => newSub.classList.remove('brd-red'),3000);
}