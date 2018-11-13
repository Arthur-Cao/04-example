var index = 1;

// hide all sliders
function hideAll(){
  var sliders = document.getElementsByClassName('slider');
  for (var i = 0; i < sliders.length; i++) {
    sliders[i].style.display= 'none';
  }
}

// change dot's active status
function changeActive(n){
  var allDots = document.getElementsByClassName('dots');
  for (var i = 0; i < allDots.length; i++) {
    allDots[i].className = allDots[i].className.replace(' active', '');
  }
  allDots [n-1].className +=' active';
}

// click dot to jump to different slide
function go(n){
 var sliders = document.getElementsByClassName('slider');
 hideAll();
 sliders[n-1].style.display='block';
 changeActive(n);
 index = n;
}


// click arrow to jump different slide
function page(num){
  if(num == -1){
    index--;
    if(index<1){
      index = 3;
    }
  }else{
    index++;
    if(index>3){
      index = 1;
    }
  }
  go(index);
}
