$(function(){

  function mouseMovement(target, amountMovedX, amountMovedY){
    $(target).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  }

  //Mouse Event Hover
  $('.hero, .hiw, .products, .contactsection').mousemove(function(e){
    //Those values are calculated based on the mousemove over the screen and image size, to create the background animation Event
    mouseMovement('body', (e.pageX * -1 / 29), (e.pageY * -1 / 23))
  });
  $('.testimonials').mousemove(function(e){
    mouseMovement('.testimonials', (e.pageX * -1 / 40), (e.pageY * -1 / 35))
  });
  $('.prod').mousemove(function(e){
    mouseMovement('.prod', (e.pageX * -1 / 40 + 900),(e.pageY * -1 / 35 + 130))
  });





})
