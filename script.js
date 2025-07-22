// Global variables
let currentSlide = 0;
const totalSlides = 3;
let isVideoPlaying = false;

// DOM elements
const carouselTrack = document.getElementById("carouselTrack");
const requestModal = document.getElementById("requestModal");
const playBtn = document.getElementById("playBtn");

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize carousel
  updateCarousel();

  // Add smooth scrolling to navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Add header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.style.background = "rgba(76, 175, 80, 0.95)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.background = "#4caf50";
      header.style.backdropFilter = "none";
    }
  });
});

// Carousel functionality
function updateCarousel() {
  if (carouselTrack) {
    const translateX = -currentSlide * 33.333;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
  updateCarousel();
}

// Auto-play carousel
setInterval(nextSlide, 5000);

// Video functionality
function toggleVideo() {
  const videoContainer = document.querySelector(".video-placeholder");
  const playButton = document.getElementById("playBtn");

  if (!isVideoPlaying) {
    // Simulate video playing
    isVideoPlaying = true;
    playButton.style.display = "none";
    videoContainer.style.background =
      "linear-gradient(45deg, #1a4a1f, #2e7d32)";

    // Create playing indicator
    const playingIndicator = document.createElement("div");
    playingIndicator.innerHTML = "▶ Playing...";
    playingIndicator.style.position = "absolute";
    playingIndicator.style.top = "20px";
    playingIndicator.style.left = "20px";
    playingIndicator.style.color = "white";
    playingIndicator.style.fontSize = "1rem";
    playingIndicator.style.fontWeight = "bold";
    playingIndicator.id = "playingIndicator";
    videoContainer.appendChild(playingIndicator);

    // Auto pause after 3 seconds for demo
    setTimeout(() => {
      pauseVideo();
    }, 3000);
  } else {
    pauseVideo();
  }
}

function pauseVideo() {
  const videoContainer = document.querySelector(".video-placeholder");
  const playButton = document.getElementById("playBtn");
  const playingIndicator = document.getElementById("playingIndicator");

  isVideoPlaying = false;
  playButton.style.display = "block";
  videoContainer.style.background = "linear-gradient(45deg, #2c5530, #4caf50)";

  if (playingIndicator) {
    playingIndicator.remove();
  }
}

// Modal functionality
function openRequestModal() {
  requestModal.classList.add("active");
  document.body.classList.add("body-no-scroll");
}

function closeRequestModal() {
  requestModal.classList.remove("active");
  document.body.classList.remove("body-no-scroll");
}

// Form submissions
function handleRequestSubmit(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  console.log("Request Form Data:", data);
  alert("Thank you! Your dish request has been submitted successfully!");

  // Reset form and close modal
  event.target.reset();
  closeRequestModal();
}

function handleContactSubmit(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  console.log("Contact Form Data:", data);
  alert("Thank you! We will contact you within 48 hours.");

  // Reset form
  event.target.reset();
}

// Search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");

  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        console.log("Searching for:", searchTerm);
        alert(`Searching for: ${searchTerm}`);
        // Here you would typically implement actual search functionality
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
          console.log("Searching for:", searchTerm);
          alert(`Searching for: ${searchTerm}`);
        }
      }
    });
  }
});

// Add hover effects for better interaction
document.addEventListener("DOMContentLoaded", function () {
  // Food card hover effects
  const foodCards = document.querySelectorAll(".food-card, .carousel-card");
  foodCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
      this.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
    });
  });

  // Button hover effects
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      if (this.classList.contains("carousel-nav")) {
        this.style.transform = "translateY(-50%) scale(1.1)";
      } else if (this.classList.contains("request-btn")) {
        this.style.transform = "translateY(-2px)";
      }
    });

    button.addEventListener("mouseleave", function () {
      if (this.classList.contains("carousel-nav")) {
        this.style.transform = "translateY(-50%) scale(1)";
      } else if (this.classList.contains("request-btn")) {
        this.style.transform = "translateY(0)";
      }
    });
  });
});

// Close modal when clicking outside
document.addEventListener("click", function (event) {
  if (event.target === requestModal) {
    closeRequestModal();
  }
});

// Escape key to close modal
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && requestModal.classList.contains("active")) {
    closeRequestModal();
  }
});

// Mobile menu functionality (basic)
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", function () {
      navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
      navLinks.style.position = "absolute";
      navLinks.style.top = "100%";
      navLinks.style.left = "0";
      navLinks.style.right = "0";
      navLinks.style.background = "#4caf50";
      navLinks.style.flexDirection = "column";
      navLinks.style.padding = "1rem";
      navLinks.style.gap = "1rem";
      navLinks.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    });
  }
});

// Smooth animations on scroll
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(
    ".food-card, .section-title, .carousel-card",
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
});

// Initialize scroll animations
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".food-card, .section-title, .carousel-card",
  );

  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.6s ease";
  });
});

console.log("JTBeats Food Delivery Website Loaded Successfully!");
