$('.one').on('click', function(){
    $('.hide-1').toggle();
});
$('.two').on('click', function(){
    $('.hide-2').toggle();
});
$('.three').on('click', function(){
    $('.hide-3').toggle();
});


$(".img-thumbnail").hover(function(){
  $(this).addClass("hover");
}, function(){
    $(this).removeClass("hover");
});
