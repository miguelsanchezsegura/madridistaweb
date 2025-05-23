let nombre = prompt("¿Cuál es tu nombre?");
let edadInput = prompt("¿Cuál es tu edad?");

// Validación de edad
if (edadInput === null || edadInput.trim() === "" || isNaN(edadInput)) {
    alert("Edad no válida.");
} else {
    let edad = parseInt(edadInput.trim());
    let mensaje = "";

    // Validación del nombre
    if (nombre === null || nombre.trim() === "") {
        mensaje = "Hola desconocido, ";
    } else {
        mensaje = `Hola ${nombre.trim()}, `;
    }

    // Evaluación de edad
    if (edad >= 18) {
        mensaje += "eres mayor de edad.";
    } else {
        mensaje += "eres menor de edad.";
    }

    // Mostrar mensaje final
    alert(mensaje);
}

  // FUNCIONALIDAD DE TEMAS
function setTheme(theme) {
  // Obtenemos la raíz del documento (el <html>)
  const root = document.documentElement;

  // Tema 1: Primera equipación (blanco y azul)
  if (theme === 'primera') {
    root.style.setProperty('--bg-color', '#ffffff');      // Fondo blanco
    root.style.setProperty('--text-color', '#000000');    // Texto negro
    root.style.setProperty('--header-color', '#002266');  // Azul oscuro (títulos)
    root.style.setProperty('--card-color', '#f5f5f5');    // Tarjetas gris claro
  }

  // Tema 2: Segunda equipación (morado y naranja)
  if (theme === 'segunda') {
    root.style.setProperty('--bg-color', '#3a1245');      // Fondo morado oscuro
    root.style.setProperty('--text-color', '#ff6f00');    // Texto naranja
    root.style.setProperty('--header-color', '#ff6f00');  // Cabecera naranja
    root.style.setProperty('--card-color', '#522c65');    // Tarjetas morado más claro
  }

  // Tema 3: Tercera equipación (negro y dorado)
  if (theme === 'tercera') {
    root.style.setProperty('--bg-color', '#000000');      // Fondo negro
    root.style.setProperty('--text-color', '#e0c26c');    // Texto dorado claro
    root.style.setProperty('--header-color', '#c9a74e');  // Cabecera dorado oscuro
    root.style.setProperty('--card-color', '#1e1e1e');    // Tarjetas gris oscuro
  }
}

// Al cargar la página, se aplica por defecto el tema de la primera equipación
window.onload = () => setTheme('primera');


// FUNCIONALIDAD DEL CARRITO


// Declaramos el array que contendrá los productos del carrito
let carrito = [];

// Total acumulado de la compra
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio }); // Añade el producto (como objeto) al array
    total += precio;                  // Suma el precio al total
    actualizarCarrito();             // Llama a la función que actualiza la vista del carrito
}

// Función para eliminar un producto del carrito por su índice
function eliminarDelCarrito(index) {
    total -= carrito[index].precio;  // Resta el precio del producto eliminado
    carrito.splice(index, 1);        // Elimina el producto del array
    actualizarCarrito();             // Actualiza la vista del carrito
}

// Función para actualizar el contenido del carrito en pantalla
function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito'); // Referencia al contenedor visual del carrito
    carritoLista.innerHTML = ''; // Limpia el contenido anterior

    // Recorremos cada producto del carrito
    carrito.forEach((item, index) => {
      const li = document.createElement('li'); // Creamos un nuevo elemento <li>
      li.textContent = `${item.nombre} - ${item.precio}€ `; // Mostramos nombre y precio

      // Creamos el botón para eliminar el producto
      const btn = document.createElement('button');
      btn.textContent = '❌';               // Icono de eliminar
      btn.style.marginLeft = '10px';        // Estilo de separación
      btn.onclick = () => eliminarDelCarrito(index); // Asignamos evento de clic

      // Añadimos el botón al <li> y este al contenedor del carrito
      li.appendChild(btn);
      carritoLista.appendChild(li);
    });

    // Actualizamos el texto del total en pantalla
    document.getElementById('total').textContent = total;
}
