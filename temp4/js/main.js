$(function (){
    'use strict'
    var winH = $(window).height();
    var upperH = $('.upper-bar').innerHeight();
    var navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height( winH - (navH + upperH) );
    //shuffle img
    $('.featured-work ul li').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all'){
            $('.featured-work .col-md').css('opacity', 1);
        }else{
            $('.featured-work .col-md ').css('opacity', '.4')
            $($(this).data('class')).css('opacity','1')
        }
    })
});