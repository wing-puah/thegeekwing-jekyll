/*** http://callmenick.com/post/listen-for-css-animation-events-with-javascript
prefixer helper function ***/

var pfx = ["webkit", "moz", "MS", "o", ""]; // for animation- based callback
function prefixedEventListener(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
}

var wdw = window,
    doc = document,
    eLement = doc.documentElement,
    bdyTag = doc.getElementsByTagName('body')[0],
    windowWidth = wdw.innerWidth||eLement.clientWidth||bdyTag.clientWidth,
    windowHeight = wdw.innerHeight||eLement.clientHeight||bdyTag.clientHeight;

function isInViewport(el){ //script will return false when el is out of viewport
  var posFromTop = el.getBoundingClientRect().top,
      posFromBottom = el.getBoundingClientRect().bottom;

  return ( posFromTop - windowHeight <= 0 && posFromBottom >=0 ); //return bool
}

function scrollTo(el){ //script will return true even when el is out of viewport
  var posFromTop = el.getBoundingClientRect().top;

  return ( posFromTop - windowHeight <= 0 ); //return bool
}

const nav = document.getElementById('navSub');

function navCross(){
  var newSpan = document.createElement('span');

  newSpan.setAttribute('id', 'cross');
  newSpan.innerText = 'X';

  if (window.innerWidth < 650) {
    nav.insertBefore(newSpan, nav.childNodes[0]);
  };
};
