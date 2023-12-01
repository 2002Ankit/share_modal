let modalComponent = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

function openModal(){
    console.log('Modal is open');
    modalComponent.classList.add("active");
    overlay.classList.add("overlayactive");
};

function closeModal(){
    modalComponent.classList.remove("active");
    overlay.classList.remove("overlayactive");
  };