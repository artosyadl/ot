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
        nextArrow: '<a class="el-arrow mod-prev" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61"><path d="M0 31c0 16.54 13.46 30 30 30s30-13.46 30-30S46.54 1 30 1 0 14.46 0 31zm2.4 0A27.63 27.63 0 0 1 30 3.4 27.63 27.63 0 0 1 57.6 31 27.63 27.63 0 0 1 30 58.6 27.63 27.63 0 0 1 2.4 31z"/><path class="arr__mod" d="M34.99 31.48c0-.3-.11-.6-.32-.84l-7.79-8.3a1.07 1.07 0 0 0-1.58 0 1.25 1.25 0 0 0 0 1.68l7 7.46-7 7.46a1.25 1.25 0 0 0 0 1.68c.44.46 1.14.46 1.58 0l7.79-8.3c.21-.23.32-.54.32-.84z"/></svg></a>'
    });
}
if (isOnPage('.slider')){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
        appendArrows: $('.wrap-btn'),
        prevArrow: '<a class="el-arrow mod-next" href="#"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 19" style="enable-background:new 0 0 10 19;" xml:space="preserve"><path d="M0,9.5c0,0.3,0.1,0.6,0.3,0.8l7.8,8.3c0.4,0.4,1.1,0.5,1.5,0.1c0,0,0,0,0.1-0.1c0.4-0.5,0.4-1.2,0-1.7l-7-7.5 l7-7.5c0.4-0.5,0.4-1.2,0-1.7c-0.4-0.5-1.1-0.5-1.6,0L0.3,8.6C0.1,8.9,0,9.2,0,9.5z"/></svg></a>',
        nextArrow: '<a class="el-arrow mod-prev" href="#"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 19" style="enable-background:new 0 0 10 19;" xml:space="preserve"><path d="M10,9.5c0-0.3-0.1-0.6-0.3-0.8L1.9,0.3C1.5-0.1,0.8-0.1,0.4,0.3c0,0,0,0-0.1,0.1c-0.4,0.5-0.4,1.2,0,1.7l7,7.5 l-7,7.5c-0.4,0.5-0.4,1.2,0,1.7c0.4,0.5,1.1,0.5,1.6,0l7.8-8.3C9.9,10.1,10,9.8,10,9.5z"/></svg></a>'
    });
}
if (isOnPage('.item-color')){
    $(document).on('click', '.item-color', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

}



$(document).on('click', '.js_menu', function (e) {
    e.preventDefault();
    $('.nav').addClass('open');
});

$(document).on('click', '.js_close', function (e) {
    e.preventDefault();
    $('.nav').removeClass('open');
});

$(document).on('click', '.sort-btn', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
});

// $(document).on('click', '.product__item .title', function (e) {
//     e.preventDefault();
//     $(this).parents('.product__item').toggleClass('open');
// });

$(document).on('click', '.product__item .arrow', function (e) {
    e.preventDefault();
    $(this).parents('.product__item').toggleClass('open');
});

var entries = [
    { label: 'Керосин', url: '#', target: '_top' },
    { label: 'Ксилол', url: '#', target: '_top' },
    { label: 'Уайт спирит', url: '#', target: '_top' },
    { label: 'Бутилацетат', url: '#', target: '_top' },
    { label: 'Толуол', url: '#', target: '_top' },
    { label: 'Сольвент', url: '#', target: '_top' },
    { label: 'Ацетон', url: '#', target: '_top' },
    { label: 'Нефрас', url: '#', target: '_top' },
    { label: 'Этилацетат', url: '#', target: '_top' },
    { label: 'Изопропиловый спирт', url: '#', target: '_top' },
    { label: 'Растворитель 646', url: '#', target: '_top' },
    { label: 'Растворитель Р 4', url: '#', target: '_top' },
    { label: 'Растворитель Р 5', url: '#', target: '_top' },
    { label: 'грунтовка гф-021', url: '#', target: '_top' },
    { label: 'Водоэмульсионные краски', url: '#', target: '_top' },
    { label: 'Эмаль НЦ-132', url: '#', target: '_top' },
    { label: 'Грунт-эмаль по ржавчине 3 в 1', url: '#', target: '_top' },
    { label: 'Ортоксилол', url: '#', target: '_top' }
];

var settings = {
    entries: entries,
    width: 740,
    height: 500,
    radius: '75%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: 'rgba(0,0,0,0)',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontColor: '#fff',
    fontWeight: 'normal',//bold
    fontStyle: 'normal',//italic
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true
};

//var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
$( '#tag-cloud' ).svg3DTagCloud( settings );


function init_map1() {
    var myOptions = {
        zoom: 12,
        center: new google.maps.LatLng(40.580247, -35.817628),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('maps'), myOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(56.8777961, 60.53783659999999)
    });
    var infowindow = new google.maps.InfoWindow({content: '<strong>Маневровая, 35</strong><br><br> <br>'});
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}

google.maps.event.addDomListener(window, 'load', init_map1());


$(document).on('opening', '.modal-map', function () {
    // console.log('Modal is opening');

    setTimeout(function () {
        init_map1();
        // console.log('----- ' + 111);
    }, 100);
    
});