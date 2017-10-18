scrollTo = true;

window.onload = function()
{

    $('.home .balls .ball').eq('0').click();
}
$(function()
{
    $('.hero, .hiw, .products, .contactsection').mousemove(function(e)
    {
        var amountMovedX = (e.pageX * -1 / 29);
        var amountMovedY = (e.pageY * -1 / 23);
        $('body').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });

    $('.testimonials').mousemove(function(e)
    {
        var amountMovedX = (e.pageX * -1 / 40);
        var amountMovedY = (e.pageY * -1 / 35);
        $('.testimonials').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });
    $('.prod').mousemove(function(e)
    {
        var amountMovedX = (e.pageX * -1 / 40 + 900);
        var amountMovedY = (e.pageY * -1 / 35 + 130);
        $('.prod').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });

    $(window).scroll(function()
    {
        scroll = $(window).scrollTop();
        minus = $('.testimonials').offset().top;
        both = scroll - minus;
        userparalax = both / 3 + 180;
        if (scroll > 0)
        {
            $('.mousepop').fadeOut();
        }
        else
        {
            $('.mousepop').fadeIn();
        }
    })

    $('.smartenergy').click(function()
    {
        $('.home').removeClass('activepage')
        $('.prod').addClass('activepage')
        $('body').css('overflowY', 'visible')
        $('.menuitem').removeClass('active')
        $('.productsmenu').addClass('active')
    })

    $('.main, .citarahiw, .productsmenu, .teamembers, .contact').click(function()
    {
        $('.prod').removeClass('activepage')
        $('.home').addClass('activepage')
        $('.menuitem').removeClass('active')
        $(this).addClass('active')
        $('body').css('overflowY', 'hidden')
    })
    var $root = $('html, body');
    var url2 = window.location.href;
    var spliter2 = url2.split('#')[1];
    $('.ball').removeClass('screenactive')
    $('.screen').removeClass('screenactive');
    $('.' + spliter2 + '').addClass('screenactive');

    $('.ballhr').click(function()
    {
        $('.ballhr').removeClass('active')
        $(this).addClass('active')
    })

    $('.ball, .menuitem').click(function()
    {

        setTimeout(function()
        {
            var url = window.location.href;
            var spliter = url.split('#')[1];
            $('.screen').removeClass('screenactive');
            $('.' + spliter + '').addClass('screenactive');
        }, 1100);
        $('.ball').removeClass('screenactive')
        $(this).addClass('screenactive')
        var ball = $(this).attr('class').split(' ')[0];
        var href = $.attr(this, 'href');

        $root.animate(
            {
                scrollTop: $(href).offset().top
            }, 1000,
            function()
            {
                window.location.hash = href;
            });
        scrollTo = true;
        return false;

    });
    $(document).on('mousewheel', function(e)
    {

        if (scrollTo === true)
        {
            scrollTo = false;

            if ($('.home').hasClass('activepage') && $(window).width() > 1128)
            {

                var url = window.location.href;
                if (e.originalEvent.wheelDelta / 120 > 0)
                {
                    $(window).off("scroll")
                    var url = window.location.href;
                    var spliter = url.split('#')[1];
                    var sibling = $('div[href="#' + spliter + '"].screenactive').index();
                    $('.balls').children().eq(sibling - 2).click()
                    console.log(sibling);
                }
                else
                {
                    $(window).off("scroll")
                    var url = window.location.href;
                    var spliter = url.split('#')[1];
                    var sibling = $('div[href="#' + spliter + '"].screenactive').index();
                    $('.balls').children().eq(sibling + 2).click()
                    console.log(sibling);
                }

            }
        }
    });

    $('.lateral-responsive-menu').on('click', function()
    {
        $('.lateral-menu').toggleClass('activemenu');
    })
})