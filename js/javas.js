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


function input(){
  var Name = document.getElementById('name').value;
  var Email = document.getElementById('email').value;
  var Message = document.getElementById('message').value;
  alert(Name + " we have recieved your message. Thank you for contacting us");
}
