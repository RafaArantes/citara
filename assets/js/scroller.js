$(function() {
  let scrollTo = true;

  function classRemoval() {
    $(".screen").removeClass("animate-in-bottom");
    $(".screen").removeClass("animate-in-top");
    $(".screen").removeClass("animate-out");
    $(".screen").removeClass("animate-out-bottom");
  }

  function animationHandler(className, animationClass) {
    setTimeout(() => {
      windowScroller(className, animationClass);
    }, 1000);
    setTimeout(() => {
      scrollTo = true;
    }, 1800);
  }

  function whiteScroller(){
    $('.home .ball').addClass('white')
    $('.home .line').addClass('linewhite')
  }

  function blackScroller(){
    $('.home .ball').removeClass('white')
    $('.home .line').removeClass('linewhite')
  }

  const curriedScrollExecuter = (screenOutDirection, screenActiveObject, screenToEnterObject, screenInDirection) => () => {
    scrollTo = false;
    scrollEventOut(screenOutDirection, screenActiveObject);
    animationHandler(screenToEnterObject, screenInDirection);
    let nameAttr = screenToEnterObject.attr('class').split(" ")[0]
    let ballToAct = '.ball[name='+nameAttr+']'
    ballScrollItem(ballToAct)

    screenToEnterObject.index() == 3 ? whiteScroller() : blackScroller()
  }

  const letter = result => {
    $('.pdctholder').html('')
    result.forEach(x => appendable(x.product))
  }

  function filterByProductSubject(array, equals){
    const result = array.filter(x => x.product.subject == equals)

    if(equals.length > 0) letter(result)
    else letter(equals)
  }

  function scrollEventOut(whereToScroll, index) {
    classRemoval();
    let provideEq = $(".screen").eq(index);
    let classNames = "." + provideEq.attr("class").split(" ")[0];
    $(classNames).addClass(whereToScroll);
  }

  function scrollEvent(whereToScroll, index) {
    classRemoval();
    $(".screen.screenactive").removeClass("screenactive");
    $(".screen" + index).addClass("screenactive");
    $(".screen" + index).addClass(whereToScroll);

  }

  function windowScroller(toGo, whereToScroll) {
    let classNames = "." + toGo.attr("class").split(" ")[0];
    scrollEvent(whereToScroll, classNames);
  }

  // Ball scroller

  let ballScrollItem = (_this) => {
    $('.ball').removeClass('active')
    $(_this).addClass('active')
  }

  $(".ball").on("click", function() {

    if(scrollTo) ballScrollItem(this)

    const nowIndex = $(".screen.screenactive").index();
    const ballClass = $(this).attr("name");
    const prevIndex = $("." + ballClass).index();
    const eqOfSelectedBall = $(".screen").eq(prevIndex);
    const functionToPerformBall = curriedScrollExecuter("animate-out", nowIndex, eqOfSelectedBall, "animate-in-bottom")
    const conditionalToProduct = $('#productscreen').hasClass('scrollabe')


    if(scrollTo || conditionalToProduct) {
      functionToPerformBall()
       disableProductScroll()
    }
  });


  // Products Sorting

  $('.ctp').on('click', function(){

    const functionToPerformBall = curriedScrollExecuter("animate-out", 1, $('.screen').eq(2), "animate-in-bottom")
    if(scrollTo) functionToPerformBall()

    const productFilter = $(this).attr('name')
    filterByProductSubject(productsArray, productFilter)

  })


  // Mouse Wheel Scroller

  $(window).mousewheel(function(turn, delta) {
    const nowIndex = $(".screen.screenactive").index();
    const nextIndex = $(".screen").eq(nowIndex + 1);
    const prevIndex = $(".screen").eq(nowIndex - 1);

    const scrollDecider = (delta < 0 && nowIndex <= 3 ) ? 0 : (delta > 0) ? 1 : 2
    const scrollStateFilter = scrollTo ? scrollDecider : 2

    const scrollEventChooser = [
      {
        functionToPerform: curriedScrollExecuter("animate-out", nowIndex, nextIndex, "animate-in-bottom")
      },
      {
        functionToPerform: curriedScrollExecuter("animate-out-bottom", nowIndex, prevIndex, "animate-in-top")
      },
      {
        functionToPerform: () => console.log('Already Scrolling')
      }
    ];

    scrollEventChooser[scrollStateFilter].functionToPerform()
  });

  // Product Events

  function enableProductScroll(){
    $('#productscreen').addClass('scrollabe')
    $('.showbtn').html('SHOW LESS')
  }

  function disableProductScroll(){
    $('#productscreen').removeClass('scrollabe')
    $('.showbtn').html('SHOW MORE')
  }

  $('.showbtn').click(function(){
    scrollTo = !scrollTo
    scrollTo ? disableProductScroll() : enableProductScroll()
    letter(productsArray)
  })

  function ifIsMobile() {
    scrollTo = false
    $('.screen').removeClass('screenactive')
    $('#productscreen').addClass('scrollabe')
    $('.showbtn').hide()
  }

  function windowSize(){
    window.innerWidth < 821 ? ifIsMobile() : scrollTo = true
  }
  console.log(window.innerWidth)
  windowSize()

  window.onresize = function() {
    windowSize()
  }
});
