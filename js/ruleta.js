document.querySelector('#contenido')

function ruleta() {
    // Mostrar el círculo de carga
    document.getElementById('circuloCarga').classList.remove('oculto');

    // Lógica de la ruleta
    aleatorio = Math.floor(Math.random() * 15) + 1;

    let contenido = document.querySelector('#contenido');

    setTimeout(function() {
        if (aleatorio === 6|| aleatorio ===19) {
            let elemento = document.createElement('h2');
            elemento.textContent = 'SHOT🍺!';
            elemento.classList.add('rojo');
            elemento.classList.add('centrar');
            contenido.innerHTML = ''; // Limpiar el contenido anterior
            contenido.appendChild(elemento);
        }
         else {
            let elemento = document.createElement('h2');
            elemento.textContent = 'ZAFASTE 🥳!';
            elemento.classList.add('verde');
            elemento.classList.add('centrar');
            contenido.innerHTML = ''; // Limpiar el contenido anterior
            contenido.appendChild(elemento);
        }

        // Ocultar el círculo de carga después de un tiempo (por ejemplo, 2 segundos)
        document.getElementById('circuloCarga').classList.add('oculto');
    }, 1000); // Simulamos una operación asíncrona de 1 segundo antes de la lógica de la ruleta
}
