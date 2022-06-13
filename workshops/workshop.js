const hamburger=document.querySelector('.hamburger');
const menuActive=document.querySelector('.menu-main');
const menuUlActive=document.querySelector('.nav-l');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('is-active');
    menuActive.classList.toggle('menu');
    menuUlActive.classList.toggle('navlists');
})

const open1=document.querySelector('.open');
const modal1=document.querySelector('.modal');
const close1=document.querySelector('.close');

open1.addEventListener('click',()=>{
  modal1.classList.add('show');
});

close1.addEventListener('click',()=>{
  modal1.classList.remove('show');
});
