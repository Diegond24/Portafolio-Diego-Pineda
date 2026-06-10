// Agregar un evento de escucha al formulario para manejar el envío
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Aquí puedes agregar la lógica para procesar los datos del formulario
        alert('¡Gracias por contactarme! Me pondré en contacto contigo pronto.');
        this.reset(); // Reiniciar el formulario después de enviar
    });



console.log('¡Hola! Este es un mensaje de prueba para verificar que el JavaScript se está ejecutando correctamente.');

console.log('¡Bienvenido a mi portafolio! Aquí encontrarás información sobre mis proyectos y habilidades.');

console.log('Si tienes alguna pregunta o deseas contactarme, no dudes en enviarme un mensaje a través del formulario de contacto. ¡Estoy ansioso por conectarme contigo!');

console.log(2 + 2, 'Esto debería mostrar 4 en la consola'); // Esto debería mostrar 4 en la consola

console.warn('Este es un mensaje de advertencia. Asegúrate de revisar el código para evitar posibles errores.');

console.error('Este es un mensaje de error. Algo salió mal, revisa el código para solucionarlo.');

const nombre = 'Diego';
console.log(`¡Hola, ${nombre}! Bienvenido a mi portafolio.`); // Esto debería mostrar "¡Hola, Diego! Bienvenido a mi portafolio." en la consola

const user = {
    nombre: 'Diego',
    age: 24,
    profession: 'Desarrollador Web',
    skills: ['HTML', 'CSS', 'JavaScript']
};

console.log('Información del usuario:', user); // Esto debería mostrar la información del usuario en la consola