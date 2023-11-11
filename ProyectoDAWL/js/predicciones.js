document.addEventListener("DOMContentLoaded", function () {
    // Obtener botones de selección de deportes
    const sportButtons = document.querySelectorAll('.sport-button');
    // Obtener botones de selección de partidos y deportes
    const matchButton = document.getElementById('match-button');
    const allSportsButton = document.getElementById('all-sports-button');
    // Datos de predicciones
    const predictionsData = {
        all: [
            {
                partido: "Real Madrid vs. Barcelona",
                resultado: "2-1",
                tiempo: "90:00",
                predicciones: ["Real Madrid", getRandomEmpateOption(), "Barcelona"]
            },
            {
                partido: "Lakers vs. Celtics",
                resultado: "105-100",
                tiempo: "4to Cuarto",
                predicciones: ["Lakers", getRandomEmpateOption(), "Celtics"]
            },
            {
                partido: "Barcelona vs. Real Madrid",
                resultado: "3-2",
                tiempo: "90:00",
                predicciones: ["Barcelona", getRandomEmpateOption(), "Real Madrid"]
            },
            {
                partido: "Golden State Warriors vs. Los Angeles Lakers",
                resultado: "110-112",
                tiempo: "4to Cuarto",
                predicciones: ["Golden State Warriors", getRandomEmpateOption(), "Los Angeles Lakers"]
            },
            {
                partido: "Manchester United vs. Liverpool",
                resultado: "1-1",
                tiempo: "90:00",
                predicciones: ["Manchester United", getRandomEmpateOption(), "Liverpool"]
            },
            {
                partido: "Boston Celtics vs. Miami Heat",
                resultado: "98-95",
                tiempo: "4to Cuarto",
                predicciones: ["Boston Celtics", getRandomEmpateOption(), "Miami Heat"]
            },
            {
                partido: "Paris Saint-Germain vs. Juventus",
                resultado: "4-1",
                tiempo: "90:00",
                predicciones: ["Paris Saint-Germain", getRandomEmpateOption(), "Juventus"]
            },
            {
                partido: "Chicago Bulls vs. Toronto Raptors",
                resultado: "85-90",
                tiempo: "3er Cuarto",
                predicciones: ["Chicago Bulls", getRandomEmpateOption(), "Toronto Raptors"]
            },
            {
                partido: "Gran Premio de Italia",
                resultado: "N/A",
                tiempo: "Vuelta 20",
                predicciones: ["Hamilton", "Verstappen", "Bottas"]
            },
            {
                partido: "Gran Premio de España",
                resultado: "N/A",
                tiempo: "Vuelta 15",
                predicciones: ["Verstappen", "Hamilton", "Perez"]
            },
            // Agregar más predicciones intercaladas aquí
        ],
        futbol: [
            {
                partido: "Barcelona vs. Real Madrid",
                resultado: "3-2",
                tiempo: "90:00",
                predicciones: ["Barcelona", getRandomEmpateOption(), "Real Madrid"]
            },
            {
                partido: "Manchester United vs. Liverpool",
                resultado: "1-1",
                tiempo: "90:00",
                predicciones: ["Manchester United", getRandomEmpateOption(), "Liverpool"]
            },
            {
                partido: "Bayern Munich vs. Borussia Dortmund",
                resultado: "2-0",
                tiempo: "90:00",
                predicciones: ["Bayern Munich", getRandomEmpateOption(), "Borussia Dortmund"]
            },
            {
                partido: "Paris Saint-Germain vs. Juventus",
                resultado: "4-1",
                tiempo: "90:00",
                predicciones: ["Paris Saint-Germain", getRandomEmpateOption(), "Juventus"]
            },
            {
                partido: "Chelsea vs. Manchester City",
                resultado: "0-2",
                tiempo: "90:00",
                predicciones: ["Chelsea", getRandomEmpateOption(), "Manchester City"]
            },
            {
                partido: "Atletico Madrid vs. AC Milan",
                resultado: "1-0",
                tiempo: "90:00",
                predicciones: ["Atletico Madrid", getRandomEmpateOption(), "AC Milan"]
            },
            {
                partido: "Ajax vs. Inter Milan",
                resultado: "2-2",
                tiempo: "90:00",
                predicciones: ["Ajax", getRandomEmpateOption(), "Inter Milan"]
            },
            {
                partido: "Manchester City vs. Bayern Munich",
                resultado: "3-1",
                tiempo: "90:00",
                predicciones: ["Manchester City", getRandomEmpateOption(), "Bayern Munich"]
            },
            {
                partido: "Liverpool vs. Real Madrid",
                resultado: "1-2",
                tiempo: "90:00",
                predicciones: ["Liverpool", getRandomEmpateOption(), "Real Madrid"]
            },
            {
                partido: "Barcelona vs. PSG",
                resultado: "4-3",
                tiempo: "90:00",
                predicciones: ["Barcelona", getRandomEmpateOption(), "PSG"]
            },
            // Agregar más predicciones de fútbol aquí
        ],
        baloncesto: [
            {
                partido: "Lakers vs. Celtics",
                resultado: "105-100",
                tiempo: "4to Cuarto",
                predicciones: ["Lakers", getRandomEmpateOption(), "Celtics"]
            },
            {
                partido: "Golden State Warriors vs. Los Angeles Lakers",
                resultado: "110-112",
                tiempo: "4to Cuarto",
                predicciones: ["Golden State Warriors", getRandomEmpateOption(), "Los Angeles Lakers"]
            },
            {
                partido: "Boston Celtics vs. Miami Heat",
                resultado: "98-95",
                tiempo: "4to Cuarto",
                predicciones: ["Boston Celtics", getRandomEmpateOption(), "Miami Heat"]
            },
            {
                partido: "Chicago Bulls vs. Toronto Raptors",
                resultado: "85-90",
                tiempo: "3er Cuarto",
                predicciones: ["Chicago Bulls", getRandomEmpateOption(), "Toronto Raptors"]
            },
            {
                partido: "Houston Rockets vs. Brooklyn Nets",
                resultado: "120-115",
                tiempo: "4to Cuarto",
                predicciones: ["Houston Rockets", getRandomEmpateOption(), "Brooklyn Nets"]
            },
            {
                partido: "Denver Nuggets vs. Philadelphia 76ers",
                resultado: "105-100",
                tiempo: "3er Cuarto",
                predicciones: ["Denver Nuggets", getRandomEmpateOption(), "Philadelphia 76ers"]
            },
            {
                partido: "Miami Heat vs. Dallas Mavericks",
                resultado: "112-108",
                tiempo: "4to Cuarto",
                predicciones: ["Miami Heat", getRandomEmpateOption(), "Dallas Mavericks"]
            },
            {
                partido: "Los Angeles Clippers vs. Phoenix Suns",
                resultado: "98-96",
                tiempo: "4to Cuarto",
                predicciones: ["Los Angeles Clippers", getRandomEmpateOption(), "Phoenix Suns"]
            },
            {
                partido: "Toronto Raptors vs. Golden State Warriors",
                resultado: "110-107",
                tiempo: "4to Cuarto",
                predicciones: ["Toronto Raptors", getRandomEmpateOption(), "Golden State Warriors"]
            },
            {
                partido: "Milwaukee Bucks vs. Atlanta Hawks",
                resultado: "120-112",
                tiempo: "4to Cuarto",
                predicciones: ["Milwaukee Bucks", getRandomEmpateOption(), "Atlanta Hawks"]
            },
            {
                partido: "Utah Jazz vs. Indiana Pacers",
                resultado: "102-98",
                tiempo: "4to Cuarto",
                predicciones: ["Utah Jazz", getRandomEmpateOption(), "Indiana Pacers"]
            },
            // Agregar más predicciones de baloncesto aquí
        ],
        formula1: [
            {
                partido: "Gran Premio de Italia",
                resultado: "N/A",
                tiempo: "Vuelta 20",
                predicciones: ["Hamilton", "Verstappen", "Bottas"]
            },
            {
                partido: "Gran Premio de España",
                resultado: "N/A",
                tiempo: "Vuelta 15",
                predicciones: ["Verstappen", "Hamilton", "Perez"]
            },
            {
                partido: "Gran Premio de Mónaco",
                resultado: "N/A",
                tiempo: "Vuelta 30",
                predicciones: ["Leclerc", "Verstappen", "Hamilton"]
            },
            {
                partido: "Gran Premio de Canadá",
                resultado: "N/A",
                tiempo: "Vuelta 25",
                predicciones: ["Hamilton", "Bottas", "Verstappen"]
            },
            // Agregar más predicciones de Fórmula 1 aquí
        ]
    };

    // Obtener el botón de cierre del modal
    const closeModalButton = document.getElementById('close-modal-button');

    // Agregar un manejador de eventos al botón de cierre del modal
    closeModalButton.addEventListener('click', closeBetForm);


    // Llamada inicial para cargar la tabla de todos los deportes al cargar la página
    loadPredictions('all');
    loadTeamOptions('all');  // Agregamos esta línea para cargar las opciones de equipo inicialmente

    // Agregar un manejador de eventos para el cambio de selección de deporte
    document.getElementById('sport').addEventListener('change', function () {
        const selectedSport = this.value;
        loadPredictions(selectedSport);
    });

    // Obtener el botón de apuestas
    const betButton = document.querySelector('.bet-button');

    // Obtener botones adicionales del modal
    const selectMatchButton = document.querySelector('#select-match-button');
    const selectSportButton = document.querySelector('#select-sport-button');

    // Agregar un manejador de eventos para el cambio de selección de deporte
    document.getElementById('sport').addEventListener('change', function () {
        const selectedSport = this.value;
        loadPredictions(selectedSport);
    });

    // Función para cargar predicciones según el deporte seleccionado
    function loadPredictions(selectedSport) {
        const tbody = document.querySelector("#predictions-table tbody");
        tbody.innerHTML = "";

        const selectedPredictions = predictionsData[selectedSport] || [];

        selectedPredictions.forEach(prediction => {
            const row = document.createElement("tr");

            // Crear una cadena con estilos según la predicción
            const predictionHTML = `
            <td>${prediction.partido}</td>
            <td>${prediction.resultado}</td>
            <td>${prediction.tiempo}</td>
            <td>
                ${prediction.predicciones.map(item => {
                // Aplicar color según la predicción
                let colorClass = "";
                switch (item) {
                    case "Ganar":
                        colorClass = "win-prediction";
                        break;
                    case "Perder":
                        colorClass = "lose-prediction";
                        break;
                    case "Empate":
                        colorClass = "draw-prediction";
                        break;
                }
                return `<span class="${colorClass}">${item}</span>`;
            }).join(", ")}
            </td>
        `;

            row.innerHTML = predictionHTML;
            tbody.appendChild(row);
        });

        // Cargar opciones de equipo en el desplegable
        loadTeamOptions(selectedSport);
        // Cargar opciones de partido en el desplegable
        loadMatchOptions(selectedSport);
    }

    // Función para obtener una opción de "Empate" aleatoria
    function getRandomEmpateOption() {
        const empateOptions = ["Ganar", "Empate", "Perder"];
        const randomIndex = Math.floor(Math.random() * empateOptions.length);
        return empateOptions[randomIndex];
    }

    // Agregar un evento de clic a cada botón de deporte
    sportButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedSport = button.getAttribute("data-sport");
            loadPredictions(selectedSport);
        });
    });

    // Agregar un evento de clic al botón de apuestas
    betButton.addEventListener('click', () => {
        // Obtener el deporte actualmente seleccionado
        const selectedSport = getCurrentSelectedSport();

        // Establecer la opción "Todos los deportes" seleccionada
        document.getElementById('sport').value = 'all';

        // Cargar las opciones de equipo y partido para el deporte seleccionado
        loadSportOptions();
        loadTeamOptions(selectedSport);
        loadMatchOptions(selectedSport);

        // Abrir el formulario de apuestas
        openBetForm();
        // Cargar las predicciones para "Todos los deportes" después de abrir el formulario
        loadPredictions('all');
    });

    // Evento de envío del formulario de apuestas
    document.getElementById('bet-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores seleccionados
        const selectedSport = document.getElementById('sport').value;
        const selectedMatch = document.getElementById('match').value;
        const selectedTeam = document.getElementById('team').value;
        const selectedPrediction = document.getElementById('prediction').value;
        const betValue = document.getElementById('bet').value;

        // Mostrar un mensaje con los parámetros seleccionados
        console.log(`Apuesta realizada con éxito:
        Deporte: ${selectedSport}
        Partido: ${selectedMatch}
        Equipo: ${selectedTeam}
        Predicción: ${selectedPrediction}
        Apuesta: ${betValue}`);

        // Lógica para enviar la apuesta al servidor o mostrar un mensaje de éxito.
        alert("¡Apuesta realizada con éxito!");

        // Reiniciar el formulario o cerrar el modal si es necesario.
        // document.getElementById('bet-form').reset(); // Reiniciar el formulario
        closeBetForm(); // Cerrar el modal
    });

    // Agregar un evento de clic al botón de seleccionar partido

    selectMatchButton.addEventListener('click', () => {

        // Obtener el deporte actualmente seleccionado
        const selectedSport = getCurrentSelectedSport();

        // Cargar las opciones de partido para el deporte seleccionado
        loadMatchOptions(selectedSport);

        // Cargar las opciones de equipo para el partido seleccionado
        loadTeamOptions(selectedSport);
    });

    // Función para abrir el formulario de apuestas (modal)
    function openBetForm() {
        const modal = document.getElementById('bet-modal');
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    }

    // Función para cerrar el formulario de apuestas (modal)
    function closeBetForm() {
        const modal = document.getElementById('bet-modal');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    // Función para obtener el deporte actualmente seleccionado
    function getCurrentSelectedSport() {
        const activeButton = document.querySelector('.sport-button.active');
        if (activeButton) {
            return activeButton.getAttribute("data-sport");
        }
        // Devolver el deporte por defecto si no hay ninguno seleccionado
        return 'all';
    }

    // Función para cargar opciones de equipo en el desplegable del modal
    function loadTeamOptions(selectedSport, selectedMatch) {
        const selectTeam = document.getElementById('team');
        const selectedPredictions = predictionsData[selectedSport] || [];

        // Limpiar opciones anteriores
        selectTeam.innerHTML = "";

        // Encontrar las predicciones para el partido seleccionado
        const selectedMatchPredictions = selectedPredictions.find(prediction => prediction.partido === selectedMatch);

        // Filtrar las opciones para incluir solo nombres de equipo
        const teamOptions = selectedMatchPredictions ? selectedMatchPredictions.predicciones.filter(option => !["Ganar", "Perder", "Empate"].includes(option)) : [];

        // Agregar nuevas opciones al desplegable
        teamOptions.forEach(team => {
            const option = document.createElement('option');
            option.value = team;
            option.textContent = team;
            selectTeam.appendChild(option);
        });
    }


    // Función para cargar opciones de partido en el desplegable del modal
    function loadMatchOptions(selectedSport) {
        const selectMatch = document.getElementById('match');
        const selectedPredictions = predictionsData[selectedSport] || [];

        // Limpiar opciones anteriores
        selectMatch.innerHTML = "";

        // Agregar nuevas opciones al desplegable
        selectedPredictions.forEach(prediction => {
            const option = document.createElement('option');
            option.value = prediction.partido;
            option.textContent = prediction.partido;
            selectMatch.appendChild(option);
        });

        // Al seleccionar un partido, cargar las opciones de equipo correspondientes
        selectMatch.addEventListener('change', function () {
            const selectedMatch = this.value;
            loadTeamOptions(selectedSport, selectedMatch);
        });
    }


    // Función para cargar opciones de deporte en el desplegable del modal
    function loadSportOptions() {
        const selectSport = document.getElementById('sport');
        const sports = Object.keys(predictionsData);

        // Limpiar opciones anteriores
        selectSport.innerHTML = "";

        // Agregar nuevas opciones al desplegable
        sports.forEach(sport => {
            const option = document.createElement('option');
            option.value = sport;
            option.textContent = sport;
            selectSport.appendChild(option);
        });
    }
});
