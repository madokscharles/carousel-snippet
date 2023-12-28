const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const images = document.querySelectorAll('.carousel img');

let currentImageIndex = 0;

function showImage(index) {
    images.forEach((image, idx) => {
        if (idx === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

// Show the first image initially
showImage(currentImageIndex);
