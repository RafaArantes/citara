  function htmlDomManipulation(whatis, forwhom, innovate, subtitle){
    $(".whatis").html(whatis);
    $(".forwhom").html(forwhom);
    $(".innovate").html(innovate);
    console.log(whatis)
    $(".prodheader").html(subtitle);
  }

  function cssDomManipulation(url, color) {
    $(".smartheader").css("background-image", "url('" + url + "')" );
    $(".prod").css("background-color", color);
    $(".prodheadersub").css("color", color);
  }

  function testimonialState(value){
    $('.testimonal').eq(value).addClass('active')
  }

  const executor = {
    ".next": next,
    ".prev": prev
  }


  function prev(test){
    test == 0 ? testimonialState(5) : testimonialState(test - 1)
  }

  function next(test){
    test == 5 ? testimonialState(0) : testimonialState(test + 1)
  }

  $(function(){

    productsArray.forEach(x => {
      const obj = x.product
      appendable(obj)
    })

    teamMembers.forEach(x => {
      const member = x.membro;
      console.log(member);
      appendableMembers(member)
    })

    let mouseIsOver = true

    $('body').on( 'mouseover', '.testimonal', function(){
      mouseIsOver = false
    })

    $('body').on( 'mouseout', '.testimonal', function(){
      mouseIsOver = true
    })

    setInterval(function () {
      if(mouseIsOver) {
        const testimonal = $('.testimonal.active').index('');
        $('.testimonal').removeClass('active')
        executor['.prev'](testimonal)
      }
    }, 5000);

    $('body').on('click', '.testimonialButton', function() {
      const elementDom = $(this).attr('class').split(' ').find(x => x == 'prev' || x == 'next')
      const elementDomClass = '.'+elementDom
      const testimonal = $('.testimonal.active').index('');
      console.log(testimonal);

      $('.testimonal').removeClass('active')
      executor[elementDomClass](testimonal)
    })

    $('body').on('click', '.product', function(){
      const keyValue        = $(this).attr('class').split(' ')[1]
      const productToRender = productsArray.find(x => x.product.class == keyValue)
      const productPage = productToRender.product.prodpage

      htmlDomManipulation(productPage.whatis, productPage.forwhom, productPage.innovate, productPage.subtitle)
      cssDomManipulation(productPage.url, productPage.bgcolor)
      goToProducts()
    })

    $('.returnToHome').click(function(){
      goToHome()
    })

    $('.ballhr').click(function(){
      $('.ballhr').removeClass('active')
      $(this).addClass('active')
    })

    $('.testimonal:first').addClass('active')

  })
