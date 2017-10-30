(function(){
  var workRow = document.getElementById('tg-row'),
      workItems = document.getElementsByClassName('work-item'),
      itemsLength = workItems.length,
      count = 0;

  function makeItemSquare(elem){
    var itemPara = elem.getElementsByTagName('div')[0].getElementsByTagName('p')[0];

    elem.classList.remove('sm-round');
    elem.classList.add('sm-square');
    itemPara.classList.remove('sm-d-none');
  }

  function makeItemRound(elem){
    var itemPara = elem.getElementsByTagName('div')[0].getElementsByTagName('p')[0];

    elem.classList.remove('sm-square');
    elem.classList.add('sm-round');
    itemPara.classList.add('sm-d-none');
  }

  function loopSquareAndCircles(){
    count = count < itemsLength - 1 ? count+1 : 0;
    var newCount = count,
        toBeRound = newCount == 0 ? itemsLength - 1 : count-1;

    makeItemRound(workItems[toBeRound]);
    makeItemSquare(workItems[count]);
    // console.log(newCount + ', ' + count)
    // console.log(workItems[toBeRound]);
    // console.log('I am looping: ' + count + ' This is to be round: ' + toBeRound);
  }

  workAnimation = setInterval( loopSquareAndCircles, 2000);

})();
