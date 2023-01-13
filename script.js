const menu = document.querySelector('.menu');
const menuBar = document.querySelector('.menu-bar');

menuBar.addEventListener('click', function(){
    menu.classList.toggle('active')
})


const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    const windowPosition = window.scrollY > 0 ;
    navBar.classList.toggle('scrolling-active', windowPosition);
    menu.classList.remove('active')
})