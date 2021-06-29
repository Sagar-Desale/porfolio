burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')
manus = document.querySelector('.manus')

burger.addEventListener('click',()=>{
  navbar.classList.toggle("nav-height");
  logo.classList.toggle("nav-vis");
  manus.classList.toggle("nav-vis");
})
