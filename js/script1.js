let currentIndex = 0;
const slides = document.querySelectorAll('.slider__item');
const totalSlides = slides.length;

function updateCounter() {
  const counter = document.querySelector('.slider__pagination');
  counter.textContent = `${currentIndex + 1}/${totalSlides}`;
}

function showSlides() {
  slides.forEach((slide, index) => {
    if (index >= currentIndex && index < currentIndex + 3) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) currentIndex = 0;

  showSlides();
  updateCounter();
  updateButtons();
}
setInterval(() => {
  nextSlide();
}, 4000);

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    showSlides();
    updateCounter();
    updateButtons();
  }
}

showSlides();
updateCounter();
updateButtons();
