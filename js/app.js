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



