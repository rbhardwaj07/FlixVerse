let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

/ search form /
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

/ profile icon /
function menuToggle(){
    const toggleMenu = document.querySelector('.new-menu');
    toggleMenu.classList.toggle('new-active');
    toggleMenu.classList.toggle('d-active');
}

/ footer /
document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
  if(!entry.classList.contains('active')) {
      document.querySelector('.feedback li.active').classList.remove('active');
      entry.classList.add('active');
  }
  e.preventDefault();
}));

