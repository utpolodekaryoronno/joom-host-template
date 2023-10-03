$(document).ready(function(){
  // click menu bar 
    $('.menu-bar').click(function(){
    $('.header-menu-right').slideToggle();
  });
  // owlCarousel
  // pay-service
  $('.pay-service').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });


  $('.people').owlCarousel({
    loop:true,
    margin:40,
    autoplay:true,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
  });
  // partner
  $('.partner').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        420:{
          items:2
        },
        575:{
          items:3
        },
        575:{
            items:4
        },
        767:{
          items:5
        },
        1000:{
            items:6
        }
    }
  });

  // aos
  // AOS.init();
  
});

