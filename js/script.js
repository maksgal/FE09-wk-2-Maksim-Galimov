$('.burger').click(function(){
    $(this).toggleClass('open');
    $('.nav').toggleClass('nav-open');  
  });


  $('.gallery-item').click(function(){
    var url = $(this).attr('href'); 
    window.open("#", '_blank');
   
  });
 
    
  $('.nav-item-link').click(function(){
    if ($(window).width() < 576) {
      $('.burger').toggleClass('open');
      $('.nav').toggleClass('nav-open');
    }
  });

  window.addEventListener('resize', function(event) {
    if ($(window).width() < 575) {
      $('.burger').removeClass('open');
      $('.nav').removeClass('nav-open');
    }
  });

  let item_width = $('.gallery-item').width();
  
$('.gallery-item').css({'height':item_width * 0.75 + 'px'});


$( window ).resize(function() {

  let item_width2 = $('.gallery-item').width();

  $('.gallery-item').css({'height':item_width2 * 0.75 + 'px'});

});

$(document).ready(function(){

  $('.slider').slick({

      dots: true,
      autoplay: true,
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      arrows: 'false'

});

});