// @ts-nocheck
$(document).ready(function() {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaypeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//slider 2
  $('.slider-nav2').slick({
    dost:true,
    infinite:true,
    speep:300,
    slidesToShow:2,
    slidesToScroll:1,
    autoplay:true,
    autoplaypeed:1000,
  });

  //slider 3
  $('.slider-nav3').slick({
    dost:true,
    infinite:true,
    speep:300,
    slidesToShow:5,
    slidesToScroll:1,
    autoplay:true,
    autoplaypeed:1500,
  });

  //slider 4
  $('.dirthdayclond').slick({
    dost:true,
    infinite:true,
    speep:300,
    slidesToShow:3,
    slidesToScroll:1,
    autoplay:true,
    autoplaypeed:3000,
  });
  $('.fromthe').slick({
    dost:true,
    infinite:true,
    speep:300,
    slidesToShow:2,
    slidesToScroll:1,
    autoplay:true,
    autoplaypeed:3000,
  });
});
