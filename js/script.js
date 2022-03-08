$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    console.log('teste')


    $('.owl-carousel').on('mouseenter', function() {
        $('.owl-nav').fadeIn();
    })
    $('.owl-carousel').on('mouseleave', function() {
        $('.owl-nav').fadeOut();
    })

});