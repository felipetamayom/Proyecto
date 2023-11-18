document.addEventListener("DOMContentLoaded", () => {
    // Obtener todas las secciones de productos
    const seccionesProductos = document.querySelectorAll(".producto, .producto-oferta, .producto-destacado");

    // Funcionalidad para agregar productos al carrito
    const carrito = [];
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total");

    const actualizarCarrito = () => {
        // Limpiar la lista de carrito
        listaCarrito.innerHTML = "";

        // Calcular el total del carrito
        let total = 0;

        // Recorrer el carrito y agregar elementos a la lista
        carrito.forEach(producto => {
            const li = document.createElement("li");
            li.textContent = `${producto.nombre} - Precio: $${producto.precio.toFixed(3)}`;
            listaCarrito.appendChild(li);

            total += producto.precio;
        });

        // Actualizar el total en la interfaz
        totalCarrito.textContent = total.toFixed(3);
    };

    const agregarAlCarrito = (nombre, precio) => {
        const producto = { nombre, precio: parseFloat(precio) };
        carrito.push(producto);
        actualizarCarrito();
    };

    // Ejemplo de escucha de clic en los botones de producto
    document.querySelectorAll(".agregar-carrito").forEach(boton => {
        boton.addEventListener("click", () => {
            const nombre = boton.parentElement.querySelector("h6").textContent;
            const precio = boton.parentElement.querySelector(".precio").textContent.replace("Precio: $", "");
            agregarAlCarrito(nombre, precio);
        });
    });

    // Funcionalidad para vaciar el carrito
    const vaciarCarrito = () => {
        carrito.length = 0; // Vaciar el arreglo del carrito
        actualizarCarrito(); // Actualizar la interfaz
    };

    // Funcionalidad para finalizar la compra (puedes personalizar según tus necesidades)
const finalizarCompra = () => {
    alert('Compra finalizada. ¡Gracias por tu compra!');
    vaciarCarrito(); // Puedes optar por no vaciar el carrito aquí si lo deseas
};

    // Escucha de clic en el botón para vaciar el carrito
    document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito);

    // Escucha de clic en el botón para finalizar la compra
document.getElementById("finalizar-compra").addEventListener("click", finalizarCompra);

});
