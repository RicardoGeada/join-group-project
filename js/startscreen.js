/**
 * Adds an event listener to the DOMContentLoaded event and triggers the
 * @param {Event} event - The DOMContentLoaded event.
 * @returns {void}
 */
window.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    moveLogoAndShowLogin();
  }, 600);
});

/**
 * Moves the logo and displays the login container.
 * @returns {void}
 */
function moveLogoAndShowLogin() {
  const overlay = document.getElementById("colorOverlay");
  const logoContainer = document.querySelector(".logo-container");
  const logo = document.getElementById("logo");
  const loginContainer = document.getElementById("loginContainer");

  // Move the logo
  logoContainer.style.top = "10px";
  logoContainer.style.left = "10px";
  logoContainer.style.transform = "none";

  // Change the logo and remove the overlay for mobile touch functionality
  setTimeout(() => {
    logo.src = "assets/img/mobile-start-animation-black.svg";
    overlay.remove();

    // Display the login container
    loginContainer.style.display = "flex";

    // Set margins for the logoContainer after the image has moved
    logoContainer.style.marginTop = "40px";
    logoContainer.style.marginLeft = "40px";
  }, 200); 
}

