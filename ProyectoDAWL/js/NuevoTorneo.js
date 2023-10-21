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

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    } else{
        document.body.classList.remove('active');
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

// Funciones para el formulario
document.getElementById("torneoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nombreTorneo = document.getElementById("nombreTorneo").value;
    const equipo = document.getElementById("equipo").value;
    const directorTecnico = document.getElementById("directorTecnico").value;
    const pais = document.getElementById("pais").value;

// creacion de una nueva tabla de resultado
    const table = document.getElementById("resultsTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
//creacion de nuevas celdas
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = nombreTorneo;
    cell2.innerHTML = equipo;
    cell3.innerHTML = directorTecnico;
    cell4.innerHTML = pais;
    

});
