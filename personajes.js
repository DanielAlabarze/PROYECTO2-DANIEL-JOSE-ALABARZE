document.addEventListener("DOMContentLoaded", () => {
  const detallePersonaje = document.getElementById("detalle-personaje");

  const urlParams = new URLSearchParams(window.location.search);
  const idPersonaje = urlParams.get("id");

  const datosPersonajes = JSON.parse(localStorage.getItem("personajes"));

  const personajeSeleccionado = datosPersonajes.personajes.find(
    (personaje) => personaje.id == idPersonaje
  );

  if (personajeSeleccionado) {
    const contenedorDetallesPersonaje = document.createElement("div");
    contenedorDetallesPersonaje.classList.add("detalles-personaje");
    contenedorDetallesPersonaje.innerHTML = `
      <h1>${personajeSeleccionado.nombre}</h1>
      <h2>ID: ${personajeSeleccionado.id}</h2>
      </div><img class="imagen" src="${personajeSeleccionado.imagen}" alt="${personajeSeleccionado.nombre}">
      <h2>${personajeSeleccionado.categoria}</h2>
      <p>${personajeSeleccionado.Descripción}</p>
      
      `;

    detallePersonaje.appendChild(contenedorDetallesPersonaje);
  }
});
