document.getElementsByClassName('manage-hotel-search-button')[0].onclick = function() {
  let form = document.getElementsByClassName('form-hotel-search-container')[0];
  if (form.classList.contains('form-animation-show') == false && form.classList.contains('form-animation-hide') == false) {
    form.classList.add('form-animation-hide');
  } else {
    form.classList.toggle('form-animation-show');
    form.classList.toggle('form-animation-hide');
  }
  document.getElementsByClassName('form-hotel-search')[0].classList.toggle('form-hotel-search-hide');
};
