$(function (){
    // adjust header height
    var myHeader =  $('.header');
    myHeader.height($(window).height());
    $(window).resize(function(){
        myHeader.height($(window).height());
    });
    // links active class
    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    //adjust slider list centre 
    /*$('.slider').each(function (){
        $(this).css('paddingTop',($(window).height() - $('.slider li').height()) / 2);
    })*/
    // trigger bx slider
    $('.slider').bxSlider({
        pager: false
    });
    // smooth scroll
    $('.links li a').click(function (){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        },1000)
    })
    // auto slider code
    (function autoSlider (){
        $('.slider-1 .active').each(function (){
            if (!$(this).is(':last-child')) {
                $(this).delay(2000).fadeOut(1000, function (){
                    $(this).removeClass('active').next().addClass('active').fadeIn(600);
                    autoSlider();
                })
            } else{
                $(this).delay(2000).fadeOut(1000, function(){
                    $(this).removeClass('active');
                    $('.slider-1 div').eq(0).addClass('active').fadeIn(600);
                    autoSlider();
                })
            }
        })
    }());
    // shuffle links not working
   // $('.shuffle li').click(function (){
      //  $(this).addClass('selected').siblings().removeClass('selected')
   // });
   // nice scroll
   /*$("body").niceScroll();
   $("body").niceScroll({
    cursorcolor:"aquamarine",
    cursorwidth:"16px"
    });
    $(".nicescroll-box").niceScroll(".wrap",{cursorcolor:"aquamarine"});
    $("<your div>").getNiceScroll().resize();*/
   
});