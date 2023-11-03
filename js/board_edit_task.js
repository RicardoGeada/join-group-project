/* =================================== */
/* ===== EDIT TASK - POP UP VIEW ===== */
/* =================================== */


/**
 * open task edit
 * @param {number} taskID - id of the current task
 */
function editTask(taskID) {
    editPopupOpen = true;
    let task = tasks.find(task => task['id'] == taskID);
    currentTask = JSON.parse(JSON.stringify(task)); // deep copy to disconect the copy from the original object
    let popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'flex';
    popupContainer.innerHTML = generatePopupEditTaskContainerHTML(task,taskID);
    selectPriority(task['priority']);
    renderAssignedUserBadgesEditTask(taskID);
    renderSubtasksInEditTask(taskID);
}
  


// INPUT FOCUS

/**
 * sets the focus on the input, when clicking on the container
 * @param {string} id - id of the input e.g. 'input-title' 
 */
function setFocusOnInput(id) {
  let input = document.getElementById(id);
  input.focus();
}


// CATEGORY

/**
 * open the category list
 */
function openCategoryList() {
  categoryOpen = true;
  let categoryList = document.getElementById('category-list-container');
  let categoryDropdownBtn = document.getElementById('category-dropdown-button');
  categoryList.classList.remove('d-none');
  categoryDropdownBtn.focus();
  toggleCategoryDropdownArrow();
  closeContactList();
}


/**
 * close the category list
 */
function closeCategoryList() {
  categoryOpen = false;
  let categoryList = document.getElementById('category-list-container');
  let categoryDropdownBtn = document.getElementById('category-dropdown-button');
  categoryList.classList.add('d-none');
  categoryDropdownBtn.blur();
  toggleCategoryDropdownArrow();
}


/**
 * toggle the category list
 */
function toggleCategoryList() {
  categoryOpen ? closeCategoryList() : openCategoryList();
}


/**
 * toggle the category dropdown arrow
 */
function toggleCategoryDropdownArrow() {
  let img = document.getElementById('categoryArrow');
  if (categoryOpen) {
    img.src = './assets/img/arrow_up.svg';
  } else {
    img.src = './assets/img/arrow_drop_down.svg'
  }
}


/**
 * select category
 * @param {Element} option - this clicked element
 */
function selectCategoryOption(option) {
  let selectedCategory = document.getElementById('selected-category');
  selectedCategory.innerHTML = option.innerHTML;
  closeCategoryList();
}


/**
 * get the right color for Technical Task / User Story Category
 * @returns number for background-color class bc-...
 */
function getCategoryColor() {
  if (currentTask['category'] == 'Technical Task') {
    return 5;
  } else if (currentTask['category'] == 'User Story'){
    return 10;
  }
}



// DATE
/**
 * get current date to set as minimum input value
 * @returns currentDate
 */
function currentDate() {
  return new Date().toISOString().split("T")[0];
}



// PRIO BUTTONS

/**
 * select priority
 * @param {number} prio - number 1,2 or 3
 */
function selectPriority(prio) {
  let prioColors = ['#ff3d00','#ffa800','#7ae229'];
  let selectedPrioButton = document.getElementById(`prio-button-${prio}`);
  removePrioSelection();
  selectedPrioButton.classList.add('selected-prio');
  document.getElementsByClassName('selected-prio')[0].style = `background-color: ${prioColors[prio - 1]};`;
  currentTask['priority'] = prio;
}


/**
 * remove previous prio selection
 */
function removePrioSelection() {
  if (document.getElementsByClassName('selected-prio')[0]) {
    document.getElementsByClassName('selected-prio')[0].style = `background-color: var(--color-white);`
    document.getElementsByClassName('selected-prio')[0].classList.remove('selected-prio');
  }
}



// ASSIGNED TO

/**
 * open the contact list
 * @param {number} taskID - id of the current task
 */
function openContactList(taskID) {
  contactsOpen = true;
  let contactList = document.getElementById('assigned-contacts-list');
  contactList.classList.remove('d-none');
  toggleContactsDropdownArrow();
  loadContactsIntoDropdown(taskID);
  closeCategoryList();
}


/**
 * close the conatact list
 */
function closeContactList() {
  contactsOpen = false;
  let contactList = document.getElementById('assigned-contacts-list');
  contactList.classList.add('d-none');
  toggleContactsDropdownArrow();
}


/**
 * toggle the contact list open/closed
 * @param {number} taskID - id of the current task
 */
function toggleContactList(taskID) {
  contactsOpen ? closeContactList() : openContactList(taskID);
}


/**
 * toggle the contact dropdown arrow
 */
function toggleContactsDropdownArrow() {
  let img = document.getElementById('contactsArrow');
  if (contactsOpen) {
    img.src = './assets/img/arrow_up.svg';
  } else {
    img.src = './assets/img/arrow_drop_down.svg'
  }
}


/**
 * load all contacts into the dropdown
 */
function loadContactsIntoDropdown() {
  let container = document.getElementById('assigned-to-contacts');
  container.innerHTML = '';
  for (let i = 0; i < sortedContacts.length; i++) {
    const contact = sortedContacts[i];
    if (contact['name'].toLowerCase().includes(contactSearch)) {
      container.innerHTML += generateContactListItemHTML(contact,i);
    }
  }
}

/**
 * load the checked / unchecked svg if the contact is assigned to the task
 * @param {number} contactID - id of the current contact
 * @returns src path for checked/unchecked svg
 */
function loadCheckButtonImg(contactID) {
  let isAssigned = currentTask['assigned_to'].includes(contactID);
  if (isAssigned) {
    return '/assets/img/check_button_checked.svg';
  } else {
    return '/assets/img/check_button_unchecked.svg';
  }
}


/**
 * adds css class 'assigned' if the contact is assigned to the task
 * @param {number} contactID - id of the current contact
 * @returns string
 */
function addCSSClass_assigned(contactID) {
  let isAssigned = currentTask['assigned_to'].includes(contactID);
  if (isAssigned) {
    return 'assigned';
  } else {
    return '';
  }
}


/**
 * check if the contact is a join user / only a contact / you
 * @param {number} userid - userid of the contact
 * @returns string / user type declaration
 */
function checkContactUserState(userid) {
  if (userid == currentUser['id']) {
    return '(You)'
  } else if (userid < 0) {
    return '';
  } else {
    return '(User)';
  }
}


/**
 * toggle contact between assigned / not assigned 
 * @param {number} contactID -contact id
 * @param {number} imgID - id number for the checkbox img
 */
function toggleAssignment(contactID,imgID) {
  let contactListItem = document.getElementById(`contact-${contactID}`);
  let checkBoxImg = document.getElementById(imgID);
  let isAssigned = currentTask['assigned_to'].includes(contactID);
  if (isAssigned) {
    contactListItem.classList.remove('assigned');
    let index = currentTask['assigned_to'].indexOf(contactID);
    currentTask['assigned_to'].splice(index,1);
    checkBoxImg.src = '/assets/img/check_button_unchecked.svg';
  } else {
    contactListItem.classList.add('assigned');
    currentTask['assigned_to'].push(contactID);
    checkBoxImg.src = '/assets/img/check_button_checked.svg';
  };
  renderAssignedUserBadgesEditTask();
}


/**
 * rendel all assigned user badges in edit task view
 */
function renderAssignedUserBadgesEditTask() {
  let assignedContacts = currentTask['assigned_to'];
  let container = document.getElementById('assigned-contact-badges-container');
  container.innerHTML = '';
  for (let i = 0; i < assignedContacts.length; i++) {
    let contact = contacts.find(u => u['id'] == assignedContacts[i]);
    if (contact != undefined) {
      container.innerHTML += /*html*/`
      <div class="profile-badge bc-${contact['badge-color']} width-40px">${contact['initials']}</div>
    `;
    }
  };
}


/**
 * sort contacts alphabetically & puts current user at the first position
 * @param {Array} arr - contacts array
 */
function sortContactsOnBoard(arr) {
  sortedContacts = [...arr];
  sortedContacts.sort((c1, c2) =>
    c1.initials < c2.initials ? -1 : c1.initials > c2.initials ? 1 : 0
  );
  // place user at the first position
  if (currentUser['id'] >= 0) {
    const currentUserIndex = sortedContacts.findIndex(contact => contact['userid'] == currentUser['id']);
    const currentUserContactInfo = JSON.parse(JSON.stringify(sortedContacts[currentUserIndex]));
    sortedContacts.splice(currentUserIndex,1);
    sortedContacts.unshift(currentUserContactInfo);
  }
}

/**
 * search in the contacts for specific contacts
 */
function searchContactsEditTask() {
  let searchbar = document.getElementById('input-assigned-to');
  contactSearch = searchbar.value.toLowerCase();
  loadContactsIntoDropdown();
}



// SUBTASKS

/**
 * render all subtasks in edit task view
 */
function renderSubtasksInEditTask() {
  let subtasks = currentTask['subtasks'];
  let container = document.getElementById('popup-task-edit-subtasks-container');
  container.innerHTML = '';
  for (let i = 0; i < subtasks.length; i++) {
    const subtask = subtasks[i];
    container.innerHTML += generateSubtaskInEditPopupHTML(subtask,i);
  }
}



/**
 * switch to edit for current subtask
 * @param {number} subtaskIndex - index of the current subtask
 */
function editSubtask(subtaskIndex) {
  renderSubtasksInEditTask();
  let subtask = currentTask['subtasks'][subtaskIndex];
  let container = document.getElementById(`popup-task-edit-subtask-${subtaskIndex}`);
  container.innerHTML = generateEditSubtaskHTML(subtask,subtaskIndex);
  document.getElementById('subtask-edit-input').focus();
}


/**
 * edit save subtask on enter
 * @param {event} event onkeydown
 * @param {number} subtaskIndex - index of the current subtask
 */
function editSubtaskWithEnter(event,subtaskIndex) {
  if (event.key === 'Enter') {
    event.preventDefault();
    saveSubtask(subtaskIndex);
}
}

/**
 * save the edited subtask
 * @param {number} subtaskIndex - index of the current subtask
 */
function saveSubtask(subtaskIndex) {
  let subtask = currentTask['subtasks'][subtaskIndex];
  let input = document.getElementById(`subtask-edit-input`);
  if (input.value != '') {
    subtask['subtask'] = input.value;
    renderSubtasksInEditTask();
  } else {
    deleteSubtask(subtaskIndex);
  }

}


/**
 * delete subtask
 * @param {number} subtaskIndex - index of the current subtask
 */
function deleteSubtask(subtaskIndex) {
  currentTask['subtasks'].splice(subtaskIndex,1);
  renderSubtasksInEditTask();
}



/**
 * add new subtask if input has some value
 */
function addNewSubtask() {
  let input = document.getElementById(`input-subtasks`);
  if (input.value != '') {
    let newSubtask = {
      done: false,
      subtask: `${input.value}`,
    };
    currentTask['subtasks'].push(newSubtask);
  }
  input.value = '';
  input.blur();
  renderSubtasksInEditTask();
}
 

/**
 * add new subtask by pressing the enter key
 * @param {event} event - onkeydown
 */
function addNewSubtaskWithEnter(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    addNewSubtask();
  }
}



// ACCEPT EDIT

/**
 * accept the edit of the task
 * @param {number} taskID - id of the current task
 */
async function acceptEdit(taskID) {
  let task = tasks.find(task => task['id'] == taskID);
  // create edited task
  currentTask['category'] = document.getElementById('selected-category').innerHTML;
  currentTask['category_color'] = getCategoryColor();
  currentTask['title'] = document.getElementById('input-title').value;
  currentTask['description'] = document.getElementById('input-description').value;
  currentTask['due_date'] = document.getElementById('input-due-date').value;
  // replace old task with edited task
  if (currentUser['id'] == -2) {
    msgBox();
  } else {
    saveEditedTask(task,currentTask);
    currentTask = {};
    closePopup();
  }
}

/**
 * save the edited task
 * @param {JSON} task - the task the user opened
 * @param {JSON} currentTask - edited copy of the task the user opened
 */
async function saveEditedTask(task,currentTask) {
  task['category'] = currentTask['category'];
  task['category_color'] = currentTask['category_color'];
  task['title'] = currentTask['title'];
  task['description'] = currentTask['description'];
  task['due_date'] = currentTask['due_date'];
  task['priority'] = currentTask['priority'];
  task['assigned_to'] = currentTask['assigned_to'];
  task['subtasks'] = currentTask['subtasks'];
  await setItem('tasks', JSON.stringify(tasks));
}


/* =========================== */
/* ===== FORM VALIDATION ===== */
/* =========================== */


/**
 * mark input container red, when not valid iput
 */
document.addEventListener('input', function() {
  let editPopup = document.getElementById('popup-task-edit-container');
  if (editPopup) {
    let inputs = editPopup.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.validity.valid) {
        input.parentElement.classList.remove('invalid');
      } else {
        input.parentElement.classList.add('invalid');
      }
    }
  }
})

/**
 * mark textarea container red, when not valid iput
 */
document.addEventListener('input', function() {
  let editPopup = document.getElementById('popup-task-edit-container');
  if (editPopup) {
    let inputs = editPopup.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.validity.valid) {
        input.parentElement.classList.remove('invalid');
      } else {
        input.parentElement.classList.add('invalid');
      }
    }
  }
})