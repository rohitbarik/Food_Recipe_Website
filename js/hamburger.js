burger = document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList = document.querySelector('.nav-list')



burger.addEventListener('click', ()=>{
    navbar.classList.toggle('nav-h');
    navList.classList.toggle('v-class');
    console.log(navbar.style.color);

});