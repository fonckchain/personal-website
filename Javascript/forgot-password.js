const forgotPasswordBtn = document.querySelector('.forgot-password-button');
const forgotPasswordForm = document.querySelector('.forgot-password-page');

// Attach event listeners to the forgot password button
forgotPasswordBtn.addEventListener('click', function() {
  const loginForm = document.querySelector('.login-page');
  loginForm.style.display = 'none';
  forgotPasswordForm.style.display = 'block';
  forgotPasswordForm.classList.add('popup');

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';
  forgotPasswordForm.appendChild(closeButton);

  closeButton.addEventListener('click', function() {
    forgotPasswordForm.style.display = 'none';
    forgotPasswordForm.classList.remove('popup');
  });
});
