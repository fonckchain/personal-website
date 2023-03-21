
  toggleBtn = document.querySelector(".toggle_btn");
  toggleBtnIcon = document.querySelector(".toggle_btn i");
  dropDownMenu = document.querySelector(".dropdown_menu");
  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");
    toggleBtnIcon.classList = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  };


  var typed = new Typed('.auto-type', {
    strings: ['"This is the real secret of life; to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play." - Alan Watts',
     '"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration." - Nikola Tesla',
      '"Knowing is not enough; we must apply. Willing is not enough; we must do." - Bruce Lee',
      '"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning." - Albert Einstein',
      '"I find that the harder I work, the more luck I seem to have." - Thomas Jefferson',
      '"The best way to predict the future is to invent it." - Alan Kay'],
    typeSpeed: 80,
    backSpeed: 5,
    shuffle: true,
    backDelay: 3000,
    loop: true
  });

