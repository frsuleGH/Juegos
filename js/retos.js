document.querySelector('#contenido')

let aleatorioAnteriorReto = 0;

function reto() {
    let contenido = document.querySelector('#contenido');

    

            array =[
            "Saltar la cuerda",
            "Jugar al béisbol",
            "Conducir un automóvil",
            "Hacer snowboard",
             "Tocar la guitarra",
            "Conducir una motocicleta",
            "Jugar al golf",
            "Jugar al tenis",
            "Parado en el subte",
            "Tomar un colectivo",
            "tomar mate",
            "Cocinar un asado",
            "Te maquillas"
        ]

        do {
            aleatorio = Math.floor(Math.random() * array.length) + 1;
        } while (aleatorio === aleatorioAnteriorReto);
    
        aleatorioAnteriorReto = aleatorio;
        let impresion = array[aleatorio - 1];
        let elemento = document.createElement('h2');
        elemento.textContent = `${impresion}`;
        elemento.classList.add('rojo');
        elemento.classList.add('centrar');
        contenido.innerHTML = '';
        contenido.appendChild(elemento);

}

