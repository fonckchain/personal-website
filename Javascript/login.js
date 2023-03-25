
const loginBtns = document.querySelectorAll('.login-btn');
const loginForm = document.querySelector('.login-page');

loginBtns.forEach(loginBtn => {
  loginBtn.addEventListener('click', function() {
    loginForm.style.display = 'block';
    loginForm.classList.add('popup');

    // Create the close button element
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';

    // Append the close button to the pop-up window
    loginForm.appendChild(closeButton);

    // Add a click event listener to the close button
    closeButton.addEventListener('click', function() {
      loginForm.style.display = 'none';
      loginForm.classList.remove('popup');
    });
  });
});