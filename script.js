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

// courses section
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').prepend(items[items.length - 1]);
});

// knowledge session
function showMoreText(event, page) {
  event.preventDefault();
  window.open(page, "_self");
}