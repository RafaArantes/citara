function appendable(obj){
  $(".pdctholder").append(
    '<div class="product ' +
      obj.class   +
      '"><div class="subject"><div class="icon"></div><div class="textsubject font1 fw500">' +
      obj.subject +
      '</div></div><div class="producttitle font1 fw700 tt">' +
      obj.title   +
      "</div></div>"
  );
}

function appendableMembers(obj) {
  $("#testimonialscreen").append('<div class="testimonal"><div style="background-image: url(' +
    obj.avatar +
    ')" class="avatar"><div class="names"><div class="membername fw700 font1 tt">' +
    obj.nome   +
    '</div><div class="memberposition font1 fw500 tt">' +
    obj.cargo  +
    '</div></div></div><div class="usertestimonial"><h2 class="usermajor font1 fw500 tt">WE ARE A INNOVATIVE EXPERIMENT</h2><p style="min-height: 120px;" class="userquote font1 fw500">' +
    obj.texto  +
    '</p><div class="directional"><div class="testimonialButton prev tac font1 fw500">PREV</div><div class="testimonialButton next tac font1 fw500">NEXT</div></div></div></div>'
  );
}
