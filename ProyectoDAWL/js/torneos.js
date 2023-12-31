//-------------------------FORMULARIO---------------------------------------//
// Funciones para el formulario
document.getElementById("torneo").addEventListener("submit", function (event) {
  event.preventDefault();
  const nombreTorneo = document.getElementById("nombreTorneo").value;
  const equipo = document.getElementById("equipo").value;
  const directorTecnico = document.getElementById("directorTecnico").value;
  const pais = document.getElementById("pais").value;

  // creacion de una nueva tabla de resultado
  const table = document
    .getElementById("tablatorneos")
    .getElementsByTagName("tbody")[0];
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
  cell5.innerHTML =
    '<button class="btn-danger"onclick="Eliminarfila(this)">Eliminar</button>';

  // Limpiar el formulario
  document.getElementById("torneo").reset();
  
  // Función para eliminar un equipo agregado a un nuevo torneo
  function Eliminarfila(buttonEliminar) {
    var fila = buttonEliminar.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
  }
});
