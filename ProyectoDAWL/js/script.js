let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn');
let h5Elements = document.querySelectorAll('h5'); 

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
        h5Elements.forEach((h5) => {
            h5.style.color = 'white';
        });
    }
    else{
        document.body.classList.remove('active');
         h5Elements.forEach((h5) => {
            h5.style.color = 'black';
        });
    }
};

const slider = document.querySelector('.slider');
let slideIndex = 0;

function nextSlide() {
    slideIndex++;
    if (slideIndex >= 5) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function showSlide(index) {
    const slidePosition = -index * 20;
    slider.style.transform = `translateX(${slidePosition}%)`;
}

setInterval(nextSlide, 5000);

showSlide(slideIndex);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
  });
