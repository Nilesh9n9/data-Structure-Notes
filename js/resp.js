burger = document.querySelector('.Burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
 


burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})