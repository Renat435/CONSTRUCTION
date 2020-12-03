$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__links').toggleClass('burger');
    });
    $('.why__slides').slick({
        arrows: false,
        swipe: true,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
    });
});