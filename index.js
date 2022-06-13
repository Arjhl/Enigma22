const hamburger=document.querySelector('.hamburger');
const menuActive=document.querySelector('.menu-main');
const menuUlActive=document.querySelector('.nav-l');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('is-active-schedule');
    menuActive.classList.toggle('menu');
    menuUlActive.classList.toggle('navlists');
})




// Set the date we're counting down to
var countDownDate = new Date("May 27, 2022 0:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Enigma'22 is Live";
  }
}, 1000);

const loader=document.getElementById("loader");

window.addEventListener('load', () => {
    loader.style.display="none";
});

window.addEventListener('scroll', function () {
  let header = document.querySelector(".nav");
  let windowPosition = window.scrollY > 0;
  {
  header.classList.toggle('scrolled', windowPosition);
  }
})

const m26=document.querySelector(".may26");
const m27=document.querySelector(".may27");
const m28=document.querySelector(".may28");
const m29=document.querySelector(".may29");

const event26=document.querySelector(".event6");
const event27=document.querySelector(".event7");
const event28=document.querySelector(".event8");
const event29=document.querySelector(".event9");

m26.addEventListener('click',function(){
  m26.classList.add('active-schedule');
  m27.classList.remove('active-schedule');
  m28.classList.remove('active-schedule');
  m29.classList.remove('active-schedule');
  event26.classList.add('disp');
  event27.classList.remove('disp');
  event28.classList.remove('disp');
  event29.classList.remove('disp');
})


m27.addEventListener('click',function(){
  m26.classList.remove('active-schedule');
  m27.classList.add('active-schedule');
  m28.classList.remove('active-schedule');
  m29.classList.remove('active-schedule');
  event26.classList.remove('disp');
  event27.classList.add('disp');
  event28.classList.remove('disp');
  event29.classList.remove('disp');
})

m28.addEventListener('click',function(){
  m26.classList.remove('active-schedule');
  m27.classList.remove('active-schedule');
  m28.classList.add('active-schedule');
  m29.classList.remove('active-schedule');
  event26.classList.remove('disp');
  event27.classList.remove('disp');
  event28.classList.add('disp');
  event29.classList.remove('disp');
})

m29.addEventListener('click',function(){
  m26.classList.remove('active-schedule');
  m27.classList.remove('active-schedule');
  m28.classList.remove('active-schedule');
  m29.classList.add('active-schedule');
  event26.classList.remove('disp');
  event27.classList.remove('disp');
  event28.classList.remove('disp');
  event29.classList.add('disp');
})

