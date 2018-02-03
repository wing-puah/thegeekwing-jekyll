function loading(){
  let loader = document.getElementById('loader'),
      footer = document.getElementById('site-footer');

  if( !loader ){
    return;
  } else {
    document.getElementById('loader-content').style.display = 'none';
    if( footer ){
      footer.style.display = 'none';
    }
    setTimeout(showPage, 1000);
    console.log ('loader is present');
  }
};

function showPage(){
  let footer = document.getElementById('site-footer');
  
  document.getElementById('loader').style.display = 'none';
  document.getElementById('loader-content').style.display = 'block';
  if( footer ){
    footer.style.display = 'block';
  }
}

document.addEventListener("DOMContentLoaded", loading);
