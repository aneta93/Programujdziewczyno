'use strict'
document.addEventListener('DOMContentLoaded', function() {

  var forDropdown = document.querySelector('.for-dropdown');
  console.log('forDropdown');

  var menu = document.querySelector('.dropdown');
  console.log('menu');

  forDropdown.addEventListener('mouseover', function() {
  menu.style.display = 'block';
  });

  forDropdown.addEventListener('mouseout', function() {
  menu.style.display = 'none';
  });

//zad 2
  var buttons = document.querySelectorAll('.read-more');
  console.log(buttons);

  var wiecej = document.querySelectorAll('.more');
  console.log(wiecej);

  console.log(buttons[0].previousElementSibling);

  var this = document.querySelectorAll(buttons);
  console.log(this);

  buttons[0].addEventListener('click', function() {
    console.log(this);
  });

});



  //  function showMenu(){
  //    console.log('showMenu')
  //  }
   //
  //  document.addEventListener('mouseover', showMenu);
