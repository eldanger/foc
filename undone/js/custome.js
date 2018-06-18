$(function () {

    // nice scroll

    $('html').niceScroll();

    // header height
    $('.header').height($(window).height());
    //scroll to feat
    $('.header .arrow i').click (function (){
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        },700)
    });
    // show hidden img
    $('.show-more').click(function(){
        $('.hidden').fadeIn(600);
    });
    // slider testimonials
    var leftArrow = $('.testim .fa-chevron-left');
    var rightArrow = $('.testim .fa-chevron-right');
    function checkClients(){
        if($('.client:first').hasClass('active')){
            leftArrow.fadeOut();
        }else{
            leftArrow.fadeIn();
        }
        if ($('.clint:last').hasClass('active')){
            rightArrow.fadeOut();
        }else{
            rightArrow.fadeIn()
        }

    }
    checkClients()
    $('.testim i').click(function(){
        if ($(this).hasClass('fa-chevron-right')){
            $('.testim .active').fadeOut(400,function (){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients()
            });
        }else{
            $('.testim .active').fadeOut(400, function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients()
            })
        }
    })



})