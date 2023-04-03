async function connectWithMetaMask() {
    const errorMessageElement = document.getElementById("error-message");
    const errorModal = document.getElementById("error-modal");
    const closeModal = document.getElementById("close-modal");
  
    closeModal.onclick = function () {
      errorModal.style.display = "none";
    };
  
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        errorMessageElement.innerText = ""; // Clear the error message
        errorModal.style.display = "none";
      } catch (error) {
        errorMessageElement.innerText = "User denied account access";
        errorModal.style.display = "block";
      }
    } else {
      errorMessageElement.innerText =
        "MetaMask not detected. Please install the MetaMask extension or use a compatible browser.";
      errorModal.style.display = "block";
    }
  }
  