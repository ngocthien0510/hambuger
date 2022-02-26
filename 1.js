let searchBtn=document.querySelector('#search-btn');
let searForm=document.querySelector('.header .search-form');

searchBtn.onclick=()=>{
    searchBtn.classList.toggle('fa-times')
    searForm.classList.toggle('active')
    menuBtn.classList.remove('fa-times')
    navabr.classList.remove('active')
}

let menuBtn=document.querySelector('#menu-btn');
let navabr=document.querySelector('.header .navbar');

menuBtn.onclick=()=>{
    menuBtn.classList.toggle('fa-times')
    navabr.classList.toggle('active')
    searchBtn.classList.remove('fa-times')
    searForm.classList.remove('active')
    
}  

window.onscroll=()=>{
    searchBtn.classList.remove('fa-times')
    searForm.classList.remove('active')
    menuBtn.classList.remove('fa-times')
    navabr.classList.remove('active')
}