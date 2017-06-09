'use strict';
// fixed svg show
//-----------------------------------------------------------------------------
function fixedSvg() {
    var baseUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search;
    $('use').filter(function() {
        return ($(this).attr("xlink:href").indexOf("#") > -1);
    }).each(function() {
        $(this).attr("xlink:href", baseUrl + $(this).attr("xlink:href").split('/').slice(-1)[0]);
    });
}

fixedSvg();

// checking if element for page
//-----------------------------------------------------------------------------------
function isOnPage(selector) {
    return ($(selector).length) ? $(selector) : false;
}

if (isOnPage('.js-section-home')){
    $('.js-section-home').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
        appendArrows: $('.wrap-btn'),
        prevArrow: '<a class="el-arrow mod-next" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61"><path d="M1 31c0 16.54 13.46 30 30 30s30-13.46 30-30S47.54 1 31 1 1 14.46 1 31zm2.4 0A27.63 27.63 0 0 1 31 3.4 27.63 27.63 0 0 1 58.6 31 27.63 27.63 0 0 1 31 58.6 27.63 27.63 0 0 1 3.4 31z"/><path class="arr__mod" d="M26 31.48c0-.3.12-.6.33-.84l7.8-8.3a1.07 1.07 0 0 1 1.57 0c.43.46.43 1.21 0 1.68l-7 7.46 7 7.46c.43.46.43 1.21 0 1.68-.44.46-1.14.46-1.58 0l-7.79-8.3a1.22 1.22 0 0 1-.32-.84z"/></svg></a>',
        nextArrow: '<a class="el-arrow mod-prev" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61"><path d="M0 31c0 16.54 13.46 30 30 30s30-13.46 30-30S46.54 1 30 1 0 14.46 0 31zm2.4 0A27.63 27.63 0 0 1 30 3.4 27.63 27.63 0 0 1 57.6 31 27.63 27.63 0 0 1 30 58.6 27.63 27.63 0 0 1 2.4 31z"/><path class="arr__mod" d="M34.99 31.48c0-.3-.11-.6-.32-.84l-7.79-8.3a1.07 1.07 0 0 0-1.58 0 1.25 1.25 0 0 0 0 1.68l7 7.46-7 7.46a1.25 1.25 0 0 0 0 1.68c.44.46 1.14.46 1.58 0l7.79-8.3c.21-.23.32-.54.32-.84z"/></svg></a>',

    });
}

$(document).on('click', '.js_menu', function (e) {
    e.preventDefault();
    $('.nav').addClass('open');
});

$(document).on('click', '.js_close', function (e) {
    e.preventDefault();
    $('.nav').removeClass('open');
    console.log('----- ' + 1);
});