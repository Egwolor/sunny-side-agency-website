let openNav=document.querySelector('.menu-btn');
let closeNav=document.querySelector('.close-btn');
let navBar=document.querySelector('.nav-items');
let bodY=document.querySelector('.main-section');
let testimonials= document.querySelectorAll('.client');





 
openNav.addEventListener('click', ()=>{
    navBar.style.width='60%';
   bodY.style.blur='5px'
}) 
closeNav.addEventListener('click', ()=>{
    navBar.style.width='0%';
})