$(function(){

  $('#openBtn').click(function(){
    $('#myModal').modal({show:true});
  });

  var demoVideo = document.getElementById("demo-video");
  $('#demo-modal-link').click(function(){
    $('#demo-modal').modal('show');
    demoVideo.play();
  });

  var amexVideo = document.getElementById("amex-video");
  $('#amex-modal-link').click(function(){
    $('#amex-modal').modal('show');
    amexVideo.play();
  });

  var hardcoreVideo = document.getElementById("hardcore-video");
  $('#hardcore-modal-link').click(function(){
    $('#hardcore-modal').modal('show');
    hardcoreVideo.play();
  });

  var hamburgerVideo = document.getElementById("hamburger-video");
  $('#hamburger-modal-link').click(function(){
    $('#hamburger-modal').modal('show');
    hamburgerVideo.play();
  });

  var idahoanVideo = document.getElementById("idahoan-video");
  $('#idahoan-modal-link').click(function(){
    $('#idahoan-modal').modal('show');
    idahoanVideo.play();
  });

  var midasVideo = document.getElementById("midas-video");
  $('#midas-modal-link').click(function(){
    $('#midas-modal').modal('show');
    midasVideo.play();
  });

  var fluzoneVideo = document.getElementById("fluzone-video");
  $('#fluzone-modal-link').click(function(){
    $('#fluzone-modal').modal('show');
    fluzoneVideo.play();
  });

  var directTvVideo = document.getElementById("direct-tv-video");
  $('#direct-tv-modal-link').click(function(){
    $('#direct-tv-modal').modal('show');
    directTvVideo.play();
  });

  var cbsFantasyVideo = document.getElementById("cbs-fantasy-video");
  $('#cbs-fantasy-modal-link').click(function(){
    $('#cbs-fantasy-modal').modal('show');
    cbsFantasyVideo.play();
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

  var scene = document.getElementById('parallax');
  var parallax = new Parallax(scene);


  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 40
  });

  // **** logo image ****

  var logoimage = document.getElementById("logoimage");
  var headerwrap = document.getElementById("headerwrap");
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    logoimage.style.marginLeft = 'auto';
    logoimage.style.marginRight = 'auto';
    logoimage.style.width = '50%';

  } else {
    headerwrap.style.minHeight = '800px';
  }

});