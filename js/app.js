$(document).ready(function () {

    //mob menu 
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.mob-nav').toggleClass('visible');
        $('body').toggleClass('menu-opened');
    });
    $('.close-menu').on('click', function () {
        $('.mob-nav').removeClass('visible');
        $('body').removeClass('menu-opened');
    });


});
