const menuColapse = document.getElementById('menu-colapse')
const btnMenu = document.getElementById('btn-menu')
const divContent = document.getElementsByClassName('header-content')

btnMenu.addEventListener('click', () => {
    menuColapse.classList.toggle('colapse')
    document.body.classList.toggle('sticky')
})



function scrollFunction() {
  const nav = document.getElementById("nav"); 

  if (window.scrollY > 0) { 
    nav.classList.add('scrolled'); 
    divContent[0].classList.add('scrolled-content'); 
  } else {
    nav.classList.remove('scrolled');
    divContent[0].classList.remove('scrolled-content')
  }
}
window.addEventListener('scroll', scrollFunction); 
