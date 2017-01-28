$(window).on('load', function() {
    console.log("start fade");
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
