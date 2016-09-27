$('#about-button').on('click', function(e){
    e.preventDefault();
    var target = $('#content');
    $('html, body').stop().animate({
       scrollTop: (target.offset().top - $('#navsize').height())
    }, 800);
});

$('#home-button').on('click', function(e){
    e.preventDefault();
    $('html, body').stop().animate({
       scrollTop: 0
    }, 800);
});