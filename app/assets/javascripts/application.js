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
})

