const copyBtns = document.querySelectorAll(".copy-btn");
const infoPieces = document.querySelectorAll(".info");
const copyMessages = document.querySelectorAll(".copy-message");

function hideAllCopyMessages() {
  copyMessages.forEach((message) => {
    message.style.display = "none";
  });
}

copyBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const address = infoPieces[index];
    const range = document.createRange();
    range.selectNode(address);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      hideAllCopyMessages();
      copyMessages[index].style.display = "inline";
      setTimeout(() => {
        copyMessages[index].style.display = "none";
      }, 2000);
    } catch (err) {
      console.error("Unable to copy:", err);
    }
    window.getSelection().removeAllRanges();
  });
});
