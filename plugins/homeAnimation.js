(function(){

  var img = new Image(),
      portrait = document.getElementById('portrait'),
      canvas = portrait.getContext('2d'),
      count = 0,
      animate = setInterval(glitch,150);

  img.src = 'http://res.cloudinary.com/thegeekwing/image/upload/home/wing_image_cover.jpg';
  img.onload = function() {
    draw(this);
    animate;
  };

  // document.getElementById('ptrt-row').addEventListener('mouseenter', function(){
  //   clearInterval(animate);
  //   canvas.clearRect(0,0,canvas.width, canvas.height);
  //   draw(img);
  // });

  function draw(cimage) {
    portrait.setAttribute("width", cimage.width);
    portrait.setAttribute("height", cimage.height);
    canvas.drawImage(cimage,0,0);
  }

  function glitch(){
    var verticalSlices = Math.round(img.height / 20);
    var maxHorizOffset = 5;
    for (var i = 0; i < verticalSlices; i++)  {
      var horizOffset = getRandom(-Math.abs(maxHorizOffset), maxHorizOffset);
      canvas.drawImage(img, 0, i * verticalSlices, img.width, i * verticalSlices + verticalSlices, horizOffset, i * verticalSlices, img.width, i * verticalSlices + verticalSlices);
    }
  }
})();
