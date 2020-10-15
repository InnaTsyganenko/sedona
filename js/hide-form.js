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

inputArrivalDate.focus();

formManageButton.addEventListener("click", function () {
  if (formContainer.classList.contains("form-animation-show") == false && formContainer.classList.contains("form-animation-hide") == false) {
    formContainer.classList.add("form-animation-hide");
  } else {
    formContainer.classList.toggle("form-animation-show");
  inputArrivalDate.focus();
    formContainer.classList.toggle("form-animation-hide");
  }
  form.classList.toggle("form-hotel-search-hide");
});

form.addEventListener("submit", function (evt) {
  if (!inputDate[0].value || !inputDate[1].value || !inputNumber[0].value || !inputNumber[1].value || inputNumber[0].value == 0) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("countAdults", inputNumber[0].value);
      localStorage.setItem("countChildren", inputNumber[1].value);
    }
  }
});
