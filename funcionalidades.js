// Al cargar la página, recuperar historial guardado de la memoria del celular
window.onload = function() {
    const guardado = localStorage.getItem('historialPropinas');
    if (guardado) {
        document.getElementById('historial').innerHTML = guardado;
    }
}

function calcular() {
    const monto = document.getElementById('monto').value;
    const porcentaje = document.getElementById('porcentaje').value;
    const res = document.getElementById('monto-propina');
    const historial = document.getElementById('historial');

    if (monto > 0 && porcentaje > 0) {
        const propina = (monto * porcentaje) / 100;
        
        // Mostrar resultado con formato de dinero
        res.innerHTML = "$" + propina.toLocaleString('es-CL');

        // Crear elemento para el historial
        const fecha = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const nuevoCalculo = `<li><strong>${fecha}</strong> - Cuenta: $${monto} | Propina (${porcentaje}%): <span>$${propina}</span></li>`;
        
        // Agregar al inicio de la lista
        historial.innerHTML = nuevoCalculo + historial.innerHTML;

        // GUARDAR EN MEMORIA (LocalStorage)
        localStorage.setItem('historialPropinas', historial.innerHTML);
        
        // Limpiar el monto para el siguiente cálculo
        document.getElementById('monto').value = "";
    } else {
        alert("Por favor, ingresa montos válidos.");
    }
}

// Configurar botón de borrar
const btnBorrar = document.getElementById('btn-borrar');
btnBorrar.onclick = function() {
    if(confirm("¿Seguro que quieres borrar todo el historial?")) {
        document.getElementById('historial').innerHTML = "";
        document.getElementById('monto-propina').innerHTML = "$0";
        localStorage.removeItem('historialPropinas'); // Borrar la memoria
    }
}
