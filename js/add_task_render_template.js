//-------------------------------------//
//------- HTML Render Templates -------//
//-------------------------------------//


/**
 * Generates HTML markup for a contact's initials badge.
 * @function
 * @param {number} index - The index of the contact in the sorted contact list.
 * @param {string} initial - The initials of the contact.
 * @returns {string} The HTML markup for the contact's initials badge.
 */
function contactInitialsHTML(index, initial) {
    return `<div class="profile-badge bc-${sortedContactList[index]['badge-color']} brd-white">${initial}</div>`;
}


/**
 * Generates HTML markup for rendering a contact in the user interface.
 * @function
 * @param {number} index - The index of the contact in the sorted contact list.
 * @param {object} contact - The contact object to render.
 * @returns {string} The HTML markup for rendering the contact.
 */
function renderContactHTML(index, contact) {
    const contactClass = contact.userState === '(You)' ? 'currentContact' : '';

    return `
      <div id="contact${index}" class="singleContact option item brd-r10 ${contactClass}" onclick="addedContact(${index})">
        <div class="singleContactInitialName">
          <div class="font-white profile-badge bc-${contact['badge-color']} brd-white">${contact['initials']}</div>
          <p>${contact['name']}</p>
          <div>${checkUserState(sortedContactList[index]['userid'])}</div>
        </div>
        <img id="check${index}" src="./assets/img/check_button_unchecked.svg">
      </div>`;
}


/**
 * Generates HTML markup for rendering a subtask in the user interface.
 * @function
 * @param {string} sub - The subtask content.
 * @param {number} index - The index of the subtask in the list.
 * @returns {string} The HTML markup for rendering the subtask.
 */
function renderSubHTML(sub, index) {
    return `<div id="listElement${index}" class="subListElement">
                <div class="subListInnerElement">
                    <img src="./assets/img/dot.png" alt="">
                    ${maskSpecialChars(sub)}
                </div>
                <div class="subListInnerElement">
                    <img class="item" src="./assets/img/edit_icon.svg" onclick="editSubElement(${index})">
                    <div class="subBorder"></div>
                    <img class="item" src="./assets/img/delete_icon.svg" onclick="deleteSub(${index})">
                </div>
            </div>
            <div id="editListElement${index}" class="editSub d-none">
                <input id="editSubTask${index}" type="text" onkeydown="enterKeyDownEditSub(event,${index})">
                <div class="editListElementButton">
                    <img class="item" src="./assets/img/delete_icon.svg" onclick="deleteSub(${index})">
                    <div class="subBorder"></div>
                    <img  class="item" src="./assets/img/input_check.svg" onclick="setNewSubValue(${index})">
                </div>
            </div>`;
}