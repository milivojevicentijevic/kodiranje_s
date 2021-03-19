$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})