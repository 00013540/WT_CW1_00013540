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

const showPopup = () => {
  popup.classList.add("show");
};

const hidePopup = () => {
  popup.classList.remove("show");
};

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

popupContent.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});
popupClose.addEventListener("click", hidePopup);
popupOkay.addEventListener("click", hidePopup);
popupOverlay.addEventListener("click", hidePopup);

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
