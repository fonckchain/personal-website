// Get references to the DOM elements
const loginBtns = document.querySelectorAll('.login-btn');
const loginButton = document.querySelectorAll('.login-button');
const loginForm = document.querySelector('.login-page');
const loginUsernameInput = document.querySelector('input[name="username"]');
const loginPasswordInput = document.querySelector('input[name="password"]');
const rememberMeCheckbox = document.querySelector('input[name="remember-me"]');

// Check if the user has already logged in
const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
  loginUsernameInput.value = loggedInUser;
  rememberMeCheckbox.checked = true;
}

// Attach event listeners to the login buttons
loginBtns.forEach(loginBtns => {
  loginBtns.addEventListener('click', function() {
    // Display the login form
    loginForm.style.display = 'block';
    loginForm.classList.add('popup');
  });
});

loginButton.forEach(loginButton => {
  loginButton.addEventListener('click', function() {
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

// Handle successful logins
function handleLoginSuccess(username, event) {
  if (rememberMeCheckbox.checked) {
    localStorage.setItem('loggedInUser', username);
  } else {
    localStorage.removeItem('loggedInUser');
    loginUsernameInput.value = '';
  }

  if (event.target.classList.contains('login-button')) {
    window.location.href = '../html/home.html';
  }
}

// Handle failed logins
function handleLoginFailure(event) {
  alert('Invalid username or password.');
  if (event) {
    event.preventDefault();
  }
}

// Attach submit event listener to login form
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = loginUsernameInput.value;
  const password = loginPasswordInput.value;

  // Check which button submitted the form
  const submitter = document.activeElement;
  const isLoginButton = submitter && submitter.hasAttribute('data-login');

  // Check credentials against a database or API
  if (username === 'testuser' && password === 'testpassword') {
    handleLoginSuccess(username, event);
  } else {
    if (isLoginButton) {
      handleLoginFailure(event);
    }
  }
});
