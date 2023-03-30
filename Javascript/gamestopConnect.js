const gamestopWalletBtns = document.getElementsByClassName("connect-gamestop");

for (const gamestopWalletBtn of gamestopWalletBtns) {
  gamestopWalletBtn.addEventListener("click", async () => {
    try {
      const provider = await detectGamestopProvider.default();

      if (!provider) {
        alert(
          "Gamestop Wallet not detected. Please install the browser extension to continue."
        );
        return;
      }

      // Request user's account address
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length === 0) {
        alert(
          "No account found. Please connect your wallet and try again."
        );
      } else {
        const account = accounts[0];
        console.log("Connected account:", account);
      }
    } catch (error) {
      console.error("Error connecting to Gamestop Wallet:", error);
    }
  });
}
