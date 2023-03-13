// Responsive Menu - Dropdown
const body = document.body;
const navBtn = document.getElementById('nav-btn');
const bar = document.getElementById('bar');
const navLinks = document.getElementById('nav-links');

// Prevents the focus state from activating
navBtn.addEventListener('mousedown', function (e) {
  e.preventDefault();
});

navBtn.addEventListener('click', function(){
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
});