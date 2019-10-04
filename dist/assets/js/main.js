  $(document).ready(function() {
// *************** vars **************  
    $(function() {
    $('.intro').addClass('go');

    $('.reload').click(function() {
      $('.intro').removeClass('go').delay(200).queue(function(next) {
        $('.intro').addClass('go');
        next();
      });

    });
  })
}); //document ready