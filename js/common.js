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
$('.burger').click(function() {
    $('.mobile-menu').toggleClass('dpb');
    $('#overlay').toggleClass('dpb');
    $(this).toggleClass('burger-active');
    $('body').toggleClass('ovh');
})

$('.order').click(function(e) {
    e.preventDefault();
    $('.popup').toggleClass('dpb');
    $('#overlay').toggleClass('dpb');
    $('body').toggleClass('ovh');
    $('.burger').toggleClass('dpn')

})
$('.order-lgot').click(function(e) {
    e.preventDefault();
    $('.popup').toggleClass('dpb');
    $('body').toggleClass('ovh');
    $('#overlay').toggleClass('dpb');
    $('.burger').toggleClass('dpn')

})
$('.closepop').click(function(e) {
    $('body').toggleClass('ovh');
    e.preventDefault();
    $('.popup').toggleClass('dpb');
    $('#overlay').toggleClass('dpb');
    $('.burger').toggleClass('dpn')

})

$('.mosobl').hover(function() {
    if ($(window).width() > 1100) {
        $('.hiddenoblast').toggleClass('dpb')
    }
})
$('.hiddenoblast').hover(function() {
    $('.hiddenoblast').toggleClass('dpb')
})
$('.adm').hover(function() {
    if ($(window).width() > 1100) {
        $('.hiddenokr').toggleClass('dpb');
    }
})

$('.hiddenokr').hover(function() {
    $('.hiddenokr').toggleClass('dpb')
})

$('.fl').click(function() {
    $('.lica__item').removeClass('lica__item-active')
    $(this).addClass('lica__item-active')
    $('.prov-list').addClass('dpn')
    $('.fl-c').removeClass('dpn')
})
$('.ul').click(function() {
    $('.lica__item').removeClass('lica__item-active')
    $(this).addClass('lica__item-active')
    $('.prov-list').addClass('dpn')
    $('.ul-c').removeClass('dpn')
})
$('.yk').click(function() {
    $('.lica__item').removeClass('lica__item-active')
    $(this).addClass('lica__item-active')
    $('.prov-list').addClass('dpn')
    $('.yk-c').removeClass('dpn')
})
$('.gallery-slid').each(function(i, el) {
    $(el).simpleLightbox();
})