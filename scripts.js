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

function toggleModal() {
  if (openModal) {
    document.getElementById("id1").style.display = "block";
  } else {
    document.getElementById("id1").style.display = "none";
  }
}

openModal.forEach(function (button) {
  button.addEventListener("click", toggleModal);
});

closeModal.addEventListener("click", hideModal);
function hideModal() {
  document.getElementById("id1").style.display = "none";
}

/**
 Validate form
 */

/**
 Variables to store form elements
 */
const submitButton = document.getElementById("send-button");
submitButton.addEventListener("click", formSubmit);

function formSubmit(event) {
  const userName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("msg").value;
  event.preventDefault();
  if (email !== email.toLowerCase()) {
    document.getElementById("error").classList.add("show");
  } else {
    const userData = JSON.stringify({
      userName: userName,
      email: email,
      message: message,
    });
    window.localStorage.setItem("userData", userData);
    document.getElementById("contact-form").reset();
  }
}                                                                      
window.onload = function () {
  readLocalStorage();
};
/**Binding */

function readLocalStorage() {
  if (window.localStorage.getItem("userData")) {
    const userData = JSON.parse(window.localStorage.getItem("userData"));
    document.getElementById("fullname").value = userData.userName;
    document.getElementById("email").value = userData.email;
    document.getElementById("msg").value = userData.message;
  }
}
