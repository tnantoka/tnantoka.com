$(document).on('mouseover', '.js-iconate', function(e) {
  var options = {
    from: 'fa-lg',
    to: 'fa-lg',
    animation: 'rubberBand'
  };
  iconate(this, options);
});

$(document).on('click', '.js-iconate', function(e) {
  $(this).find('.fa-stack-1x').addClass('fa-pulse')
});
