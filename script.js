// Open modal
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

// Close modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside of it
window.addEventListener("click", function (event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
});

let player;
let isVideoStarted = false; // Prevent multiple triggers
let isPlaying = false; // Track video state

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtubeFrame", {
    events: {
      onReady: function (event) {
        player = event.target;
      }
    }
  });
}

function toggleVideo() {
  if (!isVideoStarted) {
    isVideoStarted = true;
    document.getElementById("thumbnail").style.display = "none";
    document.getElementById("youtubeFrame").style.display = "block";
    document.querySelector(".youtubeplaybtn").style.display = "none";
  }

  if (isPlaying) {
    player.pauseVideo();
    document.getElementById("playButton").style.display = "inline-block";
    document.getElementById("pauseButton").style.display = "none";
  } else {
    player.playVideo();
    document.getElementById("playButton").style.display = "none";
    document.getElementById("pauseButton").style.display = "inline-block";
  }

  isPlaying = !isPlaying; // Toggle play/pause state
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".video-controls").addEventListener("click", toggleVideo);
  document.getElementById("thumbnail").addEventListener("click", toggleVideo);
  document.querySelector(".youtubeplaybtn").addEventListener("click", toggleVideo);
});

// Load YouTube API
(function loadYouTubeAPI() {
  let tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();



// GSAP Mobile Menu Animation
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const modalButton = document.getElementById("modalButton"); 

  function openMenu() {
    gsap.to(mobileMenu, {
      left: "0%",
      duration: 0.5,
      ease: "power3.out",
      opacity: 1,
    });
  }

  function closeMenuFunc() {
    gsap.to(mobileMenu, {
      left: "-100%",
      duration: 0.5,
      opacity: 0,
      ease: "power3.in",
    });
  }

  hamburger?.addEventListener("click", openMenu);
  closeMenu?.addEventListener("click", closeMenuFunc);

  // Ensure the menu closes when opening the modal
  modalButton?.addEventListener("click", openModal);

  // Smooth scrolling + Auto-close menu when clicking mobile links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        closeMenuFunc(); // Close menu first
        setTimeout(() => {
          window.scrollTo({
            top: target.offsetTop - 50, // Adjust for any fixed headers
            behavior: "smooth",
          });
        }, 500); // Wait 0.5s for the menu to close
      }
    });
  });
});
