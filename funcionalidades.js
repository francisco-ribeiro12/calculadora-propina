window.onload = function() {
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
        res.innerHTML = "$" + propina.toLocaleString('es-CL');

        const fecha = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const entry = `<li><strong>${fecha}</strong> - Cuenta: $${monto} | Propina: $${propina}</li>`;
        
        historial.innerHTML = entry + historial.innerHTML;
        localStorage.setItem('mis_propinas', historial.innerHTML);
        document.getElementById('monto').value = "";
    } else {
        alert("Por favor, ingresa un monto válido");
    }
}

document.getElementById('btn-borrar').onclick = function() {
    if (confirm("¿Quieres borrar todo el historial?")) {
        document.getElementById('historial').innerHTML = "";
        localStorage.removeItem('mis_propinas');
    }
};