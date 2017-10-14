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

var wiecej = document.querySelectorAll('.btn btn-default read-more');
console.log('wiecej');

console.log(wiecej[0].previousElementSibling);
   });



  //  function showMenu(){
  //    console.log('showMenu')
  //  }
   //
  //  document.addEventListener('mouseover', showMenu);
