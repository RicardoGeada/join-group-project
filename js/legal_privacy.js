/**
 * Calls important functions after the page has fully loaded.
 */
document.addEventListener("DOMContentLoaded", async function () {
    await includeHTML();
    await selectMenu();
    await initLegalPrivacy();
});


/**
 * Enables or disables HTML elements depending on user type.
 */
async function initLegalPrivacy() {
    if(isNotAUser == true) {
        document.getElementById('nav-menu').classList.add('d-none');
        document.getElementById('return-button').classList.add('d-none')
        document.getElementById('user-icon').classList.add('d-none')
        document.getElementById('useroptions').classList.add('d-none')
    }
}
