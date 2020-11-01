$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:24,
        nav:true,
        dots:false,
        navText : ['',''],
        responsive:{
            0:{
                items:1
            },
            321:{
                items:2
            },
            769:{
                items:3
            }
        }
    })
  });

