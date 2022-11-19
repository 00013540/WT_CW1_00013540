const form = document.getElementById("form");
const nameEl = document.getElementById("name");
const phoneEl = document.getElementById("phone");
const emailEl = document.getElementById("email");
const messageEl = document.getElementById("message");
const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const popup = document.getElementById("popup");
const popupOverlay = document.getElementById("popup-overlay");
const popupClose = document.getElementById("popup-close");
const popupOkay = document.getElementById("popup-ok");
const popupContent = document.getElementById("popup-content");
const bnText = document.getElementById("btn-text");
const btnSpinner = document.getElementById("btn-spinner");

// This function is used to validate the inputs of the form. Furthermore, it returns true or false depending on the state of the inputs.
const validateForm = () => {
  if (!nameEl.value.trim().length) {
    nameError.classList.add("show");
  } else {
    nameError.classList.remove("show");
  }
  if (!phoneEl.value.trim().length) {
    phoneError.classList.add("show");
  } else {
    phoneError.classList.remove("show");
  }
  if (!emailEl.value.trim().length) {
    emailError.classList.add("show");
  } else {
    emailError.classList.remove("show");
  }
  if (!messageEl.value.trim().length) {
    messageError.classList.add("show");
  } else {
    messageError.classList.remove("show");
  }
  return [
    !!nameEl.value.trim().length,
    !!phoneEl.value.trim().length,
    !!emailEl.value.trim().length,
    !!messageEl.value.trim().length,
  ].every((item) => item);
};

// This function is used to show popup.
const showPopup = () => {
  popup.classList.add("show");
};

// This function is used to hide popup.
const hidePopup = () => {
  popup.classList.remove("show");
};

// This function is used to reset the form inputs' values.
const resetForm = () => {
  nameEl.value = "";
  phoneEl.value = "";
  emailEl.value = "";
  messageEl.value = "";
  nameError.classList.remove("show");
  phoneError.classList.remove("show");
  emailError.classList.remove("show");
  messageError.classList.remove("show");
};

// Event listener was used to listen to click event.
popupContent.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});
popupClose.addEventListener("click", hidePopup);
popupOkay.addEventListener("click", hidePopup);
popupOverlay.addEventListener("click", hidePopup);

// Event listener was used to listen to submit event of the form.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = validateForm();
  if (isValid) {
    bnText.style.display = "none";
    btnSpinner.style.display = "block";
    setTimeout(() => {
      resetForm();
      showPopup();
      bnText.style.display = "block";
      btnSpinner.style.display = "none";
    }, 400);
  }
});
