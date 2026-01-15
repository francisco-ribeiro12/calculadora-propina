// Función que se ejecuta apenas carga la página
window.onload = function() {
    // Buscamos si hay algo guardado bajo el nombre 'mis_propinas'
    const historialGuardado = localStorage.getItem('mis_propinas');
    if (historialGuardado) {
        document.getElementById('historial').innerHTML = historialGuardado;
    }
};

function calcular() {
    const monto = document.getElementById('monto').value;
    const porcentaje = document.getElementById('porcentaje').value;
    const res = document.getElementById('monto-propina');
    const historial = document.getElementById('historial');

    if (monto > 0 && porcentaje > 0) {
        const propina = (monto * porcentaje) / 100;
        const total = parseFloat(monto) + propina;
        
        // Mostrar resultado
        res.innerHTML = "$" + propina.toLocaleString('es-CL');

        // Crear texto para el historial
        const fecha = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const entry = `<li><strong>${fecha}</strong> - Cuenta: $${monto} | Propina: $${propina}</li>`;
        
        // Agregar al inicio de la lista
        historial.innerHTML = entry + historial.innerHTML;

        // GUARDAR EN LA MEMORIA DEL CELULAR/PC
        localStorage.setItem('mis_propinas', historial.innerHTML);

        // Limpiar monto para nuevo cálculo
        document.getElementById('monto').value = "";
    } else {
        alert("Por favor, ingresa un monto válido");
    }
}

// Configurar el botón de borrar
document.getElementById('btn-borrar').onclick = function() {
    if (confirm("¿Quieres borrar todo el historial permanentemente?")) {
        document.getElementById('historial').innerHTML = "";
        localStorage.removeItem('mis_propinas'); // Borra la memoria
    }
};