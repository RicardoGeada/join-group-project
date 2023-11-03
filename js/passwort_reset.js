function backToLogin() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  changePassword();
});

async function changePassword(email, newPassword) {
  users = JSON.parse(await getItem("users"));
  let user = users.find((u) => u.email === email);

  if (user) {
    user.password = newPassword;
    await setItem("users", users);

    const successPopup = document.getElementById("successPopup");
    successPopup.style.display = "block";

    setTimeout(() => {
      successPopup.style.display = "none";
      window.location.href = "Index.html";
    }, 3000);
  }
}

async function updatePassword() {
  const emailInput = document.getElementById("passwordReset");
  const errorRed = document.getElementById("error-border");
  const errorRed2 = document.getElementById("error-border2");
  const newPasswordInput = document.getElementById("newPassword");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const passwordPopup = document.getElementById("passwordPopup");

  const email = emailInput.value;
  const newPassword = newPasswordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  errorRed.classList.remove("input-error");
  errorRed2.classList.remove("input-error");

  let Error = false;
  if (!newPassword) {
    errorRed.classList.add("input-error");
    Error = true;
  }
  if (!confirmPassword) {
    errorRed2.classList.add("input-error");
    Error = true;
  }
  if (Error) return;

  if (newPassword === confirmPassword) {
    await changePassword(email, newPassword);
    passwordPopup.style.display = "none";

    const successPopup = document.getElementById("successPopup");
    successPopup.style.display = "block";

    setTimeout(() => {
      successPopup.style.display = "none";
      window.location.href = "Index.html";
    }, 2000);
  }
}

async function checkIfEmailFieldIsEmpty() {
  const emailInput = document.getElementById("passwordReset");
  const emailErrorRed = document.querySelector(".input-border");
  const email = emailInput.value;

  emailErrorRed.classList.remove("input-error");

  if (!email) {
    emailErrorRed.classList.add("input-error");
    return true;
  }
  return false;
}

async function validateEmailAndShowPopup() {
  const emailInput = document.getElementById("passwordReset");
  const email = emailInput.value;
  users = JSON.parse(await getItem("users"));

  let user = users.find((u) => u.email === email);
  if (user) {
    document.getElementById("passwordPopup").style.display = "flex";
  } else {
    showEmailNotFoundPopup();
  }
}

async function checkUserEmailAndShowPopup() {
  const isEmailFieldEmpty = await checkIfEmailFieldIsEmpty();
  if (!isEmailFieldEmpty) {
    await validateEmailAndShowPopup();
  }
}

function showEmailNotFoundPopup() {
  document.getElementById("emailNotFoundPopup").style.display = "flex";
}

function closeEmailNotFoundPopup() {
  document.getElementById("emailNotFoundPopup").style.display = "none";
}

function togglePasswordVisibility(fieldId, imgId) {
  const passwordField = document.getElementById(fieldId);
  const imageElement = document.getElementById(imgId);

  if (passwordField.type === "password") {
    passwordField.type = "text";
    imageElement.src = "./assets/img/visibility.svg";
  } else {
    passwordField.type = "password";
    imageElement.src = "./assets/img/lock.svg";
  }
}

function setVisibilityOff(fieldId, imgId) {
  const passwordField = document.getElementById(fieldId);
  passwordField.type = "password";
  const imageElement = document.getElementById(imgId);
  imageElement.src = "./assets/img/visibility_off.svg";
}

function showPasswordRequirements() {
  let newPasswordInput = document.getElementById("newPassword");
  let rect = newPasswordInput.getBoundingClientRect();

  let infoBox = document.getElementById("passwordInfoReset");
  infoBox.style.left = rect.left + -20 + "px";
  infoBox.style.top = rect.bottom + 20 + "px";

  infoBox.style.display = "block";

  setTimeout(function () {
    infoBox.style.display = "none";
  }, 2000);
}
