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