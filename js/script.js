(function($) {

   var images = $('.slide img'),
       arrowLeft = $('.arrow-left'),
       arrowRight = $('.arrow-right');

   // skryjeme vsetky slidy okrem prveho
   images.not(':first').hide();

   // zobrazime nasledujuce slidy
   arrowRight.on('click', function(event){
      event.preventDefault();

      var currentImage = images.filter(':visible');
      currentImage.addClass('selected').show();

      var nextImage = currentImage.next();
      currentImage.removeClass('selected').fadeOut();
      nextImage.addClass('selected').fadeIn();

      if ( nextImage.length == 0 ) {
         images.first().fadeIn()
      }
   });

   // zobrazime predosle slidy
   arrowLeft.on('click', function(event){
      event.preventDefault();

      var currentImage = images.filter(':visible');
      currentImage.addClass('selected').show();

      var prevImage = currentImage.prev();
      currentImage.removeClass('selected').fadeOut();
      prevImage.addClass('selected').fadeIn();

      if ( prevImage.length == 0 ) {
         images.last().fadeIn()
      }
   });

   // smoth scrolling
   $('a').on('click',function (e) {
       e.preventDefault();
       var target = this.hash;
       $target = $(target);
       $('html, body').stop().animate({
           'scrollTop':  $target.offset().top
       }, 1000, 'swing', function () {
           window.location.hash = target;
       });
   });

})(jQuery);
