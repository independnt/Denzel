$(document).ready(function() {

  $('h1.toshow').slideDown(1000);
  $('h2.toshow').slideDown(1000);

  $('.js--section-about-me').waypoint(function(direction) {
      if(direction == "down"){
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
  }, {
    offset: '8%'
  });

  /*nav link scroll */
  $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });


  /*animations*/

  $('.js--picture').waypoint(function(direction) {
    $('.js--picture').addClass('animated fadeInLeft')
  }, {
    offset: '50%'
  })

  /* mobile nav*/

  $('.js--nav-icon').click(function(){
    const nav = $('.js--main-nav');
    const icon = $('.js--nav-icon i');

    nav.slideToggle(200)
    if(icon.hasClass('ion-navicon-round')){
      icon.addClass('ion-close-round')
      icon.removeClass('ion-navicon-round')
    } else {
      icon.addClass('ion-navicon-round')
      icon.removeClass('ion-close-round')
    }
  })

});
