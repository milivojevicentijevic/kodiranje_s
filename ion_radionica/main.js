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

var onTop = $('.onTop');
$(window).scroll(function() {
    if($(this).scrollTop() > 300) {
        console.log("skrolam dole " + $(window).scrollTop());
        onTop.fadeIn(600).css("cursor","pointer");
        onTop.click(function() {
            $(window).scrollTop(0);
        });
    } else {
        onTop.fadeOut(600);
    }
});

$(document).ready(function() {
    $('form').addClass('form-slideIn');
    $('form').on('transitionend', function() {
        $('form').addClass('form-open');
        console.log($('.form-open').width());
        if ($('.form-open').width() > 450) {
            $('form h3').addClass('opacity');
            $('form label').addClass('opacity');
            $('form button').addClass('opacity');
        }
    });
    
});