$(document).scroll(function() {
  $('.secondary-logo').each(function() {
      var shapeId = '#' + $(this).attr("data-target");
      $(this).css('top',
          $(shapeId).offset().top -
          $(this).closest('.section').offset().top
      );
  });
});

$(document).ready(function(){

  $(".links").mouseover(function() {
      var hoveredLink = $(this).attr('href').substring(1);
      console.log(hoveredLink);
      $('.menu-container').each(function() {
          if ($(this).attr('data-target') == hoveredLink) {
              $(this).find("span").css('opacity', 1);
          }
      });
  });

  $(".links").mouseout(function() {
      var hoveredLink = $(this).attr('href').substring(1);
      $('.menu-container').each(function() {
          if ($(this).attr('data-target') == hoveredLink) {
              $(this).find("span").css('opacity', 0);
          }
      });
  });

});
