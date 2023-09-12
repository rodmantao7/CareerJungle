$('.job-meta').hover(function() { 
    $(this).stop().addClass('shadow').animate({width:'620px', padding: '20px 60px'}); 
  }, function() {
      $(this).stop().removeClass('shadow').animate({width:'320px', padding: '20px'}); 
  });