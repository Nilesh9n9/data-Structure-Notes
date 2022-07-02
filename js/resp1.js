burger = document.querySelector('.BurgerDS')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
 


burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-resp');
    navbar.classList.toggle('h-resp');
    
})