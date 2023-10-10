const burger = document.querySelector('.burger');
const navBar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');
const rightNav = document.querySelector('.rightNav');



burger.addEventListener('click', ()=> 
{
    rightNav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navBar.classList.toggle('h-nav-resp')
})


