$(document).ready(function () {
  const carousel = $(".carousel");
  const slides = $(".slide");
  let currentSlide = 0;

  $(".next").click(function () {
      currentSlide = (currentSlide + 1) % slides.length;
      updateCarousel();
  });

  $(".prev").click(function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateCarousel();
  });

  function updateCarousel() {
      const slideWidth = slides.eq(0).width();
      const newPosition = -currentSlide * slideWidth;
      carousel.css("transform", `translateX(${newPosition}px)`);
  }
});
