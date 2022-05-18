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

closeModal.addEventListener("click", hideModal);
function hideModal (){
  document.getElementById('id1').style.display='none';
}

/**
 Validate form
 */

 function isUppercase (text){
   return !/[a-z]/.test(text) && /[A-Z]/.test(text);
 }
 
function validateEmail(email){
  var re = /^[a-z_A-Z\-0-9\.\*\#\$\!\~\%\^\&\-\+\?\|]+@+[a-zA-Z\-0-9]+(.com)$/;  
  return re.test(email);
}

function handleSubmitContactForm(event){
  var email = document.getElementById("email").value;
  const error = document.querySelector(".error");
  if(isUppercase(email)){
    error.classList.add("show");
    event.preventDefault();
  } else{
    error.classList.remove("show");
  }
}

var form = document.getElementById("contact-form");
form.addEventListener("submit", handleSubmitContactForm);