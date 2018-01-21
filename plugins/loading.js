function loading(){
  var loader = document.getElementById('loader');

  if( !loader ){
    return;
  } else {
    setTimeout(showPage, 1000);
    console.log ('loader is present');
  }
};

function showPage(){
  document.getElementById('loader').style.display = 'none';
  document.getElementById('ptf-content').style.display = 'block';
  document.getElementById('site-footer').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", loading);
