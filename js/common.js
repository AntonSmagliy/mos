$(function() {
    $('.slider-clients').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        nextArrow: ' <div class="clientsNextArrow clientsArrows"><img src="img/right-arrow.png" alt=""></div>',
        prevArrow: '  <div class="clientsPrevArrow clientsArrows"><img src="img/left-arrow.png" alt=""></div> ',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.gallery-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        nextArrow: ' <div class="galleryNextArrow galleryArrows"><img src="img/right-arrow.png" alt=""></div>',
        prevArrow: '  <div class="galleryPrevArrow galleryArrows"><img src="img/left-arrow.png" alt=""></div> ',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});

$('.faq-list__item').click(function() {
    if ($(this).hasClass('active')) {
        $(this).toggleClass('active');
    } else {
        $('.faq-list__item').removeClass('active');
        $(this).toggleClass('active');
    }
})

$('.chto').click(function(e) {
    e.preventDefault();
    $(this).siblings('.prov-hidden').toggleClass('dpb');
})
$('.close').click(function() {
    $(this).parent().toggleClass('dpb')
})