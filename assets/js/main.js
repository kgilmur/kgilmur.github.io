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


$('#parallax').mouseParallax({
  moveFactor: 4 });



$.stellar({
  horizontalScrolling: false,
  verticalOffset: 40
});





});