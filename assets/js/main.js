$(function(){


// Menu settings
// $('#menuToggle, .menu-close').on('click', function(){
//   $('#menuToggle').toggleClass('active');
//   $('body').toggleClass('body-push-toleft');
//   $('#theMenu').toggleClass('menu-open');
// });


$('#openBtn').click(function(){

  $('#myModal').modal({show:true});

});


$(".workhover").hover(function() {
    $(this).prev().css({
   'transform' : 'scale(1.2)',
   'transition' : 'all 1s ease-in',
});
}, function() {
    $(this).prev().css({
      'transform' : 'scale(1)',
      'transition' : 'all 1s ease-out',
    });
});

// $('#parallax').mouseParallax({
//   moveFactor: 4 });

var scene = document.getElementById('parallax');
var parallax = new Parallax(scene);


$.stellar({
  horizontalScrolling: false,
  verticalOffset: 40
});




});