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
    $(".smartenergy").click(function()
    {
        $(".home").removeClass("activepage"), $(".prod").addClass("activepage"), $("body").css("overflowY", "visible"), $(".menuitem").removeClass("active"), $(".productsmenu").addClass("active")
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
        if (!0 === scrollTo && (scrollTo = !1, $(".home").hasClass("activepage"), $(window).width() > 1128), !$('body').hasClass('scrollabe') )
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
    $('.showbtn').on('click', function(){
        $('body').addClass('scrollabe');
    })
});