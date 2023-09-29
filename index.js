fetch("personajes.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("personajes", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
  const gridPersonajes = document.getElementById("grid-personajes");
  const datosPersonajes = JSON.parse(localStorage.getItem("personajes"));
  console.log(datosPersonajes);
  if (datosPersonajes) {
    datosPersonajes.personajes.forEach((personaje) => {
      const gridItem = document.createElement("div");

      gridItem.classList.add("grid-item");

      gridItem.innerHTML = `
      </div><img class="imagenPersonaje" src="${personaje.imagen}" alt="${personaje.nombre}">
      <h2>${personaje.nombre}</h2>
      `;

      gridItem.addEventListener("click", () => {
        mostrarDetallesPersonaje(personaje);
      });

      gridPersonajes.appendChild(gridItem);
    });
  }
});

function mostrarDetallesPersonaje(personaje) {
  window.location.href = `personajes.html?id=${personaje.id}`;
}
