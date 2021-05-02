$(document).ready(function(){
    //header select option
    $('.country_selet select').click(function(){
        $('.fa-angle-up').toggle();
    });
    $('.country_selet select').click(function(){
        $('.fa-angle-down').toggle();
    });

    /*sticky menu*/
    $(window).on('scroll', function(){
          if($(this).scrollTop() >300){
            $('.header-bottom').addClass('sticky_nav');
          }else{
            $('.header-bottom').removeClass('sticky_nav');
          }
    });

    /*scroll to button*/
    $(window).on('scroll', function(){
          if($(this).scrollTop() > 600){
            $('.scroll_top span').fadeIn();
          }else{
            $('.scroll_top span').fadeOut();
          }
    });
    $('.scroll_top span').click(function(){
        $('html,body').animate({scrollTop:0})
    });

    /*mixitup for latest product*/
    var mix = mixitup('.category_product');

});