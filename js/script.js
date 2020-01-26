$(function() {

// ------ トップへ戻るボタン+メニュー変化 ------
    var windowHeight = $(window).height();
 
  $(window).on('scroll',function() {
    var scroll = $(this).scrollTop();
    var pos1 = $('#aboutMe').offset().top;
    var pos2 = $('#profile').offset().top;
    var pos3 = $('#works').offset().top;
    var pos4 = $('#contact').offset().top;
 
      if( scroll > 0 ) {
        $('#top_btn').slideDown(200);
      } else {
        $('#top_btn').slideUp(200);
        $('.btn_box').removeClass('position');
      }
    
      if( scroll >= pos4 - windowHeight + windowHeight/2 ) {
        $('.btn_box').removeClass('position');
        $('.menu4').addClass('position');  
      } else if ( scroll >= pos3 - windowHeight + windowHeight/2 ) {
        $('.btn_box').removeClass('position');
        $('.menu3').addClass('position');  
      } else if ( scroll >= pos2 - windowHeight + windowHeight/2 ) {
        $('.btn_box').removeClass('position');
        $('.menu2').addClass('position');  
      } else if ( scroll >= pos1 - windowHeight + windowHeight/2 ) {
        $('.btn_box').removeClass('position');
        $('.menu1').addClass('position');
      } else {
        $('.btn_box').removeClass('position');
      }

      return false;

  });


// ------ Worksの説明ボックス表示 ------
    var cards = $('#detail_box').find('article');

  $('.pic').on('click',function() {

    var id = $(this).parent().attr('id');
    var actCard = $('#detail_box').children('.' + id);
    var lastCard = $(cards).filter('.open');

    if ( lastCard == undefined ) {
      $(actCard).slideDown(500).addClass('open');
    } else if ( actCard.get(0) === lastCard.get(0) ) {
      $(lastCard).slideUp(500).removeClass('open');
    } else {
      $.when ($(lastCard).slideUp(500).removeClass('open')
      ).done (function(){
        $(actCard).slideDown(500).addClass('open');
      });
    }

    return false;
  });
});
