const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
};

document.addEventListener('click', function (event) {
  const isClickInside = dropDownMenu.contains(event.target);
  const isToggleBtn = event.target === toggleBtn || toggleBtn.contains(event.target);

  if (!isClickInside && !isToggleBtn && dropDownMenu.classList.contains("open")) {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = "fa-solid fa-bars";
  }
});