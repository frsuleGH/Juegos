document.querySelector('#contenido')

function consecuencia(){
// Obtener el elemento con el id 'contenido'
let contenido = document.querySelector('#contenido');

aleatorio = Math.floor(Math.random() * 30) + 1;

array = [
    'Realiza un baile sensual',
    'Envía un mensaje atrevido a la última persona que te gustó.',
    'Cuenta una experiencia vergonzosa que hayas tenido en una cita.',
    'Hacele un cumplido picante al jugador elegido por el de tu derecha',
    'Publica una historia ridicula en tus redes sociales.',
    'Imita a un famoso',
    'Comparte tu secreto más íntimo con el grupo.',
    'Fondo blanco 🍺',
    '5 flexiones de brazo',
    'Haz una foto random y envíala a un amigo/a.',
    'Realiza un masaje sensual a la persona a tu derecha durante 2 minutos.',
    'La persona a tu izquierda decide tu consecuencia',
    'Comparte una fantasía íntima que hayas tenido.',
    'Deja que alguien del grupo te dé un apodo picante por el resto del juego.',
    'Envia una foto random tuya en el chat del grupo.',
    'Manda un mensaje de voz random a la última persona que te envió un mensaje.',
    'Realiza una descripción de la persona que te gusta.',
    'Deja que alguien te dé un beso en la mejilla.',
    'Cuenta una historia vergonzosa',
    'Haz una pregunta atrevida a la persona con la que más confianza tenés en el grupo.',
    'Enseñar la foto más embarazosa de tu teléfono.',
    'Enseñar las últimas cinco personas a las que enviaste mensajes de texto y lo que decían los mensajes.',
    'Deja que te hagan cosquillas durante.',
    'Has cosquillas a alguien.',
    'Enseñar tu informe de tiempo en pantalla.',
    'Mantener un cubito de hielo en la boca hasta que se derritan.',
    'Decir algo sucio a la persona de tu izquierda.',
    'Gritar la primera palabra que se te ocurra.',
    'Dar "me gusta" a las 15 primeras historias de tu Instagram.',
    'Comer una cucharada de mostaza.',
    'Comer una cucharada de ketchup.',
    'Mantener los ojos cerrados hasta que sea tu turno de nuevo.'
]

   
impresion = array[aleatorio-1]
        let elemento = document.createElement('h2');
        elemento.textContent = `${impresion}`;
        elemento.classList.add('rojo');
        elemento.classList.add('centrar');
        contenido.innerHTML = ''; // Limpiar el contenido anterior
        contenido.appendChild(elemento);
        

}

function verdad() {
    // Obtener el elemento con el id 'contenido'
    let contenido = document.querySelector('#contenido');

    aleatorio = Math.floor(Math.random() * 60) + 1;
    console.log(aleatorio)

  
    array = [
        '¿Cuál es tu fantasía más atrevida que aún no has cumplido?',
        '¿Alguna vez has enviado fotos íntimas a alguien?',
        '¿Cuál es tu posición favorita en el S€x0?',
        '¿Te gustaría probar algo nuevo en la cama que aún no hayas experimentado?',
        '¿Cuál es tu lugar más raro donde tuviste S€x0?',
        '¿Alguna vez has tenido S€x0 en un lugar público?',
        '¿Qué es lo más atrevido que has hecho para llamar la atención de alguien que te gustaba?',
        '¿Cuánto vale tu asterisco*?',
        '¿Cuál es tu secreto más picante que nunca le has contado a nadie?',
        '¿Prefieres la cantidad o la calidad en el S€x0?',
        '¿Alguna vez has tenido sueños con alguien presente en la habitación?',
        '¿Cuál es tu parte favorita del cuerpo?',
        '¿Cuál fue tu cagada más grande?',
        '¿Alguna vez has tenido una fantasía con alguien prohibido/a (como un profesor/a o jefe/a)?',
        '¿Te gusta alguien de esta habitación?',
        '¿Qué es lo más atrevido que le has enviado a alguien por mensaje de texto?',
        '¿Qué es lo más raro que te hicieron?',
        '¿Alguna vez has usado aplicaciones o sitios web para citas?',
        '¿Qué es lo más atrevido que has hecho en una cita?',
        '¿Cuál fue tu peor experiencia sexual?',
        '¿Qué es lo peor que has hecho en el trabajo?',
        '¿Cuál es tu mayor miedo?',
        '¿Cuándo fue la última vez que mentiste?',
        '¿Alguna vez te has hecho pis encima por reírte demasiado?',
        '¿Quién es la última persona que has buscado en Instagram?',
        '¿Y lo último que has buscado en Google?',
        '¿Quién es la última persona que te ha seguido en Instagram?',
        '¿Alguna vez has escrito a un famoso por Instagram?',
        '¿Has engañado alguna vez a alguien?',
        '¿Te arrepientes de haberte acostado con alguien?',
        '¿Qué es lo peor que has hecho?',
        '¿Qué es lo más extraño que has comido?',
        '¿Cuál es tu problema en las relaciones?',
        '¿Cuál es el secreto que nunca le has contado a nadie?',
        '¿Tienes algún talento oculto?',
        '¿Has copiado alguna vez en un examen?',
        'Si fueras a participar en un "reality show", ¿cuál sería?',
        '¿Cuál es el mejor pedo que has tenido?',
        '¿Has infringido alguna vez la ley?',
        '¿Has robado algo de alguna tienda?',
        '¿Cuál es tu mayor inseguridad?',
        '¿Has seguido siendo amigo de alguien porque te beneficiaba más allá de la amistad?',
        '¿Cuál es el mayor error que has cometido?',
        '¿Qué es lo que odias que la gente sepa de ti?',
        '¿Qué es lo mejor que alguien ha hecho por ti?',
        '¿Has tenido alguna vez un enfrentamiento con la ley?',
        '¿Cuál es tu peor hábito?',
        '¿Alguna vez has suplicado a alguien?',
        '¿Qué es lo peor que le has dicho a alguien?',
        '¿Cuál es el sueño más extraño que has tenido?',
        '¿Qué pasó en la última noche de fiesta que has tenido?',
        '¿Cuál es tu mayor arrepentimiento?',
        '¿Has dicho alguna vez algo de lo que te arrepientas sobre alguien de esta sala?',
        '¿Qué es lo que te gustaría que la gente supiera de ti?',
        '¿Cuál es el lugar más extraño donde has tenido sexo?',
        '¿Por qué se rompió tu última relación?',
        '¿Has mentido alguna vez para salir de una mala cita?',
        '¿Cuál es el mayor problema en el que te has metido?',
        '¿Qué es lo máximo que has gastado en una noche de fiesta?',
        '¿Has devuelto o regalado alguna vez un regalo?',
        '¿Qué es lo que solo haces cuando estás solo?',
        '¿Alguna vez has oído a tus padres teniendo sexo?',
        '¿Te han pillado alguna vez teniendo sexo?',
        '¿Cuál es el rumor más extraño que has escuchado sobre ti?',
        '¿Qué harías si fueras del sexo opuesto durante un mes?',
        '¿Qué has comprado que haya sido el mayor despilfarro de dinero?',
        '¿Cuál es el mejor lugar para hacerlo?',
        '¿Qué es algo que nunca harás en la cama?'
    ]
    

    impresion = array[aleatorio-1]
            let elemento = document.createElement('h2');
            elemento.textContent = `${impresion}`;
            elemento.classList.add('verde');
            elemento.classList.add('centrar');
            contenido.innerHTML = ''; // Limpiar el contenido anterior
            contenido.appendChild(elemento);
  
    }

