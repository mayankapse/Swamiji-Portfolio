let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelector(".slider");

  if (slides) {
    const totalSlides = slides.querySelectorAll(".slide").length;
    currentIndex += step;

    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
  }
}

function highlightNavLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSectionId) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightNavLink);
window.addEventListener("load", highlightNavLink);

// Automatically slide images every 3 seconds
function moveSlide(step) {
  const slides = document.querySelector(".slider");

  if (slides) {
    const totalSlides = slides.querySelectorAll(".slide").length;
    currentIndex += step;

    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
  }
}

function highlightNavLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSectionId) {
      link.classList.add("active");
    }
  });
}

// Add event listener for scroll to highlight the current section
window.addEventListener("scroll", highlightNavLink);

// Call the function on page load to set the correct active link
window.addEventListener("load", highlightNavLink);

// Automatically slide images every 3 seconds
const slideInterval = 5000; // Time interval in milliseconds
setInterval(() => {
  moveSlide(1);
}, slideInterval);

document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});

// knowldge session 
function showMoreText(event1) {
  event.preventDefault();
  window.open("stotra.html", "_self");
}

function showMoreText(event2) {
  event.preventDefault();
  window.open("pitra-dosha.html", "_self");
}