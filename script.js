const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide();
}

setInterval(nextSlide, 3000);