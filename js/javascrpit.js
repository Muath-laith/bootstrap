$(function(){

    'use strict'
    //smoothly scroll to element
    $('.navbar-nav li a').click(function(e){
       e.preventDefault();
       $('html, body').animate({
 
          scrollTop: $('#' +$(this).data('scroll')).offset().top-40
       },1000);
 
    });
     //add active class on navbar link and remove from siblings
    $('.navbar-nav li a').click(function(){
        // $('.navbar a').removeClass("active");
        // $(this).addClass("active")
               $(this).addClass("active").parent().siblings().find('a').removeClass("active")
           });

           //scroll to top
           var scrolltotop = $(".scroll-to-top")
   $(window).scroll(function(){
      if($(window).scrollTop()>= 1000){
         $(scrolltotop ).fadeIn(400);

      }else
      $(scrolltotop ).fadeOut(400);

   });
   
   $(".scroll-to-top").click(function(e){
      e.preventDefault();
      $('html, body').animate({

         scrollTop: 0
      },1000);

   });
    
 });