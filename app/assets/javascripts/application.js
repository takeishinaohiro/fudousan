// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery
//= require jquery_ujs
//= require_tree .
$(function() {
$('.slide-main').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
})
$(function() {
  $('.left').click(function(){
    console.log("apa");
    $('.customer-main__content3').addClass('none')
    $('.customer-main__content2').addClass('none')
    $('.customer-main__content1').removeClass('none')
  });



  $('.center').click(function(){
    console.log("apa");
    $('.customer-main__content3').addClass('none')
    $('.customer-main__content1').addClass('none')
    $('.customer-main__content2').removeClass('none')
  });


  $('.right').click(function(){
    console.log("apa");
    $('.customer-main__content2').addClass('none')
    $('.customer-main__content1').addClass('none')
    $('.customer-main__content3').removeClass('none')
  });






  $('.aa').click(function(){
    console.log("apa");
    $('.consul-main__main').addClass('none2')
    $('.js1').removeClass('none2')
  });
  $('.next1').click(function(){
    console.log("apa");
    $('.js1').addClass('none2')
    $('.consul-main__main').removeClass('none2')
  });


  $('.bb').click(function(){
    console.log("apa");
    $('.consul-main__main').addClass('none2')
    $('.js2').removeClass('none2')
  });
  $('.next2').click(function(){
    console.log("apa");
    $('.js2').addClass('none2')
    $('.consul-main__main').removeClass('none2')
  });

  $('.cc').click(function(){
    console.log("apa");
    $('.consul-main__main').addClass('none2')
    $('.js3').removeClass('none2')
  });
  $('.next3').click(function(){
    console.log("apa");
    $('.js3').addClass('none2')
    $('.consul-main__main').removeClass('none2')
  });

  $('.dd').click(function(){
    console.log("apa");
    $('.consul-main__main').addClass('none2')
    $('.js4').removeClass('none2')
  });
  $('.next4').click(function(){
    console.log("apa");
    $('.js4').addClass('none2')
    $('.consul-main__main').removeClass('none2')
  });


  $('.ee').click(function(){
    console.log("apa");
    $('.consul-main__main').addClass('none2')
    $('.js5').removeClass('none2')
  });
  $('.next5').click(function(){
    console.log("apa");
    $('.js5').addClass('none2')
    $('.consul-main__main').removeClass('none2')
  });


  $('.ff').click(function(){
    console.log("apa");
    $('.consul-main__main').addClass('none2')
    $('.js6').removeClass('none2')
  });
  $('.next6').click(function(){
    console.log("apa");
    $('.js6').addClass('none2')
    $('.consul-main__main').removeClass('none2')
  });
})

// $(function() {
//   var h = $(window).height();
 
//   $('#wrap').css('display','none');
//   $('#loader-bg ,#loader').height(h).css('display','block');
// });
 
 
// //10秒たったら強制的にロード画面を非表示
// $(function(){
//   setTimeout('stopload()',2500);
// });


// function stopload(){
//   $('#wrap').css('display','block');
//   $('#loader-bg').delay(900).fadeOut(800);
//   $('#loader').delay(600).fadeOut(300);
// }






$(function(){

  function scrollToTop() {
    $('html, body').animate({scrollTop:0});
   }
   function scrollToAbout() {
    $("html,body").animate({scrollTop:$('.customer-main').offset().top});
   }
   function scrollToSche() {
    $("html,body").animate({scrollTop:$('.otoiawase-main').offset().top});
   }

   function scrollToJo() {
    $("html,body").animate({scrollTop:$('.consul-main').offset().top});
   }


   

   $(".logo").click(function(){
    console.log("apa");
    scrollToTop()
  });
  $(".top").click(function(){
    console.log("apa");
    scrollToTop()
  });

  $(".customer").click(function(){
    scrollToAbout()
  });

  $(".otoiawase").click(function(){
    scrollToSche()
  });

  $(".consul").click(function(){
    scrollToJo()
  });
});