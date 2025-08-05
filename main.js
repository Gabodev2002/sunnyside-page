const menuColapse = document.getElementById('menu-colapse')
const btnMenu = document.getElementById('btn-menu')

btnMenu.addEventListener('click', () => {
    menuColapse.classList.toggle('colapse')
    document.body.classList.toggle('sticky')
})



function scrollFunction() {
  const nav = document.getElementById("nav"); 

  if (window.scrollY > 0) { 
    nav.classList.add('scrolled');  
  } else {
    nav.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', scrollFunction); 
