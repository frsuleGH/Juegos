document.querySelector('#contenido')

function reto(){
    let contenido = document.querySelector('#contenido');

    aleatorio = Math.floor(Math.random() * 12) + 1;
    console.log(aleatorio)

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
            "Cocinar un asado"
        ]
            impresion = array[aleatorio-1]
            let elemento = document.createElement('h2');
            elemento.textContent = `${impresion}`;
            elemento.classList.add('rojo');
            elemento.classList.add('centrar');
            contenido.innerHTML = ''; // Limpiar el contenido anterior
            contenido.appendChild(elemento);

}

