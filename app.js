const enlaces = document.querySelectorAll(".navbar-item");
const pestañas = document.querySelectorAll(".pestaña");
const btnAgendarCita = document.querySelector(".btn-agendar-cita");
const consultas = document.querySelectorAll(".consultas");
const opciones = document.querySelectorAll(".opciones");
const estadoConsultas = document.querySelectorAll(".estado-consultas span");

document.addEventListener("DOMContentLoaded", function () {
  // Encuentra el botón por su ID
  const cambiaFuente = document.getElementById("cambiarFuente");

  // Obtén el tamaño de fuente actual
  const body = document.body;
  const estilosBody = window.getComputedStyle(body);
  const tamañoFuenteActual = parseInt(
    estilosBody.getPropertyValue("font-size")
  );

  // Define el incremento deseado
  const incremento = 4; // Puedes ajustar este valor según tus preferencias

  // Función para aumentar o reducir la fuente
  cambiaFuente.addEventListener("click", function () {
    const tamañoFuente = parseInt(estilosBody.getPropertyValue("font-size"));
    body.style.fontSize =
      tamañoFuente === tamañoFuenteActual
        ? tamañoFuente + incremento + "px"
        : tamañoFuenteActual + "px";
  });
});



// Función para ocultar todos los cuadros de opciones
function ocultarOpciones() {
  opciones.forEach((opcion) => {
    opcion.style.display = "none";
  });

  estadoConsultas.forEach((estado) => {
    estado.textContent = "▼"; // Restablecer todos los estados a cerrados
  });
}

// Función para mostrar una pestaña específica
function mostrarPestana(pestana) {
  pestañas.forEach((pestaña) => {
    pestaña.style.display = "none";
  });
  document.querySelector(`.${pestana}.pestaña`).style.display = "block";
}

function resaltarPestanaActiva(pestana) {
  enlaces.forEach((enlace) => {
    enlace.classList.remove("activo");
  });

  pestañas.forEach((p) => {
    p.style.display = "none";
  });

  pestana.style.display = "block";
  enlaces[Array.from(pestañas).indexOf(pestana)].classList.add("activo");
}
// Agrega eventos a los enlaces de navegación
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (event) => {
    event.preventDefault();
    const href = enlace.getAttribute("href").substr(1);
    const pestana = document.querySelector(`.${href}.pestaña`);
    resaltarPestanaActiva(pestana);
    ocultarOpciones();
  });
});
// Agrega evento para el botón "Agendar Cita"
btnAgendarCita.addEventListener("click", () => {
  const pestana = document.querySelector(".contacto.pestaña");
  resaltarPestanaActiva(pestana);
  ocultarOpciones();
});

// Agrega eventos a los cuadros de "Consultas"
consultas.forEach((consulta, index) => {
  consulta.addEventListener("click", () => {
    if (
      opciones[index].style.display === "none" ||
      !opciones[index].style.display
    ) {
      ocultarOpciones(); // Cierra todas las opciones antes de abrir una nueva
      opciones[index].style.display = "block";
      estadoConsultas[index].textContent = "▲";
    } else {
      opciones[index].style.display = "none";
      estadoConsultas[index].textContent = "▼";
    }
  });
});

// Mostrar la pestaña de inicio al cargar la página
window.addEventListener("load", () => {
  const pestanaInicio = document.querySelector(".inicio.pestaña");
  resaltarPestanaActiva(pestanaInicio);
});

// JavaScript para mostrar texto oculto al hacer clic en una imagen de doctor
const imagenesInfo = document.querySelectorAll(".imagen-info");
imagenesInfo.forEach((imagenInfo) => {
  const info = imagenInfo.querySelector(".info");
  imagenInfo.addEventListener("mouseover", () => {
    info.style.display = "block"; // Mostrar el texto al pasar el mouse por encima
  });
  imagenInfo.addEventListener("mouseout", () => {
    info.style.display = "none"; // Ocultar el texto al quitar el mouse
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mostrarEspecialistas = document.getElementById("mostrar-especialistas");
  const imagenesInicio = document.querySelector(".imagenes-inicio");
  const flechaEspecialistas = document.getElementById("flecha-especialistas");

  mostrarEspecialistas.addEventListener("click", function () {
    // Alternar la clase "mostrando" en el div de imágenes
    imagenesInicio.classList.toggle("mostrando");
    if (imagenesInicio.classList.contains("mostrando")) {
      flechaEspecialistas.textContent = "▲"; // Cambiar a flecha hacia arriba
    } else {
      flechaEspecialistas.textContent = "▼"; // Cambiar a flecha hacia abajo
    }
  });
});


// nav bulma
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});
