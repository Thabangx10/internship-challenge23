// $(document).action(function) {
//     $("p").hide();
// }

// $(document).ready(function () {

//    $("button").click(function (e) { 
//     e.preventDefault();

//     $(".response").hide();
//     // $("h1").hide();
//     $("#image").show();

//    }); 
// });

// $(document).ready(function () {
//     $(".menu-icon").click(function () {
//       $(".menu").toggle();
//     });
  
//     let currentSlide = 0;
//     const totalSlides = $(".slide").length;
  
//     $(".arrow").click(function () {
//       currentSlide = (currentSlide + 1) % totalSlides;
//       updateSlider();
//     });
  
//     function updateSlider() {
//       const slideWidth = $(".slide").width();
//       const newPosition = -currentSlide * slideWidth;

//     $(".slider").scrollLeft(newPosition);
//     }
// });

// $(document).ready(function () {
//     const carousel = $(".carousel");
//     const slides = $(".slide");
//     let currentSlide = 0;
  
//     $(".next").click(function () {
//       if (currentSlide < slides.length - 1) {
//         currentSlide++;
//       } else {
//         currentSlide = 0;
//       }
//       updateCarousel();
//     });
  
//     $(".prev").click(function () {
//       if (currentSlide > 0) {
//         currentSlide--;
//       } else {
//         currentSlide = slides.length - 1;
//       }
//       updateCarousel();
//     });
  
//     function updateCarousel() {
//       const slideWidth = slides.eq(0).width();
//       const newPosition = -currentSlide * slideWidth;
//       carousel.css("transform", `translateX(${newPosition}px)`);
//     }
//   });

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
