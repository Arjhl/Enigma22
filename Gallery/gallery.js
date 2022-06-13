const hamburger=document.querySelector('.hamburger');
const menuActive=document.querySelector('.menu-main');
const menuUlActive=document.querySelector('.nav-l');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('is-active');
    menuActive.classList.toggle('menu');
    menuUlActive.classList.toggle('navlists');
})

