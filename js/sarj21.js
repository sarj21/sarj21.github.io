$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
});


$(function() {
    $('.card').matchHeight({
        byRow: true
    });
});

$(document).ready(function() {
    $('.tooltipped').tooltip({
        delay: 50
    });
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });
});
