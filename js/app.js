AOS.init({
  once: true,
  offset: 100,
  delay: 100
});

$(document).ready(function(){
  $(window).scroll(function(){
    var header = $("header");
    header.toggleClass("sticky", $(window).scrollTop() > 0 );
  });

  $("#hamburger").click(function(){
    $("body").toggleClass("menuToggle");
    $("#mobileMenu").slideToggle();
  });

  $(".play-icon").click(function () {
    $(this).parent(".video-wrapper").toggleClass("video-toggle");
  
    const video = $(this).next("video")[0];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  });
  


});




// const timelineItems = document.querySelectorAll('.timeline-item');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     const item = entry.target;

//     if (entry.isIntersecting) {
//       // Remove active state from all timeline-items
//       document.querySelectorAll('.timeline-item').forEach(ti => {
//         ti.classList.remove('active');
//       });

//       // Add active state to the current one
//       item.classList.add('active');
//     }
//   });
// }, {
//   threshold: 0.6
// });

// timelineItems.forEach(item => observer.observe(item));


// const timelineItems = document.querySelectorAll('.timeline-item');

// const observerOptions = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.8, // Adjust sensitivity
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // Remove "active" from all
//       timelineItems.forEach((item) => item.classList.remove('active'));
      
//       // Add "active" only to the one in view
//       entry.target.classList.add('active');
//     }
//   });
// }, observerOptions);

// // Observe each timeline item
// timelineItems.forEach((item) => {
//   observer.observe(item);
// });


window.addEventListener('scroll', () => {
  let scrollY = window.scrollY + window.innerHeight * 0.55; // Change trigger point lower (e.g., 75%)

  document.querySelectorAll('.timeline-item').forEach((item) => {
    let rect = item.getBoundingClientRect();
    let offsetTop = rect.top + window.scrollY;
    let offsetBottom = offsetTop + item.offsetHeight;

    if (scrollY > offsetTop && scrollY < offsetBottom) {
      document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    }
  });
});

var swiper = new Swiper('.can-do-swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // You can add more options as needed
});
