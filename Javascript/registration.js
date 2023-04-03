// registration.js
import { addReturnButton } from './returnButton.js';

const signUpBtn = document.querySelector('.sign-up-btn');
const registrationForm = document.querySelector('.registration-popup');

// Attach event listeners to the register button
signUpBtn.addEventListener('click', function () {
  const loginForm = document.querySelector('.login-popup');
  loginForm.style.display = 'none';
  registrationForm.style.display = 'block';
  registrationForm.classList.add('popup');

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';
  registrationForm.appendChild(closeButton);

  closeButton.addEventListener('click', function () {
    registrationForm.classList.remove('popup');
    registrationForm.style.display = 'none';
  });

  // Add the return button
  addReturnButton(registrationForm, loginForm);
});
