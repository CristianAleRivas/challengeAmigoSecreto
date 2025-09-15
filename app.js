// Variable para almacenar los amigos

let amigos = [];

// Variable para guardar el amigo sorteado

let amigoSorteado = '';


// Variable para almacenar el nombre digitado en el input

let nombreInput = '';
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
// Función para agregar un amigo

function agregarAmigo() {
    
    // Asignar el valor del input a la variable nombreInput
    
    nombreInput = document.getElementById('amigo').value
    
    // Validar que el nombre no esté vacío, si esta vacio entonces mostrar una alerta, si no, agregar el nombre al array amigos

    nombreInput.trim() !== '' ? amigos.push(nombreInput) : alert('Por favor, ingresa un nombre válido.');

    // Limpiar el input después de agregar el nombre

    document.getElementById('amigo').value = '';

    mostrarAmigos();

}

// Función para mostrar la lista de amigos en el HTML

function mostrarAmigos() {
    
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de mostrarla nuevamente

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Funcion para seleccionar un amigo secreto al azar

function sortearAmigo() {

    // validar si el array esta vacio

    if (amigos.length === 0) {
        
        // Si esta vacio entonces muestra un alert 

        alert('Aun no hay amigos en la lista para sortear');

    } else {

        // Sino esta vacio el array entonces sorteara el amigo

        // Obtener un indice aleatorio 
        let indexAmigos = Math.floor((Math.random() * amigos.length));
        // Asignar el nombre con el indice aleatorio
        amigoSorteado = amigos[indexAmigos];
        resultado.innerHTML = amigoSorteado;
    }
}

function mostrarResultado() {

    // 
    
}