// connnectWallet.js
import { addReturnButton } from './returnButton.js';

const connectWalletBtn = document.querySelector('.connect-wallet-button');
const connectWalletForm = document.querySelector('.connect-wallet-popup');

// Attach event listeners to the sign in with wallet button
connectWalletBtn.addEventListener('click', function () {
  const loginForm = document.querySelector('.login-popup');
  loginForm.style.display = 'none';
  connectWalletForm.style.display = 'block';
  connectWalletForm.classList.add('popup');

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';
  connectWalletForm.appendChild(closeButton);

  closeButton.addEventListener('click', function () {
    connectWalletForm.classList.remove('popup');
    connectWalletForm.style.display = 'none';
  });

  // Add the return button
  addReturnButton(connectWalletForm, loginForm);
});
