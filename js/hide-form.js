const form = document.querySelector(".form-hotel-search");
const inputArrivalDate = document.querySelector(".input-arrival-date");
const formContainer = document.querySelector(".form-hotel-search-container");
const formManageButton = document.querySelector(".manage-hotel-search-button");
const formSubmitButton = document.querySelector(".hotel-search-button");
const inputDate = document.querySelectorAll(".date-input");
const inputNumber = document.querySelectorAll(".number-input");

let isStorageSupport = true;
let countAdultsStorage = "";
let countChildrenStorage = "";

formContainer.classList.add("form-animation-hide");
form.classList.toggle("form-hotel-search-hide");

try {
  countAdultsStorage = localStorage.getItem("countAdults");
  countChildrenStorage = localStorage.getItem("countChildren");
} catch (err) {
  isStorageSupport = false;
}

if (countAdultsStorage || countChildrenStorage) {
    inputNumber[0].value = countAdultsStorage;
    inputNumber[1].value = countChildrenStorage;
}

formManageButton.addEventListener("click", function () {
  if (formContainer.classList.contains("form-animation-hide") == true) {
    form.classList.toggle("form-hotel-search-hide");
    formContainer.classList.remove("form-animation-hide");
    inputArrivalDate.focus();
    formContainer.classList.add("form-animation-show");
  } else {
    formContainer.classList.remove("form-animation-show");
    formContainer.classList.add("form-animation-hide");
    form.classList.toggle("form-hotel-search-hide");
  }
});

form.addEventListener("submit", function (evt) {
  if (!inputDate[0].value || !inputDate[1].value || !inputNumber[0].value || !inputNumber[1].value || inputNumber[0].value == 0) {
    evt.preventDefault();
    formContainer.classList.remove("form-animation-show");
    formContainer.classList.remove("form-hotel-search-error");
    formContainer.offsetWidth = formContainer.offsetWidth;
    formContainer.classList.add("form-hotel-search-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("countAdults", inputNumber[0].value);
      localStorage.setItem("countChildren", inputNumber[1].value);
    }
  }
});
