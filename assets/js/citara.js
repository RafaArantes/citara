scrollTo = !0, scrollClick = !0, window.onload = function()
{
    $(".balls").children().eq(0).click()
},

$(function(){
    $(".hero, .hiw, .products, .contactsection").mousemove(function(e)
    {
        var o = -1 * e.pageX / 29,
            l = -1 * e.pageY / 23;
        $("body").css("background-position", o + "px " + l + "px")
    }),
    $(".testimonials").mousemove(function(e)
    {
        var o = -1 * e.pageX / 40,
            l = -1 * e.pageY / 35;
        $(".testimonials").css("background-position", o + "px " + l + "px")
    }),
    $(".prod").mousemove(function(e)
    {
        var o = -1 * e.pageX / 40 + 900,
            l = -1 * e.pageY / 35 + 130;
        $(".prod").css("background-position", o + "px " + l + "px")
    }),
    $(window).scroll(function()
    {
        scroll = $(window).scrollTop(), minus = $(".testimonials").offset().top, both = scroll - minus, userparalax = both / 3 + 180, scroll > 0 ? $(".mousepop").fadeOut() : $(".mousepop").fadeIn()
    }),


    $(".main, .citarahiw, .productsmenu, .teamembers, .contact").click(function()
    {
        $(".prod").removeClass("activepage"), $(".home").addClass("activepage"), $(".menuitem").removeClass("active"), $("body").css("overflowY", "hidden")
    });

    var e = $("html, body"),
        o = window.location.href.split("#")[1];

    $(".ball").removeClass("screenactive"), $(".screen").removeClass("screenactive"), $("." + o).addClass("screenactive"), $(".ballhr").click(function()
    {
        $(".ballhr").removeClass("active"), $(this).addClass("active")
    }),

    $(".ball, .menuitem").click(function()
    {
        $('body').removeClass('scrollabe');
        if (!0 === scrollClick)
        {
            scrollClick = !1, setTimeout(function()
            {
                var e = window.location.href.split("#")[1];
                $(".screen").removeClass("screenactive"), $(".menuitem").removeClass("screenactive"), $(".menuitem").removeClass("active"), console.log($("." + e)), $("." + e).addClass("screenactive"), $("." + e).addClass("active"), scrollTo = !0, scrollClick = !0
            }, 1100), $(".ball").removeClass("screenactive"), $(".ball").removeClass("active");
            var o = $.attr(this, "href");
            return e.animate(
            {
                scrollTop: $(o).offset().top
            }, 1e3, function()
            {
                window.location.hash = o
            }), !1
        }
    }),

    $(document).on("mousewheel", function(e)
    {
        if (!0 === scrollTo && (scrollTo = !1, $(".home").hasClass("activepage") && $(window).width() > 1128), !$('body').hasClass('scrollabe') )
        {
            var o = window.location.href;
            if (e.originalEvent.wheelDelta / 120 > 0)
            {
                $(window).off("scroll");
                l = (o = window.location.href).split("#")[1];
                (s = $('div[href="#' + l + '"].screenactive').index()) - 2 < 0 ? scrollTo = !0 : ($(".balls").children().eq(s - 2).click(), $(".menuitem").removeClass("active"), $($(".lateral-ul").children().eq((s - 2) / 2)[0]).addClass("active")), console.log(s)
            }
            else
            {
                $(window).off("scroll");
                var l = (o = window.location.href).split("#")[1],
                    s = $('div[href="#' + l + '"].screenactive').index();
                s + 2 > 8 ? scrollTo = !0 : ($(".balls").children().eq(s + 2).click(), $(".menuitem").removeClass("active"), $($(".lateral-ul").children().eq((s + 2) / 2)[0]).addClass("active")), console.log(s)
            }
        }
    }),

    $(".lateral-responsive-menu").on("click", function()
    {
        $(".lateral-menu").toggleClass("activemenu")
    })
    $.ajax({
    url: 'https://rafaarantes.github.io/citara/assets/js/products.json',
    type: "GET",
    dataType: "json",
    success: function (data) {
      $("body").on('click', ".product" , function()
      {
          var classes = $(this).attr('class');
          var idx = $(this).index('');
          var dinata = classes.split(" ")[1];
          var color = data[idx].product.prodpage.bgcolor;
          console.log(data[idx]);
          $(".home").removeClass("activepage")
          $(".prod").addClass("activepage")
          $("body").css("overflowY", "visible")
          $(".menuitem").removeClass("active")
          $(".productsmenu").addClass("active")
          $(".whatis").html(data[idx].product.prodpage.whatis)
          $(".forwhom").html(data[idx].product.prodpage.forwhom)
          $(".innovate").html(data[idx].product.prodpage.innovate)
          $(".prodheader").html(data[idx].product.prodpage.subtitle)
          $(".smartheader").css("background-image", "url('" + data[idx].product.prodpage.title +"')")
          $(".prod").css("background-color", color )
          $(".prodheadersub").css("color", color )
          
      })
      $.each(data, function(i, products){
        product = products.product;
        $('.pdctholder').append('<div class="product ' + product.class +'"><div class="subject"><div class="icon"></div><div class="textsubject font1 fw500">'+ product.subject +'</div></div><div class="producttitle font1 fw700 tt">'+ product.title +'</div></div>')
      });
    }
    });

    $.ajax({
    url: 'https://rafaarantes.github.io/citara/assets/js/teammembers.json',
    type: "GET",
    dataType: "json",
      success: function (data) {
        $.each(data, function(i, team){
        teamember = team.membro;
        console.log(teamember)
        $("#testimonialscreen").append('<div class="testimonal"><div style="background-image: url(' + teamember.avatar + ')" class="avatar"><div class="names"><div class="membername fw700 font1 tt">' + teamember.nome + '</div><div class="memberposition font1 fw500 tt">' + teamember.cargo + '</div></div></div><div class="usertestimonial"><h2 class="usermajor font1 fw500 tt">WE ARE A INNOVATIVE EXPERIMENT</h2><p style="min-height: 120px;" class="userquote font1 fw500">' + teamember.texto + '</p><div class="directional"><div class="prev tac font1 fw500">PREV</div><div class="next tac font1 fw500">NEXT</div></div></div></div>');
        });
        $('.testimonal:first').addClass('active')
        $('body').on('click', '.next', function() {
          var testimonal = $('.testimonal.active').index('');
          $('.testimonal').removeClass('active')
          if(testimonal == 3){
            $('.testimonal').eq(0).addClass('active')
          }
          else {
            $('.testimonal').eq(testimonal + 1).addClass('active')
          }
        })
        $('body').on('click', '.prev', function() {
          var testimonal = $('.testimonal.active').index('');
          $('.testimonal').removeClass('active')
          if(testimonal == 0){
            $('.testimonal').eq(3).addClass('active')
          }
          
          else {
            $('.testimonal').eq(testimonal - 1).addClass('active')
          }
        })
      }
    });

    $('.showbtn').on('click', function(){
      if ($('body').hasClass('scrollabe')) {
        $('body').removeClass('scrollabe')
        $('.showbtn').html('SHOW MORE')
      }
      else {
        $('body').addClass('scrollabe');
        $('.showbtn').html('SHOW LESS')
      }

    })
    $('body').on('click', '.product', function(){
      classes = $(this).attr('class');
      dinata = classes.split(" ")[1]
      console.log(dinata);
    })
});