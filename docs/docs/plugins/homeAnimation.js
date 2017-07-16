function homeEdit(){
  var h3row = document.getElementById('w-story'),
      newDiv = document.createElement('div');

  newDiv.className = "cover";
  newDiv.textContent ="";
  var cover = newDiv;
  h3row.parentNode.insertBefore(newDiv, h3row);

  document.addEventListener( 'scroll', function(){
    var visible = isInViewport(h3row) ? startAnim() : console.log("nah");

    function startAnim(){
      cover.classList.add('h3anim');
      setTimeout( function(){ h3row.style.opacity = '1'; }, 1000 );
      prefixedEventListener(newDiv, "AnimationEnd", function(e){
        cover.classList.remove('h3anim');
        cover.classList.add('hide');
        cover.remove();
      });
    }
  });
}

if( windowWidth > 768)
  homeEdit();
