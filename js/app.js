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
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // You can add more options as needed
});




// vertical slider 

const thumbsSwiper = new Swiper(".thumbsSwiper", {
  direction: "vertical",
  spaceBetween: 10,
  slidesPerView: 5,
  watchSlidesProgress: true,
  slideToClickedSlide: true,
  loop: true,
});

const mainSwiper = new Swiper(".mainSwiper", {
  direction: "vertical",
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
  on: {
    slideChange: () => {
      // Optional: Sync animation
      const activeSlide = document.querySelector('.mainSwiper .swiper-slide-active .content-wrapper');
      activeSlide?.setAttribute('data-aos', 'fade-left');
    }
  }
});


// var swiper = new Swiper(".vertical-slider", {
//   direction: "vertical",
//   slidesPerView: 1,
//   spaceBetween: 30,
//   mousewheel: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


// Use the nav-link content from file_context_0 for each pagination item
var slideLabels = [
  '<img src="images/tab-1.png" alt="tab-1"> Product Managers',
  '<img src="images/tab-2.png" alt="tab-2"> Marketing Teams',
  '<img src="images/tab-3.png" alt="tab-3"> STEP solution owners',
  '<img src="images/tab-4.png" alt="tab-4"> Image Editors',
  '<img src="images/tab-5.png" alt="tab-5"> Sales teams',
  '<img src="images/tab-6.png" alt="tab-6"> Customer Support',
  '<img src="images/tab-7.png" alt="tab-7"> Suppliers',
  '<img src="images/tab-8.png" alt="tab-8"> Distributors/customers',
  '<img src="images/tab-9.png" alt="tab-9"> External agencies'
];

var verticalSlider = new Swiper('.vertical-slider', {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // Add 'nav-link' class in addition to Swiper's className
      return '<div class="' + className + ' nav-link">' + slideLabels[index] + '</div>';
    }
  },
});