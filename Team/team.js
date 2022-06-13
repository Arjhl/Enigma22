const hamburger=document.querySelector('.hamburger');
const menuActive=document.querySelector('.menu-main');
const menuUlActive=document.querySelector('.nav-l');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('is-active');
    menuActive.classList.toggle('menu');
    menuUlActive.classList.toggle('navlists');
})


// const header = document.querySelector(".nav");
// const sectionOne = document.querySelector(".footer");

// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);


// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 250) {
//           $(".nav").css("background-color" , "#c0cad3");
//         }
  
//         else{
//             $(".nav").css("background" , "transparent");  	
//         }
//     })
//   })