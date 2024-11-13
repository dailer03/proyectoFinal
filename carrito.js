let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const costoDomicilio = 0;

function cargarCarrito() {
    const contenidoCarrito = document.getElementById('contenidoCarrito');
    contenidoCarrito.innerHTML = '';
    let totalProductos = 0;
    let costoTotal = 0;

    carrito.forEach((producto, index) => {
        const subtotal = producto.precio * producto.cantidad;
        totalProductos += producto.cantidad;
        costoTotal += subtotal;

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><img src="${producto.img}" alt="${producto.nombre}" width="50" height="50"></td>
            <td>${producto.nombre}</td>
            <td>${producto.codigo}</td>
            <td>${producto.cantidad}</td>
            <td>COP ${producto.precio}</td>
            <td>COP ${subtotal}</td>
            <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
        `;
        contenidoCarrito.appendChild(fila);
    });

    const costoFinal = costoTotal + (totalProductos > 0 ? costoDomicilio : 0);
    document.getElementById('totalProductos').textContent = `Total de productos: ${totalProductos}`;
    document.getElementById('costoTotal').textContent = `Costo total: COP ${costoTotal}`;
    document.getElementById('costoFinal').textContent = `Costo final: COP ${costoFinal}`;
}


function mostrarCodigo() {
    const codigoSeguridadInput = document.getElementById("codigoSeguridad");
    const checkbox = document.getElementById("mostrarCodigoSeguridad");
  
    if (checkbox.checked) {
      codigoSeguridadInput.type = "text"; // Muestra el código
    } else {
      codigoSeguridadInput.type = "password"; // Oculta el código
    }
  }
  

// Función para confirmar la compra
function confirmarCompra(event) {
    event.preventDefault();
    
    const totalProductos = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    const costoTotal = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0) + (totalProductos > 0 ? costoDomicilio : 0);
    
    // Recuperar límites del `localStorage`
    const presupuestoMaximo = Number(localStorage.getItem('presupuestoMaximo'));
    const cantidadMaximaProductos = Number(localStorage.getItem('cantidadMaximaProductos'));

    if (totalProductos > cantidadMaximaProductos) {
        alert(`No puedes comprar más de ${cantidadMaximaProductos} productos.`);
        return;
    }

    if (costoTotal > presupuestoMaximo) {
        alert(`Has superado tu presupuesto máximo de COP ${presupuestoMaximo}.`);
        return;
    }

    // Proceder con la compra si se cumplen las condiciones
    alert('Compra exitosa');
    localStorage.removeItem('carrito');
    window.location.href = 'registro.html';
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

// Botón para seguir comprando
function seguirComprando() {
    window.location.href = 'vistaCompras.html';
}

// Botón para cancelar compra y regresar al registro
function cancelarCompra() {
    localStorage.removeItem('carrito');
    window.location.href = 'registro.html';
}

// Inicializar carga del carrito al cargar la página
window.onload = cargarCarrito;