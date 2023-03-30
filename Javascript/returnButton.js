export function addReturnButton(form, targetForm) {
    const returnButton = document.createElement('button');
    returnButton.classList.add('return-button');
    returnButton.textContent = '←';
    form.appendChild(returnButton);
  
    returnButton.addEventListener('click', function () {
      form.style.display = 'none';
      form.classList.remove('popup');
      targetForm.style.display = 'block';
      targetForm.classList.add('popup');
    });
  }