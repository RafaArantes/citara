window.onload = function() {

    $('.home .balls .ball').eq('0').click();
}
$(function(){
  $('.hero, .hiw, .products, .contactsection').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 29);
    var amountMovedY = (e.pageY * -1 / 23);
    $('body').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });

  $('.testimonials').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 40);
    var amountMovedY = (e.pageY * -1 / 35);
    $('.testimonials').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });
  $('.prod').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 40 + 900);
    var amountMovedY = (e.pageY * -1 / 35 + 130);
    $('.prod').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });
  $(window).scroll(function(){
    scroll = $(window).scrollTop();
    minus = $('.testimonials').offset().top;
    both = scroll - minus;
    userparalax = both / 3 + 180;
    if(scroll >= $('.testimonials').scrollTop()){
      $('.avatar').css('margin-top', '-' + both / 4 + 'px')
      $('.usertestimonial').css('margin-top', '-' + userparalax  + 'px')
    }
  });

  $(window).scroll(function(){
    scroll = $(window).scrollTop();
    minus = $('.hero').offset().top;
    both = scroll - minus;
    userparalax = both / 3 + 180;
    if(scroll >= $('.hero').scrollTop()){
      $('.herosubtitle, .titleimg, .herosub').css('margin-top', '-' + both / 4 + 'px')
    }
  });

  $(window).scroll(function(){
    scroll = $(window).scrollTop();
    minus = $('.hiw').offset().top;
    both = scroll - minus;
    userparalax = both / 3 + 180;
    if(scroll >= $('.hiw').scrollTop()){
      $('.hiwtitle, .hiwsub').css('margin-top', '-' + both / 4 + 'px')
      $('.notebook').css('margin-top', '-' + both / 3 + 'px').css('margin-bottom', + both / 3 + 'px')
    }
  });

  $(window).scroll(function() {
    if(scroll > 0){
      $('.mousepop').fadeOut();
    }
    else {
      $('.mousepop').fadeIn();
    }
  })

  $('.smartenergy').click(function(){
    $('.home').removeClass('activepage')
    $('.prod').addClass('activepage')
    $('.menuitem').removeClass('active')
    $('.productsmenu').addClass('active')
  })

  $('.main, .citarahiw, .teamembers, .contact').click(function(){
    $('.home').addClass('activepage')
    $('.prod').removeClass('activepage')
    $('.menuitem').removeClass('active')
    $('.main').addClass('active')
  })
  var $root = $('html, body');
  var url2 = window.location.href;
  var spliter2 = url2.split('#')[1];
  $('.ball').removeClass('screenactive')
  $('.screen').removeClass('screenactive');
  $('.' + spliter2 + '').addClass('screenactive');

  $('.ballhr').click(function () {
    $('.ballhr').removeClass('active')
    $(this).addClass('active')
  })

  $('.ball, .menuitem').click(function() {
    setTimeout(function () {
      var url = window.location.href;
      var spliter = url.split('#')[1];
      $('.screen').removeClass('screenactive');
      $('.' + spliter + '').addClass('screenactive');
    }, 1100);
    $('.ball').removeClass('screenactive')
    $(this).addClass('screenactive')
    var ball = $(this).attr('class').split(' ')[0];
    var href = $.attr(this, 'href');

    $root.animate({
      scrollTop: $(href).offset().top}, 1000,
      function () {
          window.location.hash = href;
      });
      return false;

  });
  $(document).on('mousewheel', function(e) {
    if($('.home').hasClass('activepage')){
      setTimeout(function () {
        var url = window.location.href;
        if(e.originalEvent.wheelDelta / 120 > 0) {
          var url = window.location.href;
          var spliter = url.split('#')[1];
          var sibling = $('div[href="#'+ spliter +'"].screenactive').index();
          $('.balls').children().eq(sibling - 2).click()
          console.log(sibling);

        } else {
          var url = window.location.href;
          var spliter = url.split('#')[1];
          var sibling = $('div[href="#'+ spliter +'"].screenactive').index();
          $('.balls').children().eq(sibling + 2).click()
          console.log(sibling);
        }

      }, 200);
    }
  });

})
