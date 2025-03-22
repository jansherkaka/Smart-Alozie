

function openModal() {
  document.getElementById("modal").style.display = "flex";

  // Close mobile menu if it's open
  const mobileMenu = document.getElementById("mobileMenu");
  gsap.to(mobileMenu, {
    left: "-100%",
    duration: 0.6,
    ease: "power3.in",
  });
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.addEventListener("click", function (event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
});

// YouTube Player API
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtubeFrame");
}

function playVideo() {
  document.getElementById("thumbnail").style.display = "none";
  document.getElementById("youtubeFrame").style.display = "block";

  if (player) {
    player.playVideo();
  }

  document.getElementById("playButton").style.display = "none";
  document.getElementById("pauseButton").style.display = "inline-block";
}

function pauseVideo() {
  if (player) {
    player.pauseVideo();
  }

  document.getElementById("playButton").style.display = "inline-block";
  document.getElementById("pauseButton").style.display = "none";
}

// Load YouTube API
(function loadYouTubeAPI() {
  let tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();

// GSAP Menu Animation
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const modalButton = document.getElementById("modalButton"); // Button to open modal

  function openMenu() {
    gsap.to(mobileMenu, {
      left: "0%",
      duration: 0.6,
      ease: "power3.out",
    });
  }

  function closeMenuFunc() {
    gsap.to(mobileMenu, {
      left: "-100%",
      duration: 0.6,
      ease: "power3.in",
    });
  }

  hamburger?.addEventListener("click", openMenu);
  closeMenu?.addEventListener("click", closeMenuFunc);

  // Ensure the menu closes when opening the modal
  modalButton?.addEventListener("click", openModal);
});



