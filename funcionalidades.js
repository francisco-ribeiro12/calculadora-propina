// 1. Conectamos los elementos del HTML
const btn = document.getElementById('btn');
const res = document.getElementById('resultado');
const historial = document.getElementById('historial');

// 2. Función que se activa al hacer clic en el botón
btn.onclick = function() {
    
    // 3. Capturamos los dos valores que ingresa el usuario
    let monto = document.getElementById('cuenta').value;
    let porcentajeUsuario = document.getElementById('porcentaje').value;
    
    // 4. Validamos que ambos campos tengan números mayores a cero
    if (monto > 0 && porcentajeUsuario > 0) {
        
        // 5. Aplicamos la fórmula matemática: (Monto * Porcentaje) / 100
        let calculo = (monto * porcentajeUsuario) / 100;

        // 6. Mostramos el resultado en el HTML (Redondeado con toFixed)
        // Usamos innerHTML para que el <span> del CSS pinte el número de verde
        res.innerHTML = "Total Propina: <span>$" + calculo.toFixed(0) + "</span>";

        // --- LÓGICA DEL HISTORIAL ---

        // 7. Creamos el elemento de la lista
        let li = document.createElement('li');

        // 8. Escribimos el detalle del cálculo en el historial
        li.innerText = "Monto: $" + monto + " (" + porcentajeUsuario + "%) -> Propina: $" + calculo.toFixed(0);
        
        // 9. Lo agregamos a la lista <ul>
        historial.appendChild(li);

        // Opcional: Limpiar los cuadros de texto para un nuevo cálculo
        document.getElementById('cuenta').value = "";
        document.getElementById('porcentaje').value = "";

    } else {
        // Aviso si falta algún dato
        res.innerText = "Por favor, ingresa monto y porcentaje";
    }
}