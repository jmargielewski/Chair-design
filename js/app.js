document.addEventListener("DOMContentLoaded", function(){

  // submenu
  var showMenu= document.querySelectorAll('.menu > ul > li');

  [...showMenu].forEach(function(li){
    li.addEventListener('mouseover', function (event){
      var submenus= this.firstElementChild.nextElementSibling;
      if(submenus){
        submenus.style.display='block';
      }
    });
  });

  [...showMenu].forEach(function(li){
    li.addEventListener('mouseout', function (event){
      var submenus= this.firstElementChild.nextElementSibling;
      if(submenus){
        submenus.style.display='none';
      }
    });
  });



  // slider
  var next= document.querySelector('.markRight');
  var prev= document.querySelector('.markLeft');
  var imgs= [...document.querySelectorAll('.left li')];
  var counter= 0;
  console.log(imgs);
  console.log(next);
  console.log(prev);

  imgs[counter].classList.add('visible');

  next.addEventListener("click", function (event){
    imgs[counter].classList.remove("visible");
    if (counter >= imgs.length-1) {
      counter =- 1;
    }
    counter++;
    imgs[counter].classList.add("visible");
  });

  prev.addEventListener("click", function(event){
    imgs[counter].classList.remove("visible");
    counter--;
    if (counter < 0) {
      counter = imgs.length-1;
    }
    imgs[counter].classList.add("visible");
  });




}); //DOM
