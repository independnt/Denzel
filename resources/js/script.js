$(document).ready(function() {
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
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

  /*animations*/

  $('.js--picture').waypoint(function(direction) {
    $('.js--picture').addClass('animated fadeInLeft')
  }, {
    offset: '50%'
  })

});
