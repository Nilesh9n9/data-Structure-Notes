burger = document.querySelector('.BurgerPQ')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
 


burger.addEventListener('click', ()=>{
    navList.classList.toggle('V-resp');
    navbar.classList.toggle('H-resp');
    
})