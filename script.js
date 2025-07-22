// Pizza Data Array
const pizzas = [
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    discount: "50%",
    image: "assets/images/first-row-1.png",
  },
  {
    name: "Home made pizza",
    price: "₹123",
    rating: 4.7,
    time: "50-79 min",
    image: "assets/images/first-row-2.png",
  },
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    discount: "20%",
    image: "assets/images/first-row-3.png",
  },
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    image: "assets/images/first-row-4.png",
  },
  {
    name: "Home made pizza",
    price: "$19",
    rating: 4.7,
    time: "50-79 min",
    discount: "50%",
    image: "assets/images/second-row-1.png",
  },
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    image: "assets/images/second-row-2.png",
  },
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    discount: "20%",
    image: "assets/images/second-row-3.png",
  },
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    discount: "50%",
    image: "assets/images/second-row-4.png",
  },
  {
    name: "Home made pizza",
    price: "$19",
    rating: 4.7,
    time: "50-79 min",
    discount: "50%",
    image: "assets/images/first-row-1.png",
  },
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    image: "assets/images/first-row-2.png",
  },
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    discount: "20%",
    image: "assets/images/first-row-3.png",
  },
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    image: "assets/images/first-row-4.png",
  },
];

// Popular Items Array
const popularItems = [
  {
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50-79 min",
    image: "assets/images/first-row-1.png",
  },
  {
    name: "Tandoori Chicken",
    price: 184,
    rating: 4.3,
    time: "15-20 min",
    discount: "20%",
    image: "assets/images/chilli-chicken.png",
  },
  {
    name: "Chili Chicken",
    price: 116,
    rating: 4.1,
    time: "25-45 min",
    discount: "50%",
    image: "assets/images/chicken-tandoori.png",
  },
];

// Load Pizza Cards
function loadPizzas() {
  const pizzaContainer = document.getElementById("pizzaList");
  pizzaContainer.innerHTML = pizzas
    .map(
      (pizza) => `
      <div class="food-card">
        ${
          pizza.discount
            ? `<div class="discount-badge">${pizza.discount}</div>`
            : ""
        }
        <div class="food-image">
          <img src="${pizza.image}" alt="${pizza.name}" />
        </div>
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">${pizza.name}</h3>
            <span class="card-price">${pizza.price}</span>
          </div>
          <div class="card-meta">
            <span class="rating-pill">
              <img src="assets/images/star.png" alt="star" />
              ${pizza.rating}
            </span>
            <span class="time-pill">${pizza.time}</span>
            <button class="cart-btn">
              <img src="assets/images/Card.png" alt="cart"/>
            </button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Load Popular Carousel Items
function loadPopularItems() {
  const track = document.getElementById("carouselTrack");
  if (!track) return;

  track.innerHTML = popularItems
    .map(
      (item) => `
        <div class="carousel-slide">
          <div class="carousel-card">
            ${item.discount ? `<div class="discount-badge">${item.discount}</div>` : ""}
            <div class="food-image">
              <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="card-content">
              <div class="card-header">
                <h3 class="card-title">${item.name}</h3>
                <span class="card-price">₹${item.price}</span>
              </div>
              <div class="card-meta">
                <span class="rating-pill">
                  <img src="assets/images/star.png" alt="star" />
                  ${item.rating}
                </span>
                <span class="time-pill">${item.time}</span>
              </div>
              <button class="cart-btn">
                <img src="assets/images/Card.png" alt="cart" />
              </button>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

// Carousel Navigation
let currentSlide = 0;

function showSlide(index) {
  const track = document.getElementById("carouselTrack");
  const slides = document.querySelectorAll(".carousel-slide");
  const totalSlides = slides.length;

  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  const offset = (-currentSlide * 100) / totalSlides;
  track.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Request Modal
function openRequestModal() {
  document.getElementById("requestModal").classList.add("active");
  document.body.classList.add("body-no-scroll");
}

function closeRequestModal() {
  document.getElementById("requestModal").classList.remove("active");
  document.body.classList.remove("body-no-scroll");
}

function handleRequestSubmit(event) {
  event.preventDefault();
  alert("Your request has been submitted!");
  closeRequestModal();
}

// Contact Form
function handleContactSubmit(event) {
  event.preventDefault();
  alert("Your message has been sent!");
}

// Video Toggle
function toggleVideo() {
  const video = document.getElementById("foodVideo");
  const playBtn = document.getElementById("playBtn");

  if (video.paused) {
    video.play();
    playBtn.innerHTML = "❚❚"; // Pause icon
  } else {
    video.pause();
    playBtn.innerHTML = "▶"; // Play icon
  }
}

// Load on Page Ready
window.onload = function () {
  loadPizzas();
  loadPopularItems();
  showSlide(currentSlide);
};
document.getElementById("foodVideo").addEventListener("ended", () => {
  document.getElementById("playBtn").innerHTML = "▶";
});
