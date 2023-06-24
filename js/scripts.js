

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,

        autoplayTimeout:2500,
        navText: [ '', ' ' ],
        nav: false,
        dots: true,


        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1100:{
                items:5
            }
        }
    });
});


