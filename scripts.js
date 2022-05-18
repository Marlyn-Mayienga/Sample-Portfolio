const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger-btn");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
menu.addEventListener("click", toggleMenu);
hamburger.addEventListener("click", toggleMenu);

/**
 Modal
 */


 const openModal = document.querySelectorAll(".open-modal");
 const closeModal = document.querySelector(".btn-close");

 function toggleModal () {
  if (openModal){
    document.getElementById('id1').style.display='block';
  } else{
    document.getElementById('id1').style.display='none';
  }
  
 }

 openModal.forEach( 
  function(button) { 
    button.addEventListener("click", toggleModal);
  }
)


