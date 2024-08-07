const container  = document.querySelector('.container');
const button = document.querySelector('.btn');
const popup = document.querySelector('.popup-container');
const closeIcon = document.querySelector('.close-icon');

 button.addEventListener('click', () => { 
    container.classList.add("active");
    popup.classList.remove("active")
 });
  closeIcon.addEventListener('click', () => {
    container.classList.remove("active");
    popup.classList.add("active")
  })