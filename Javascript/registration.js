const registerBtn = document.querySelector('.register-button');
const registrationForm = document.querySelector('.registration-page');

// Attach event listeners to the register button
registerBtn.addEventListener('click', function() {
  const loginForm = document.querySelector('.login-page');
  loginForm.style.display = 'none';
  registrationForm.style.display = 'block';
  registrationForm.classList.add('popup');

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';
  registrationForm.appendChild(closeButton);

  closeButton.addEventListener('click', function() {
    registrationForm.classList.remove('popup');
    registrationForm.style.display = 'none';
  });
});
