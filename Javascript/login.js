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
  // Auto-fill the username input with the saved username
  loginUsernameInput.value = loggedInUser;

  // Check the "Remember me" checkbox
  rememberMeCheckbox.checked = true;
}

// Define a function to handle successful logins
function handleLoginSuccess(username, event) {
  // Save the username to local storage if the "Remember me" checkbox is checked
  if (rememberMeCheckbox.checked) {
    localStorage.setItem('loggedInUser', username);
  } else {
    localStorage.removeItem('loggedInUser');
    loginUsernameInput.value = ''; // Clear the username input if "Remember me" is unchecked
  }

  // Redirect the user to the home page or dashboard if the login button was clicked
  if (event.target.classList.contains('login-btn')) {
    window.location.href = '../html/home.html';
  }
}

// Define a function to handle failed logins
function handleLoginFailure() {
  alert('Invalid username or password.');
}

// =============================================================================
// CLOSE BUTTON
// =============================================================================

// Create the close button element
const closeButton = document.createElement('button');
closeButton.classList.add('close-button');
closeButton.innerHTML = '&times;';

// Attach click event listeners to the login buttons
loginBtns.forEach(loginBtn => {
  loginBtn.addEventListener('click', function() {
    // Display the login form
    loginForm.style.display = 'block';
    loginForm.classList.add('popup');

    // Append the close button to the pop-up window
    loginForm.appendChild(closeButton);

    // Add a click event listener to the close button
    closeButton.addEventListener('click', function() {
      loginForm.style.display = 'none';
      loginForm.classList.remove('popup');
    });
  });
});

// Attach click event listeners to the register and forgot password buttons
registerBtn.addEventListener('click', function() {
  // Display the registration form
  loginForm.style.display = 'none';
  registrationForm.style.display = 'block';
  registrationForm.classList.add('popup');

  // Append the close button to the pop-up window
  registrationForm.appendChild(closeButton);

  // Add a click event listener to the close button
  closeButton.addEventListener('click', function() {
    registrationForm.classList.remove('popup');
    registrationForm.style.display = 'none';
  });
});

forgotPasswordBtn.addEventListener('click', function() {
  // Display the forgot password form
  loginForm.style.display = 'none';
  forgotPasswordForm.style.display = 'block';
  forgotPasswordForm.classList.add('popup');

  // Append the close button to the pop-up window
  forgotPasswordForm.appendChild(closeButton);

  // Add a click event listener to the close button
  closeButton.addEventListener('click', function() {
    forgotPasswordForm.style.display = 'none';
    forgotPasswordForm.classList.remove('popup');
  });
});





// Attach a submit event listener to the login form
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the username and password inputs
  const username = loginUsernameInput.value;
  const password = loginPasswordInput.value;

  // TODO: Add code to check the credentials against a database or API

  // For now, just simulate a successful login if the username and password match
  if (username === 'testuser' && password === 'testpassword') {
    handleLoginSuccess(username, event);
  } else {
    handleLoginFailure(event);
  }
});