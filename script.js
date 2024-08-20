// Mobile navigation

function initializeMenu() {
  const menuOverlay = document.getElementById("nav_overlay");
  const menuEl = document.getElementById("menu");
  const mainLogoMobile = document.querySelector(".main_logo_overlay");
  const itemsOverlay = document.querySelectorAll(".items_overlay");
  const dropdown = document.getElementById("dropdown");

  // Create a timeline
  let tl = gsap.timeline({
    defaults: { ease: "power5.in" }, // Adjusted "In" to "in" for proper case
    paused: true,
  });

  tl.to(menuOverlay, { y: 0 })
    .to(menuEl, { color: "white" }, "-=0.5")
    .to(mainLogoMobile, { fill: "white" }, "-=0.5")
    .to(itemsOverlay, { opacity: 1, stagger: 0.1 }, "-=0.5");

  function openMenu() {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  }
  menuEl.addEventListener("click", () => {
    openMenu();
  });
}

// Initialize the menu
initializeMenu();

// Video Section
const video = document.getElementById("video");
const videoOverlay = document.querySelector(".video_overlay");
videoOverlay.addEventListener("click", () => {
  videoOverlay.style.display = "none";
  video.style.zIndex = "99999";
  video.play();
});

// More Menu
const moreMenu = document.querySelector(".more_overlay_menu");
const openMM = document.querySelector(".icon_list");
const plus = document.getElementById("plus");

function openMoreMenu() {
  moreMenu.classList.toggle("close");
  if (moreMenu.classList.contains("close")) {
    plus.src = "./src/images/minus.svg";
  } else {
    plus.src = "./src/images/plus.svg";
  }
}

// Additional infos from  the developer
document.addEventListener("DOMContentLoaded", authorRight);

function authorRight() {
  const popupInfo = document.querySelector(".popup_info");
  const exitGreting = document.getElementById("exit");

  popupInfo.style.opacity = "1";

  exitGreting.addEventListener("click", () => {
    popupInfo.style.display = "none";
  });
}
