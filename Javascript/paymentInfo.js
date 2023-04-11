function animateHeight(element, from, to, duration) {
    const start = performance.now();
    function animate(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      element.style.height = from + (to - from) * progress + "px";
      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    }
    window.requestAnimationFrame(animate);
  }
  
  const items = document.querySelectorAll(".list-dropdown-item");
  
  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherPaymentInfo = otherItem.querySelector(".payment-info");
          if (otherPaymentInfo.style.display === "block") {
            animateHeight(otherPaymentInfo, otherPaymentInfo.scrollHeight, 0, 300);
            setTimeout(() => {
              otherPaymentInfo.style.display = "none";
            }, 300);
          }
        }
      });
  
      const paymentInfo = item.querySelector(".payment-info");
      if (paymentInfo.style.display !== "block") {
        paymentInfo.style.display = "block";
        paymentInfo.style.height = "0px";
        animateHeight(paymentInfo, 0, paymentInfo.scrollHeight, 300);
      }
    });
  });
  