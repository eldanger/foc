$(document).ready(function(){
    // nice scroll
    //$('body').niceScroll();
    $("#boxscroll").niceScroll({horizrailenabled:false});
    $('.carousel').carousel({
        interval: 3000
      })
   // loading screen
   $(window).on('load',function(){
       $('.loading-overlay .sk-folding-cube').fadeOut(3000,function(){
           $(this).parent().fadeOut(2000,function(){
               $('body').css('overflowY', 'auto');
               $(this).remove();
           })
       })
   })
   
      
})