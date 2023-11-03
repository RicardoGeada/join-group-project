/* ================= */
/* ===== BOARD ===== */
/* ================= */

function boardHeaderDesktopHTML() {
  return `
    <!-- Desktop -->
    <h1>Board</h1>
    <div class="board-header-right">
        <div class="board-searchbar-container">
            <input type="text" name="" id="board-searchbar" class="board-searchbar" placeholder="Find Task" autocomplete="off" onkeyup="searchTasks()">
            <div class="board-searchbar-container-inner-right">
                <div class="v-line-separator"></div>
                <svg class="icon-button" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_81525_6538" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                    <rect width="32" height="32" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_81525_6538)">
                    <path d="M13.7118 20.2137C11.8946 20.2137 10.3567 19.5843 9.098 18.3256C7.83931 17.0669 7.20996 15.529 7.20996 13.7118C7.20996 11.8946 7.83931 10.3567 9.098 9.098C10.3567 7.83931 11.8946 7.20996 13.7118 7.20996C15.529 7.20996 17.0669 7.83931 18.3256 9.098C19.5843 10.3567 20.2137 11.8946 20.2137 13.7118C20.2137 14.4454 20.097 15.1372 19.8636 15.7874C19.6302 16.4376 19.3134 17.0127 18.9133 17.5129L24.5149 23.1145C24.6983 23.2979 24.79 23.5313 24.79 23.8147C24.79 24.0981 24.6983 24.3315 24.5149 24.5149C24.3315 24.6983 24.0981 24.79 23.8147 24.79C23.5313 24.79 23.2979 24.6983 23.1145 24.5149L17.5129 18.9133C17.0127 19.3134 16.4376 19.6302 15.7874 19.8636C15.1372 20.097 14.4454 20.2137 13.7118 20.2137ZM13.7118 18.2131C14.9622 18.2131 16.025 17.7755 16.9002 16.9002C17.7755 16.025 18.2131 14.9622 18.2131 13.7118C18.2131 12.4615 17.7755 11.3987 16.9002 10.5234C16.025 9.64815 14.9622 9.21053 13.7118 9.21053C12.4615 9.21053 11.3987 9.64815 10.5234 10.5234C9.64815 11.3987 9.21053 12.4615 9.21053 13.7118C9.21053 14.9622 9.64815 16.025 10.5234 16.9002C11.3987 17.7755 12.4615 18.2131 13.7118 18.2131Z" fill="#2A3647"/>
                    </g>
                </svg> 
            </div>
        </div>
        <button class="btn-add-task-with-text" onclick="openAddNewTaskPopUp('to-do')">
            <span class="font-21px-700">Add task</span>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.24854 8H1.24854C0.965202 8 0.727702 7.90417 0.536035 7.7125C0.344368 7.52083 0.248535 7.28333 0.248535 7C0.248535 6.71667 0.344368 6.47917 0.536035 6.2875C0.727702 6.09583 0.965202 6 1.24854 6H6.24854V1C6.24854 0.716667 6.34437 0.479167 6.53604 0.2875C6.7277 0.0958333 6.9652 0 7.24854 0C7.53187 0 7.76937 0.0958333 7.96104 0.2875C8.1527 0.479167 8.24854 0.716667 8.24854 1V6H13.2485C13.5319 6 13.7694 6.09583 13.961 6.2875C14.1527 6.47917 14.2485 6.71667 14.2485 7C14.2485 7.28333 14.1527 7.52083 13.961 7.7125C13.7694 7.90417 13.5319 8 13.2485 8H8.24854V13C8.24854 13.2833 8.1527 13.5208 7.96104 13.7125C7.76937 13.9042 7.53187 14 7.24854 14C6.9652 14 6.7277 13.9042 6.53604 13.7125C6.34437 13.5208 6.24854 13.2833 6.24854 13V8Z" fill="#FFFFFF"/>
            </svg>
        </button>
    </div>
  `
}
  
function boardHeaderMobileHTML() {
  return `
  <!-- Mobile -->
  <h1>Board</h1>
  <button class="btn-add-task-filled width-40px fl-jcc-aic" onclick="openAddNewTaskPopUp('to-do')">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1.5V16.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <path d="M16.5 9.1416L1.5 9.1416" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      </svg>    
  </button>
  <!-- SEARCHBAR -->
  <div class="board-searchbar-container">
      <input type="text" name="" id="board-searchbar" class="board-searchbar" placeholder="Find Task" autocomplete="off" onkeyup="searchTasks()">
      <div class="board-searchbar-container-inner-right">
          <div class="v-line-separator"></div>
          <svg class="icon-button" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_81525_6538" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
              <rect width="32" height="32" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_81525_6538)">
              <path d="M13.7118 20.2137C11.8946 20.2137 10.3567 19.5843 9.098 18.3256C7.83931 17.0669 7.20996 15.529 7.20996 13.7118C7.20996 11.8946 7.83931 10.3567 9.098 9.098C10.3567 7.83931 11.8946 7.20996 13.7118 7.20996C15.529 7.20996 17.0669 7.83931 18.3256 9.098C19.5843 10.3567 20.2137 11.8946 20.2137 13.7118C20.2137 14.4454 20.097 15.1372 19.8636 15.7874C19.6302 16.4376 19.3134 17.0127 18.9133 17.5129L24.5149 23.1145C24.6983 23.2979 24.79 23.5313 24.79 23.8147C24.79 24.0981 24.6983 24.3315 24.5149 24.5149C24.3315 24.6983 24.0981 24.79 23.8147 24.79C23.5313 24.79 23.2979 24.6983 23.1145 24.5149L17.5129 18.9133C17.0127 19.3134 16.4376 19.6302 15.7874 19.8636C15.1372 20.097 14.4454 20.2137 13.7118 20.2137ZM13.7118 18.2131C14.9622 18.2131 16.025 17.7755 16.9002 16.9002C17.7755 16.025 18.2131 14.9622 18.2131 13.7118C18.2131 12.4615 17.7755 11.3987 16.9002 10.5234C16.025 9.64815 14.9622 9.21053 13.7118 9.21053C12.4615 9.21053 11.3987 9.64815 10.5234 10.5234C9.64815 11.3987 9.21053 12.4615 9.21053 13.7118C9.21053 14.9622 9.64815 16.025 10.5234 16.9002C11.3987 17.7755 12.4615 18.2131 13.7118 18.2131Z" fill="#2A3647"/>
              </g>
          </svg> 
      </div>
  </div>
  `
}

/**
 * HTML Template - for Board Task
 * 
 * @param {JSON} taskJSON - JSON Element with the informations of the task
 * @returns HTML for Board Task
 */
function generateBoardTaskHTML(taskJSON) {
    return /*html*/ `
      <div id="task-${taskJSON['id']}-container" class="task-container" onclick="openPopup(${taskJSON['id']})" draggable="true" ondragstart="startDragging(${taskJSON['id']},event)" ondrag="drag(event)"  ondragend="dragEnd(event)"  ontouchstart="touchStart(${taskJSON['id']},event)" ontouchmove="touchDrag(event)" ontouchend="touchEnd(event)">
          <div class="task-category bc-${taskJSON['category_color']}">${taskJSON['category']}</div>
          <div class="task-text">
              <div class="task-title">${maskSpecialChars(taskJSON['title'])}</div>
              <div class="task-description">${maskSpecialChars(shortenString(taskJSON['description'],50))}</div>
          </div>
         ${generateBoardSubtasksHTML(taskJSON)}
          <div class="task-assignments-prio-container">
              <div class="task-assignments">
                  ${generateAssignedUserBadges(taskJSON)}
              </div>
              <div class="task-prio">
                  <img src="./assets/img/prio-${taskJSON['priority']}.svg" alt="prio-media-symbol">
              </div>
          </div>
      </div>
    `;
}



/**
 * HTML for the profile badges on board
 * @param {JSON} contact contact JSON
 * @param {number} i - counter for positioning
 * @returns HTML
 */
function profileBadgeForBoardHTML(contact,i) {
    return /*html*/`
    <div class="profile-badge bc-${contact['badge-color']}" style="left: -${(i * 8)}px">${contact['initials']}</div>`;
  }
  
  /**
   * HTML for additional profile badge on board
   * @param {Array} assignedContacts - array of all assigned contacts
   * @param {number} i - counter for positioning
   * @returns HTML
   */
  function additionalProfileBadgeForBoardHTML(assignedContacts,i) {
    return /*html*/`
    <div class="profile-badge" style="left: -${(i * 8)}px; background-color: #2A3647;">+${assignedContacts.length - 5}</div>`;
  }


  

  /**
 * HTML Template - for Subtasks in Board-Task HTML
 * 
 * @param {number} subtasksDone - amount of all subtasks that are done
 * @param {number} procentualAmountDone - procentual amount of subtasks completed
 * @param {Array} subtasks - Array of all subtasks for the task
 * @returns HTML
 */
function boardSubtasksContainerHTML(subtasksDone,procentualAmountDone,subtasks) {
    return /*html*/`
        <div class="task-subtask-progress-container">
            <div class="subtask-progress-bar">
                <div class="subtask-progress-bar-fill" style="width: ${procentualAmountDone}%"></div>
            </div>
            <div class="subtask-progress-text">${subtasksDone}/${subtasks.length} Subtasks</div>
        </div>
    `;
}



/**
 * HTML Template - for no-task-container
 * 
 * @param {string} taskStateCategory - e.g. 'to-do'
 * @returns HTML for no-task-container
 */
function noTaskContainerHTML(taskStateCategory) {
    return /*html*/`
      <div class="no-task-container">
        <div>No tasks ${taskStateCategory}</div>
      </div>
    `;
}





/* ================== */
/* ===== POP UP ===== */
/* ================== */

function generatePopupTaskContainerHTML(task,taskID) {
    return /*html*/`
        <div class="popup-task-container" onclick="stopPropagation(event)">
            <div class="popup-task-header">
                <div class="task-category bc-${task['category_color']}">${task['category']}</div>
                <button class="close-button icon-button" onclick="closePopup()">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_81722_982" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                        <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_81722_982)">
                        <path d="M15.9998 17.3998L11.0998 22.2998C10.9165 22.4831 10.6831 22.5748 10.3998 22.5748C10.1165 22.5748 9.88314 22.4831 9.6998 22.2998C9.51647 22.1165 9.4248 21.8831 9.4248 21.5998C9.4248 21.3165 9.51647 21.0831 9.6998 20.8998L14.5998 15.9998L9.6998 11.0998C9.51647 10.9165 9.4248 10.6831 9.4248 10.3998C9.4248 10.1165 9.51647 9.88314 9.6998 9.6998C9.88314 9.51647 10.1165 9.4248 10.3998 9.4248C10.6831 9.4248 10.9165 9.51647 11.0998 9.6998L15.9998 14.5998L20.8998 9.6998C21.0831 9.51647 21.3165 9.4248 21.5998 9.4248C21.8831 9.4248 22.1165 9.51647 22.2998 9.6998C22.4831 9.88314 22.5748 10.1165 22.5748 10.3998C22.5748 10.6831 22.4831 10.9165 22.2998 11.0998L17.3998 15.9998L22.2998 20.8998C22.4831 21.0831 22.5748 21.3165 22.5748 21.5998C22.5748 21.8831 22.4831 22.1165 22.2998 22.2998C22.1165 22.4831 21.8831 22.5748 21.5998 22.5748C21.3165 22.5748 21.0831 22.4831 20.8998 22.2998L15.9998 17.3998Z" fill="#2A3647"/>
                        </g>
                    </svg>                            
                </button>
            </div>
            <div class="popup-task-main">
                <h2 id="popup-task-title" class="popup-task-title">${maskSpecialChars(task['title'])}</h2>
                <p id="popup-task-description" class="popup-task-description">${maskSpecialChars(task['description'])}</p>
                <div class="popup-task-info-container">
                    <div class="popup-task-info-title">Due Date:</div>
                    <div class="popup-task-info">${maskSpecialChars(task['due_date'])}</div>
                </div>
                <div id="popup-task-priority-container" class="popup-task-info-container">
                    <div class="popup-task-info-title">Priority:</div>
                    <div class="popup-task-info">
                        <div>${prioToText(`${task['priority']}`)}</div>
                        <img src="./assets/img/prio-${task['priority']}.svg" alt="prio-${task['priority']}">  
                    </div>
                </div>
                ${generatePopupAssignedToContainerHTML(task)}
                ${generatePopupSubtasksContainerHTML(task)}
            </div>
            <div class="popup-task-footer">
                <button id="popup-task-delete-button" class="btn-task-edit" onclick="deleteTask(${taskID})">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_81758_217" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_81758_217)">
                      <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM7 6V19H17V6H7ZM9 16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16ZM13 16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16Z" fill="#2A3647"/>
                    </g>
                  </svg>
                    <div>Delete</div>
                </button>
                <div class="v-line-separator"></div>
                <button id="popup-task-edit-button" class="btn-task-edit" onclick="editTask(${taskID})">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_81758_502" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_81758_502)">
                      <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" fill="#2A3647"/>
                    </g>
                  </svg>
                  <div>Edit</div>
                </button>
            </div>
        </div>
    `;
}



function generatePopupAssignedToContainerHTML(task) {
  let html = '';
  if (task['assigned_to'].length > 0) {
    html = /*html*/`
    <div id="popup-task-assigned-to-container" class="popup-task-info-container flex-column gap-8px overflow-hidden">
        <div class="popup-task-info-title">Assigned To:</div>
        <div class="popup-task-info popup-task-assigned-to-contacts">
            <ul class="contacts-list">
              ${generatePopupContactsHTML(task)}
            </ul>
        </div>
    </div>
    
  `
  };
  return html;
}
  
  
function generatePopupContactsHTML(task) {
  let contactList = '';
  for (let i = 0; i < task['assigned_to'].length; i++) {
    let contact = contacts.find( contact => contact['id'] == task['assigned_to'][i]);
    if (contact != undefined) {
        if (contact['userid'] == currentUser['id']) {
            contactList = contactListItemHTML(contact) + contactList;
        } else {
            contactList += contactListItemHTML(contact);
        }
    }
  }
  return contactList;
}


function contactListItemHTML(contact) {
    return /*html*/`
    <li class="contacts-list-item">
      <div class="profile-badge bc-${contact['badge-color']} width-40 border-2px">${maskSpecialChars(contact['initials'])}</div>
      <div class="contact-name">${maskSpecialChars(contact['name'])}</div>
      <div class="contact-user-state">${checkContactUserState(contact['userid'])}</div>
    </li>  
  `;
}


function generatePopupSubtasksContainerHTML(task) {
  let html = '';
  if (task['subtasks'].length > 0) {
    html = /*html*/`
      <div class="popup-task-info-container flex-column gap-8px overflow-hidden">
        <div class="popup-task-info-title">Subtasks:</div>
        <div class="popup-task-info popup-task-subtasks">
            <ul class="subtasks-list">
                ${generatePopupSubtasksHTML(task)} 
            </ul>
        </div>
      </div>
    `;
  };
  return html;
}

function generatePopupSubtasksHTML(task) {
  let html = '';
  let checkButtonsSRC = ['./assets/img/check_button_unchecked.svg','./assets/img/check_button_checked.svg']
  for (let i = 0; i < task['subtasks'].length; i++) {
    let done = task['subtasks'][i]['done'];
    html += /*html*/`
      <li class="subtasks-list-item" onclick="toggleSubtaskState(${task['id']},${i})">
          <img id="subtask-${i}-checkbutton" src="${checkButtonsSRC[+done]}" alt="checked-icon">
          <div>${maskSpecialChars(task['subtasks'][i]['subtask'])}</div>
      </li>          
    `;
  }
  return html;
}





/* ===================== */
/* ===== EDIT TASK ===== */
/* ===================== */

function generatePopupEditTaskContainerHTML(task,taskID) {
    return /*html*/`
        <div id="popup-task-edit-container" class="popup-task-edit-container" onclick="stopPropagation(event),closeContactList(${taskID}),closeCategoryList()">
            <div class="popup-task-edit-header">
                <div class="empty"></div>
                <button class="icon-button" onclick="closePopup()" type="button">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_81722_982" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                        <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_81722_982)">
                        <path d="M15.9998 17.3998L11.0998 22.2998C10.9165 22.4831 10.6831 22.5748 10.3998 22.5748C10.1165 22.5748 9.88314 22.4831 9.6998 22.2998C9.51647 22.1165 9.4248 21.8831 9.4248 21.5998C9.4248 21.3165 9.51647 21.0831 9.6998 20.8998L14.5998 15.9998L9.6998 11.0998C9.51647 10.9165 9.4248 10.6831 9.4248 10.3998C9.4248 10.1165 9.51647 9.88314 9.6998 9.6998C9.88314 9.51647 10.1165 9.4248 10.3998 9.4248C10.6831 9.4248 10.9165 9.51647 11.0998 9.6998L15.9998 14.5998L20.8998 9.6998C21.0831 9.51647 21.3165 9.4248 21.5998 9.4248C21.8831 9.4248 22.1165 9.51647 22.2998 9.6998C22.4831 9.88314 22.5748 10.1165 22.5748 10.3998C22.5748 10.6831 22.4831 10.9165 22.2998 11.0998L17.3998 15.9998L22.2998 20.8998C22.4831 21.0831 22.5748 21.3165 22.5748 21.5998C22.5748 21.8831 22.4831 22.1165 22.2998 22.2998C22.1165 22.4831 21.8831 22.5748 21.5998 22.5748C21.3165 22.5748 21.0831 22.4831 20.8998 22.2998L15.9998 17.3998Z" fill="#2A3647"/>
                        </g>
                    </svg>                            
                </button>
            </div>
            <form  id="popup-task-edit-form" class="popup-task-edit-form" autocomplete="off" onsubmit="acceptEdit(${taskID}); return false;">
                <div class="popup-task-edit-main">
                <!-- Category -->
                <div class="popup-task-edit-info-container" onclick="stopPropagation(event)">
                    <div class="popup-task-edit-info-headline">Category</div>
                    <div class="input-field-container category-container">
                      <div id="selected-category" style="width: 100%;" onclick="toggleCategoryList(),stopPropagation(event)">${task['category']}</div>
                      <button id="category-dropdown-button" class="icon-button" onclick="toggleCategoryList(),stopPropagation(event)" type="button">
                        <img id="categoryArrow" src="./assets/img/arrow_drop_down.svg" alt="" >
                      </button>
                    </div>
                    <div id="category-list-container" class="category-list-container d-none">
                        <div class="task-category-option" onclick="selectCategoryOption(this)">Technical Task</div>             
                        <div class="task-category-option" onclick="selectCategoryOption(this)">User Story</div>             
                    </div>
                </div>
                <!-- Title -->
                <div class="popup-task-edit-info-container">
                    <div class="popup-task-edit-info-headline">Title</div>
                    <div class="input-field-container"  onclick="setFocusOnInput('input-title')">
                        <input id="input-title" type="text" value="${task['title']}" maxlength="50" required>
                    </div>
                </div>
                <!-- Description -->
                <div class="popup-task-edit-info-container">
                    <div class="popup-task-edit-info-headline">Description</div>
                    <div class="textarea-field-container"  onclick="setFocusOnInput('input-description')">
                        <textarea id="input-description" type="text" required>${task['description']}</textarea>
                    </div>
                </div>
                <!-- Due Date -->
                <div class="popup-task-edit-info-container">
                    <div class="popup-task-edit-info-headline">Due Date</div>
                    <div class="input-field-container pos-rel"  onclick="setFocusOnInput('input-due-date')" >
                        <input id="input-due-date" type="date" value="${task['due_date']}" min="${currentDate()}">
                        <svg class="input-date-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_81758_1232" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_81758_1232)">
                                <path d="M14.5 18C13.8 18 13.2083 17.7583 12.725 17.275C12.2417 16.7917 12 16.2 12 15.5C12 14.8 12.2417 14.2083 12.725 13.725C13.2083 13.2417 13.8 13 14.5 13C15.2 13 15.7917 13.2417 16.275 13.725C16.7583 14.2083 17 14.8 17 15.5C17 16.2 16.7583 16.7917 16.275 17.275C15.7917 17.7583 15.2 18 14.5 18ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V3C6 2.71667 6.09583 2.47917 6.2875 2.2875C6.47917 2.09583 6.71667 2 7 2C7.28333 2 7.52083 2.09583 7.7125 2.2875C7.90417 2.47917 8 2.71667 8 3V4H16V3C16 2.71667 16.0958 2.47917 16.2875 2.2875C16.4792 2.09583 16.7167 2 17 2C17.2833 2 17.5208 2.09583 17.7125 2.2875C17.9042 2.47917 18 2.71667 18 3V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z" fill="#2A3647"/>
                            </g>
                        </svg>    
                    </div>
                </div>
                <!-- Prio -->
                <div class="popup-task-edit-info-container">
                    <div class="popup-task-edit-info-headline">Priority</div>
                    <div class="prio-buttons-container">
                        <button id="prio-button-1" class="prio-button" onclick="selectPriority(1)" type="button">
                            <div>Urgent</div>
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.00002 4.75476C9.19945 4.75443 9.39372 4.81633 9.55427 4.93137L17.1228 10.3653C17.2212 10.4361 17.3044 10.525 17.3675 10.627C17.4307 10.7291 17.4725 10.8422 17.4907 10.9599C17.5273 11.1977 17.4654 11.4399 17.3184 11.6333C17.1714 11.8266 16.9514 11.9553 16.7068 11.9909C16.4623 12.0266 16.2131 11.9664 16.0143 11.8234L9.00002 6.7925L1.98577 11.8234C1.8873 11.8942 1.77545 11.9454 1.65662 11.9742C1.53779 12.0029 1.4143 12.0086 1.2932 11.9909C1.1721 11.9733 1.05577 11.9326 0.950844 11.8712C0.845915 11.8099 0.754446 11.729 0.681662 11.6333C0.608878 11.5375 0.556201 11.4288 0.52664 11.3132C0.49708 11.1977 0.491215 11.0776 0.509379 10.9599C0.527545 10.8422 0.569382 10.7291 0.632508 10.627C0.695632 10.525 0.778805 10.4361 0.87728 10.3653L8.44577 4.93137C8.60631 4.81633 8.80059 4.75443 9.00002 4.75476Z" fill="#FF3D00"/>
                                <path d="M9.00002 -0.000121266C9.19945 -0.000455511 9.39372 0.0614475 9.55427 0.176482L17.1228 5.61045C17.3216 5.75336 17.454 5.96724 17.4907 6.20502C17.5273 6.4428 17.4654 6.68501 17.3184 6.87837C17.1714 7.07173 16.9514 7.20039 16.7068 7.23606C16.4623 7.27173 16.2131 7.21147 16.0143 7.06856L9.00002 2.03761L1.98577 7.06856C1.78689 7.21147 1.53777 7.27173 1.2932 7.23606C1.04863 7.20039 0.828657 7.07173 0.681662 6.87837C0.534667 6.68501 0.472695 6.4428 0.509379 6.20502C0.546065 5.96723 0.678402 5.75336 0.87728 5.61044L8.44577 0.176482C8.60631 0.0614474 8.80059 -0.000455546 9.00002 -0.000121266Z" fill="#FF3D00"/>
                            </svg>
                        </button>
                        <button id="prio-button-2" class="prio-button" onclick="selectPriority(2)" type="button">
                            <div>Medium</div>
                            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_81273_4781)">
                                <path d="M16.5685 7.16658L1.43151 7.16658C1.18446 7.16658 0.947523 7.06773 0.772832 6.89177C0.598141 6.71581 0.5 6.47716 0.5 6.22831C0.5 5.97947 0.598141 5.74081 0.772832 5.56485C0.947523 5.38889 1.18446 5.29004 1.43151 5.29004L16.5685 5.29004C16.8155 5.29004 17.0525 5.38889 17.2272 5.56485C17.4019 5.74081 17.5 5.97947 17.5 6.22831C17.5 6.47716 17.4019 6.71581 17.2272 6.89177C17.0525 7.06773 16.8155 7.16658 16.5685 7.16658Z" fill="#FFA800"/>
                                <path d="M16.5685 2.7098L1.43151 2.7098C1.18446 2.7098 0.947523 2.61094 0.772832 2.43498C0.598141 2.25902 0.5 2.02037 0.5 1.77152C0.5 1.52268 0.598141 1.28403 0.772832 1.10807C0.947523 0.932105 1.18446 0.833252 1.43151 0.833252L16.5685 0.833252C16.8155 0.833252 17.0525 0.932105 17.2272 1.10807C17.4019 1.28403 17.5 1.52268 17.5 1.77152C17.5 2.02037 17.4019 2.25902 17.2272 2.43498C17.0525 2.61094 16.8155 2.7098 16.5685 2.7098Z" fill="#FFA800"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_81273_4781">
                                <rect width="17" height="6.33333" fill="white" transform="translate(0.5 0.833252)"/>
                                </clipPath>
                                </defs>
                            </svg>    
                        </button>
                        <button id="prio-button-3" class="prio-button" onclick="selectPriority(3)" type="button">
                            <div>Low</div>
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_81273_4809)">
                                <path d="M8.99974 7.24524C8.80031 7.24557 8.60603 7.18367 8.44549 7.06863L0.876998 1.63467C0.778524 1.56391 0.695351 1.47498 0.632227 1.37296C0.569103 1.27094 0.527264 1.15784 0.5091 1.0401C0.472414 0.802317 0.534386 0.560105 0.681381 0.366747C0.828377 0.17339 1.04835 0.0447247 1.29292 0.00905743C1.53749 -0.0266099 1.78661 0.0336422 1.98549 0.176559L8.99974 5.2075L16.014 0.17656C16.1125 0.105795 16.2243 0.0545799 16.3431 0.02584C16.462 -0.00289994 16.5855 -0.00860237 16.7066 0.00905829C16.8277 0.0267189 16.944 0.0673968 17.0489 0.128769C17.1538 0.190142 17.2453 0.271007 17.3181 0.366748C17.3909 0.462489 17.4436 0.571231 17.4731 0.686765C17.5027 0.802299 17.5085 0.922362 17.4904 1.0401C17.4722 1.15784 17.4304 1.27094 17.3672 1.37296C17.3041 1.47498 17.221 1.56391 17.1225 1.63467L9.55398 7.06863C9.39344 7.18367 9.19917 7.24557 8.99974 7.24524Z" fill="#7AE229"/>
                                <path d="M8.99998 12.0001C8.80055 12.0005 8.60628 11.9386 8.44574 11.8235L0.877242 6.38955C0.678366 6.24664 0.546029 6.03276 0.509344 5.79498C0.472658 5.5572 0.53463 5.31499 0.681625 5.12163C0.828621 4.92827 1.0486 4.79961 1.29317 4.76394C1.53773 4.72827 1.78686 4.78853 1.98574 4.93144L8.99998 9.96239L16.0142 4.93144C16.2131 4.78853 16.4622 4.72827 16.7068 4.76394C16.9514 4.79961 17.1713 4.92827 17.3183 5.12163C17.4653 5.31499 17.5273 5.5572 17.4906 5.79498C17.4539 6.03276 17.3216 6.24664 17.1227 6.38956L9.55423 11.8235C9.39369 11.9386 9.19941 12.0005 8.99998 12.0001Z" fill="#7AE229"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_81273_4809">
                                <rect width="17" height="12" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- Assigned To -->
                <div class="popup-task-edit-info-container" onclick="stopPropagation(event)">
                    <div class="popup-task-edit-info-headline">Assigned to</div>
                    <div class="input-field-container assigned-to-container" onclick="setFocusOnInput('input-assigned-to')">
                      <input id="input-assigned-to" type="text" placeholder="Select contacts to assign" onkeyup="searchContactsEditTask()" onfocus="openContactList(${taskID})">
                      <button class="icon-button" onclick="toggleContactList(${taskID}),stopPropagation(event)" type="button">
                        <img id="contactsArrow" src="./assets/img/arrow_drop_down.svg" alt="" >
                      </button>
                    </div>
                    <div id="assigned-contacts-list" class="contact-list-container d-none">
                        <div id="assigned-to-contacts" class="contact-list">
                        </div>
                        <button class="btn-filled btn-add-new-contact" onclick="openAddCon()" type="button">
                          <div>Add new contact</div>
                          <img src="./assets/img/person_add.svg" alt="add_contact">
                        </button>
                    </div>
                    <div id="assigned-contact-badges-container" class="contact-icons-container">
                    </div>
                </div>
                <!-- Subtasks -->
                <div class="popup-task-edit-info-container">
                    <div class="popup-task-edit-info-headline">Subtasks</div>
                    <div class="input-field-container"  onclick="setFocusOnInput('input-subtasks')">
                        <input id="input-subtasks" type="text" placeholder="Add new subtask" onkeydown="addNewSubtaskWithEnter(event)">
                        <button class="createNewSubtask-button icon-button" type="button">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1.5V16.5" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
                                <path d="M16.5 9.1416L1.5 9.1416" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
                            </svg> 
                        </button>
                        <div class="subtask-buttons-container add-new-task-buttons">
                            <button class="btn-drop-new-subtask icon-button" onclick="stopPropagation(event);addNewSubtask(event);" type="button">
                                <img src="./assets/img/close.svg" alt="delete-icon">    
                            </button>
                            <div class="v-line-separator"></div>
                            <button class="btn-add-new-subtask icon-button" onclick="stopPropagation(event);addNewSubtask(event);" type="button">
                                <img src="./assets/img/input_check.svg" alt="check-icon">
                            </button>
                        </div>
                    </div>
                    <div id="popup-task-edit-subtasks-container" class="subtasks-container">
                    </div>
                </div>
            </div>
            <!-- OK Button -->
            <div class="popup-task-edit-footer">
                <button class="ok-button" type="submit">
                    <div>Ok</div>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_81835_1115" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                            <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_81835_1115)">
                            <path d="M9.55021 15.65L18.0252 7.175C18.2252 6.975 18.4627 6.875 18.7377 6.875C19.0127 6.875 19.2502 6.975 19.4502 7.175C19.6502 7.375 19.7502 7.6125 19.7502 7.8875C19.7502 8.1625 19.6502 8.4 19.4502 8.6L10.2502 17.8C10.0502 18 9.81687 18.1 9.55021 18.1C9.28354 18.1 9.05021 18 8.85021 17.8L4.55021 13.5C4.35021 13.3 4.25437 13.0625 4.26271 12.7875C4.27104 12.5125 4.37521 12.275 4.57521 12.075C4.77521 11.875 5.01271 11.775 5.28771 11.775C5.56271 11.775 5.80021 11.875 6.00021 12.075L9.55021 15.65Z" fill="white"/>
                        </g>
                    </svg>    
                </button>
            </div>
        </form>
    </div>
  `;
}



function generateContactListItemHTML(contact,i) {
    return /*html*/`
    <li id="contact-${contact['id']}" class="assigned-to-contacts-list-item ${addCSSClass_assigned(contact['id'])}" onclick="toggleAssignment(${contact['id']},'contact-${i}-checkbox')">
      <div class="assigned-to-contact">
        <div class="profile-badge bc-${contact['badge-color']} width-40px border-2px">${contact['initials']}</div>
        <div class="contact-text">
            <div class="contact-name">${maskSpecialChars(contact['name'])}</div>
            <div class="contact-user-state">${checkContactUserState(contact['userid'])}</div>
        </div>
      </div>
      <img id="contact-${i}-checkbox" src="${loadCheckButtonImg(contact['id'])}" alt="">
    </li>
  `;
}


function generateSubtaskInEditPopupHTML(subtask,i) {
    return /*html*/`
    <div id="popup-task-edit-subtask-${i}" class="subtask-list-item">
        <ul style="margin-left: 16px;">
            <li>${maskSpecialChars(subtask['subtask'])}</li>
        </ul>
        <div class="subtask-buttons-container">
            <button class="btn-edit icon-button" onclick="editSubtask(${i})">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_81758_502" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_81758_502)">
                    <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" fill="#2A3647"/>
                    </g>
                </svg>    
            </button>
            <div class="v-line-separator"></div>
            <button class="btn-delete icon-button" onclick="deleteSubtask(${i})">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_81758_217" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_81758_217)">
                    <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM7 6V19H17V6H7ZM9 16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16ZM13 16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16Z" fill="#2A3647"/>
                    </g>
                </svg>
            </button>
        </div>
    </div>
  `;
}


function generateEditSubtaskHTML(subtask,subtaskIndex) {
    return /*html*/`
    <input id="subtask-edit-input" class="subtask-edit-input" type="text" value="${subtask['subtask']}" onkeydown="editSubtaskWithEnter(event,${subtaskIndex})">
    <div class="subtask-buttons-container">
      <button class="btn-delete" onclick="deleteSubtask(${subtaskIndex})" >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_81758_217" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_81758_217)">
              <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM7 6V19H17V6H7ZM9 16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16ZM13 16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16Z" fill="#2A3647"/>
              </g>
          </svg>
      </button>
      <div class="v-line-separator"></div>
      <button class="btn-accept width-24px" onclick="saveSubtask(${subtaskIndex})">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.55021 9.15L14.0252 0.675C14.2252 0.475 14.4627 0.375 14.7377 0.375C15.0127 0.375 15.2502 0.475 15.4502 0.675C15.6502 0.875 15.7502 1.1125 15.7502 1.3875C15.7502 1.6625 15.6502 1.9 15.4502 2.1L6.25021 11.3C6.05021 11.5 5.81687 11.6 5.55021 11.6C5.28354 11.6 5.05021 11.5 4.85021 11.3L0.550207 7C0.350207 6.8 0.254374 6.5625 0.262707 6.2875C0.27104 6.0125 0.375207 5.775 0.575207 5.575C0.775207 5.375 1.01271 5.275 1.28771 5.275C1.56271 5.275 1.80021 5.375 2.00021 5.575L5.55021 9.15Z" fill="#2A3647"/>
        </svg>
      </button>
    </div>
  `;
}
