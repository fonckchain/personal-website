async function connectToGamestopWallet(provider) {
    try {
      // Request user's Ethereum address
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const userAddress = accounts[0];
      console.log('Connected to GME Wallet with address:', userAddress);
  
      // Add your logic to interact with the wallet and the user's address here
    } catch (error) {
      console.error('Error connecting to GME Wallet:', error);
    }
  }
  
  async function initializeGamestopWallet() {
    const gamestopProvider = await detectGamestopProvider();
  
    if (!gamestopProvider) {
      console.error("Gamestop wallet not found. Please install the wallet or use a supported browser.");
      return;
    }
  
    // Attach event listener to the "Connect to GME Wallet" button
    const connectGMEWalletButton = document.getElementById('connect-gme-wallet');
    connectGMEWalletButton.addEventListener('click', () => connectToGamestopWallet(gamestopProvider));
  }
  
  initializeGamestopWallet();
  