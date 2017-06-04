
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
