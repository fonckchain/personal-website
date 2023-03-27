// Get references to the DOM elements
const loginBtns = document.querySelectorAll('.login-btn');
const loginForm = document.querySelector('.login-page');
const registerBtn = document.querySelector('.register-button');
const forgotPasswordBtn = document.querySelector('.forgot-password-button');
const loginUsernameInput = document.querySelector('input[name="username"]');
const loginPasswordInput = document.querySelector('input[name="password"]');
const rememberMeCheckbox = document.querySelector('input[name="remember-me"]');
const forgotPasswordForm = document.querySelector('.forgot-password-page');
const registrationForm = document.querySelector('.registration-page');

// Check if the user has already logged in
const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
  loginUsernameInput.value = loggedInUser;
  rememberMeCheckbox.checked = true;
}

// Attach event listeners to the login buttons
loginBtns.forEach(loginBtn => {
  loginBtn.addEventListener('click', function() {
    // Display the login form
    loginForm.style.display = 'block';
    loginForm.classList.add('popup');

    // Append the close button to the pop-up window
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    loginForm.appendChild(closeButton);

    // Add a click event listener to the close button
    closeButton.addEventListener('click', function() {
      loginForm.style.display = 'none';
      loginForm.classList.remove('popup');
    });
  });
});

// Attach event listeners to the register and forgot password buttons
registerBtn.addEventListener('click', function() {
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

forgotPasswordBtn.addEventListener('click', function() {
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

// Handle successful logins
function handleLoginSuccess(username, event) {
  if (rememberMeCheckbox.checked) {
    localStorage.setItem('loggedInUser', username);
  } else {
    localStorage.removeItem('loggedInUser');
    loginUsernameInput.value = '';
  }

  if (event.target.classList.contains('login-btn')) {
    window.location.href = '../html/home.html';
  }
}

// Handle failed logins
function handleLoginFailure(event) {
  alert('Invalid username or password.');
  event.preventDefault();
}

// Attach submit event listener to login form
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = loginUsernameInput.value;
  const password = loginPasswordInput.value;

  // Check credentials against a database or API
  if (username === 'testuser' && password === 'testpassword') {
    handleLoginSuccess(username, event);
  } else {
    if (event.submitter.classList.contains('login-btn')) { // Check if the submit button is the login button
      handleLoginFailure();
    }
  }
});