function revealContainer(){

  $('.vert-carousel').parent().delay(200).animate({
    width: '1%'
  }, 500, function(){
      $('.vert-carousel').append( $('.vert-carousel li:nth-child(1)') );
  });

  var elFullWidth = $('.vert-carousel').outerWidth();
  $('.vert-carousel').parent().delay(400).animate({
    width: elFullWidth + 'px'
  }, 500);

}

setInterval( revealContainer, 2000 );
