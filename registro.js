function iniciarCompra() {
  const nombre = document.getElementById("nombre").value.trim();
  const presupuesto = document.getElementById("presupuesto").value.trim();
  const cantidad = document.getElementById("cantidad").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const entrega = document.querySelector('input[name="entrega"]:checked');
  
  
  if (!nombre || nombre.length > 20) {
      alert("El nombre es obligatorio y no debe superar 20 caracteres.");
      return;
  }

  if (!presupuesto || isNaN(presupuesto) || presupuesto <= 0) {
      alert("Ingrese un presupuesto válido en COP.");
      return;
  }

  if (!cantidad || isNaN(cantidad) || cantidad <= 0 || cantidad > 20) {
      alert("La cantidad debe ser un número entre 1 y 20.");
      return;
  }

  if (!direccion) {
      alert("La dirección de entrega es obligatoria.");
      return;
  }

  if (!entrega) {
      alert("Seleccione un tipo de entrega.");
      return;
  }

  // Guardar en localStorage
  localStorage.setItem('presupuestoMaximo', presupuesto);
  localStorage.setItem('cantidadMaximaProductos', cantidad);

  alert("Requerimientos validados correctamente. Redirigiendo a la página de lista de productos...");
  window.location.href = "vistaCompras.html"; // Redirección a la lista de productos
}
