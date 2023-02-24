$(document).ready(function () {
  AOS.init();

    let scrollNum = 300;
    $(window).on('scroll' , function () { 
        if($(this).scrollTop() > scrollNum){
            $('.arrow-btn').show()
        }else{
            $('.arrow-btn').hide()
        }
     })
     $('.arrow-btn').on( 'click',(function (e) { 
        e.preventDefault();
        $('html , body').animate({
            scrollTop : 0
        } , 200)
      }))
    let seeMore = $('.see-more');
    seeMore.on('click' , ()=>{
        seeMore.hide();
    })
    $(document).on('scroll' , ()=>{
      if ($('.header').offset().top > 300){
        $('.header').css('cssText' , 'background-color : rgba(255, 255, 255, 0.782) !important; border-bottom : 1px solid #007bff')
      }else{
        $('.header').css('cssText' , 'background-color : white !important ; border-bottom : none')
      }
    })
    $('.navbar-nav .nav-link').on('click' , function (e) { 
        $('.navbar-nav a').parent().
        children('a').
        removeClass('active');
        $(this).addClass('active');
      })

      $('.navbar-nav > li:not(:first-of-type,:nth-of-type(7)) a').on('click'
      , function () { 
          $('html , body').animate({
              scrollTop:(($('.' + $(this).text()).offset().top) - $('.header').height())
          } , 500, 'linear')
      })
});