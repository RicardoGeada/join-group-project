let mainMenuLoaded = false;

document.addEventListener('DOMContentLoaded', async function () {
    await init();
});


/**
 * Function is called after the page has fully loaded and calls important functions for the page.
 */
async function init() {
    await includeHTML();
    await selectMenu();
}


/**
 * Function for reloading templates.
 */
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let response = await fetch(file);
        if (response.ok) {
            element.innerHTML = await response.text();
        } else {
            element.innerHTML = 'Page not found';
        }
        element.removeAttribute("w3-include-html");
    }
}


/**
 * Prevents the event from spreading beyond the object. 
 * 
 * @param {object} event - An object that provides information about the circumstances that triggered the event.
 */
function stopPropagation(event) {
    event.stopPropagation();
}


/**
 * Checks the file name for the highlight in the menu.
 */
async function selectMenu() {
    let filename = document.location.pathname;
    let objs = document.getElementsByClassName('nav-menu-link');
    let id = await filenameToId(filename);
    if(id > -1) {
        objs[id].classList.add('link-selected');
    }
    mainMenuLoaded = true;
}


/**
 * Checks filenames and returns ID for menu item.
 * 
 * @param {string} filename - The file name to check.
 * @returns - Number for the menu item.
 */
async function filenameToId(filename) {
    if(filename.includes("summary.html")) {
        return 0;
    } else if(filename.includes("board.html")) {
        return 1;
    } else if(filename.includes("add_task.html")) {
        return 2;
    } else if(filename.includes("contacts.html")) {
        return 3;
    }
    return -1;
}


/**
 * Function for escaping characters in HTML text.
 * 
 * @param {string} string - Text in which the special characters are to be replaced.
 * @returns - The finished text.
 */
function maskSpecialChars(string) {
    const specialChars = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      };
    return string.replace(/[&<>"']/g, char => specialChars[char]);
}