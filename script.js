let slideIndex = 1;
      showSlides(slideIndex);
  
      function plusSlides(n) {
        showSlides((slideIndex += n));
      }
  
      function showSlides(n) {
        const slides = document.getElementsByClassName("carousel-slide");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
  
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex].style.display = "block";
      }
  
      function autoSlides() {
        plusSlides(2);
      }
      setInterval(autoSlides, 5000);