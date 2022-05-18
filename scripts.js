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

const body = document.createElement("body");
const section = document.createElement("work-item");
body.appendChild(work - item);
section.innerHTML = `
<div class="modal-container">
<img class="work-img" src="./project.jpg" alt="project image" />
<div class="work-content">
  <h4 class="work-item-title">Multi-Post Stories</h4>
  <p class="project-section">
    A daily selection of privately personalized reads; no accounts
    or sign-ups required. has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a
    standard dummy text.
  </p>
  <ul class="skillset">
    <li>css</li>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>
  <div class="work-item-actions">
    <button class="button button-primary">
      See Live <span><i class="fas fa-location-arrow"></i></span>
    </button>
    <button class="button button-primary">
      See Source <span><i class="fab fa-github"></i></span>
    </button>
  </div>
</div>
</div>
`;

const open = document.queryselector(".See-project");
open.addEventListener("click", () => {
  const main = document.createElement("div");
  main.className = 'main';
  const popup = document.createElement("div");
  popup.className = 'popup';
  popup.innerHTML = `
      <div class="modal-container">
<img class="work-img" src="./project.jpg" alt="project image" />
<div class="work-content">
  <h4 class="work-item-title">Multi-Post Stories</h4>
  <p class="project-section">
    A daily selection of privately personalized reads; no accounts
    or sign-ups required. has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a
    standard dummy text.
  </p>
  <ul class="skillset">
    <li>css</li>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>
  <div class="work-item-actions">
    <button class="button button-primary">
      See Live <span><i class="fas fa-location-arrow"></i></span>
    </button>
    <button class="button button-primary">
      See Source <span><i class="fab fa-github"></i></span>
    </button>
  </div>
</div>
</div>
      `;


      main.appendChild(popup);
      body.appendChild(main);

      const close = document.querySelector('');
      close.addEventListener('click', ()=>{
        body.removeChild(main);
      })
})
