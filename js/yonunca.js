document.querySelector('#contenido');

let aleatorioAnteriorReto = 0;

function yonunca() {
    let contenido = document.querySelector('#contenido');
    let aleatorio;
    

    let array = [
        "Yo nunca he robado en una tienda.",
        "Yo nunca he perdido el trabajo por haber salido de fiesta y bebido demasiado la noche anterior.",
        "Yo nunca he estado esposado por la policía.",
        "Yo nunca he tenido diarrea en la casa de un amigo.",
        "Yo nunca me he vestido con ropa del S€x0 opuesto.",
        "Yo nunca he culpado a un amigo por algo que hice.",
        "Yo nunca he jugado a la Ouija.",
        "Yo nunca he bebido antes de cumplir 18.",
        "Yo nunca me he enamorado de un profesor/a.",
        "Yo nunca he dudado de mi orientación sexual.",
        "Yo nunca he creado una cuenta falsa en las redes sociales.",
        "Yo nunca he despertado en un lugar extraño porque iba muy borracho.",
        "Yo nunca he ido en pijama y zapatillas por la calle.",
        "Yo nunca lloré ni supliqué para librarme de una multa o de un castigo.",
        "Yo nunca he perdido el conocimiento.",
        "Yo nunca he hecho que alguien tenga que ir al hospital.",
        "Yo nunca me he hecho un piercing en una zona innombrable.",
        "Yo nunca me he bañado en la playa totalmente desnudo.",
        "Yo nunca he estado esposado.",
        "Yo nunca he fantaseado con alguien que está hoy aquí.",
        "Yo nunca he mentido sobre cuánto mido para Chamuyar.",
        "Yo nunca he pasado más de una semana sin ducharme.",
        "Yo nunca he tenido una experiencia paranormal.",
        "Yo nunca he llevado la ropa interior al revés durante todo un día.",
        "Yo nunca he fingido encontrarme mal para no ir al trabajo.",
        "Yo nunca he quedado muy en ridículo al intentar encarar a alguien.",
        "Yo nunca he recibido una cachetada en público.",
        "Yo nunca he deseado la muerte a alguien que esté hoy aquí.",
        "Yo nunca he robado dinero.",
        "Yo nunca he exagerado mis logros para chamuyar.",
        "Yo nunca he dado un nombre falso.",
        "Yo nunca he trabajado borracho.",
        "Yo nunca he dejado plantado a alguien en una cita.",
        "Yo nunca he soltado sin querer el teléfono en el baño.",
        "Yo nunca he llorado de mentira para conseguir algo.",
        "Yo nunca he gastado de más en una noche de fiesta.",
        "Yo nunca he enviado un mensaje a un ex en pedo.",
        "Yo nunca he buscado mi propio nombre en Google.",
        "Yo nunca he editado mis selfies.",
        "Yo nunca me han negado la entrada a un club.",
        "Yo nunca he mandado mensajes privados a un famoso.",
        "Yo nunca he mentido jugando a 'Yo nunca'.",
        "Yo nunca he dicho que me gustaba mucho un regalo y luego lo he devuelto.",
        "Yo nunca he borrado una foto de una red social por no gustarme cómo salgo.",
        "Yo nunca he dicho una mentira a mis amigos.",
        "Yo nunca he entrado a una fiesta sin que me hayan invitado.",
        "Yo nunca le he hecho ghosting a nadie.",
        "Yo nunca he hecho nada ilegal.",
        "Yo nunca he mentido a alguien de esta habitación.",
        "Yo nunca he besado al hermano de un amigo/a.",
        "Yo nunca he tenido S€x0 en el lugar de trabajo.",
        "Yo nunca le he hecho un baile erótico a alguien.",
        "Yo nunca he tenido S€x0 en la cama de mis padres.",
        "Yo nunca he grabado una relación íntima.",
        "Yo nunca he mantenido relaciones con alguien 5 años mayor que yo.",
        "Yo nunca he mantenido relaciones con alguien 10 años mayor que yo.",
        "Yo nunca me he disfrazado para satisfacer una fantasía.",
        "Yo nunca he estado con nadie de mi familia.",
        "Yo nunca he sido infiel.",
        "Yo nunca he estado con el ex de un amigo o amiga.",
        "Yo nunca he pasado la noche con alguien de este grupo.",
        "Yo nunca he dicho el nombre equivocado durante una relación.",
        "Yo nunca he tenido una relación sexual con un compañero de cursado.",
        "Yo nunca le he sido infiel a ninguna de mis parejas.",
        "Yo nunca he tenido una relación abierta.",
        "Yo nunca lo he hecho al aire libre.",
        "Yo nunca he usado una comida como juguete.",
        "Yo nunca he intentado ligar con el rollo de un amigo.",
        "Yo nunca he mandado un audio subido de tono a un familiar por error.",
        "Yo nunca he tenido S€x0 en el auto.",
        "Yo nunca he usado una aplicación de citas.",
        "Yo nunca he comprado nada en un sex shop.",
        "Yo nunca he tomado una fotografía de mis partes íntimas.",
        "Yo nunca he vomitado mientras tenía relaciones sexuales.",
        "Yo nunca he tomado la pastilla del día después.",
        "Yo nunca me he sentido atraído por el padre o la madre de un amigo.",
        "Yo nunca he pagado una suscripción a una página porno.",
        "Yo nunca he escondido un chupetón a mis padres.",
        "Yo nunca he pensado en otra persona durante el S€x0.",
        "Yo nunca he pasado más de seis meses sin tener S€x0.",
        "Yo nunca me he acostado con dos personas distintas el mismo día.",
        "Yo nunca me he acostado con alguien en la primera cita.",
        "Yo nunca he tenido S€x0 en un avión.",
        "Yo nunca he chupado los dedos de los pies de mi pareja.",
        "Yo nunca he tenido una fantasía sexual con otra persona cuando estaba en una relación.",
        "Yo nunca he fingido un orgasmo."
    ];
        
    do {
        aleatorio = Math.floor(Math.random() * array.length) + 1;
    } while (aleatorio === aleatorioAnteriorReto);

    aleatorioAnteriorReto = aleatorio;

    let impresion = array[aleatorio - 1];
    let elemento = document.createElement('h2');
    elemento.textContent = `${impresion}`;
    elemento.classList.add('verde');
    elemento.classList.add('centrar');
    contenido.innerHTML = '';
    contenido.appendChild(elemento);
}

