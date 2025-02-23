let amigos = [];   
let listaAmigos = document.getElementById("listaAmigos");   

 
function agregarAmigo() { 
    let amigo = document.getElementById('amigo').value;  

    if (amigo === "") {  
        alert("Inserte el nombre de su amigo:");
    } else {  
        amigos.push(amigo);
        alert("Amigo agregado");

        actualizarLista();
    }
}


function actualizarLista() {
    listaAmigos.innerHTML = " ";  

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");  
        li.textContent = amigos[i];  
        listaAmigos.appendChild(li);  
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { 
        alert("No hay amigos para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);  
    let amigoSorteado = amigos[indiceAleatorio];  
    alert("El amigo sorteado es: " + amigoSorteado);  
}
//Se revisa y practica con GPT.









/*                                                                                       // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
let listaAmigos = document.getElementById("listaAmigos");                                //box donde quiero agregar los elementos <li>

function agregarAmigo() {                                                               //Cada vez que el usuario introduce un nombre y hace clic en el botón, se ejecuta la función agregarAmigo()
                                                                                       Pseudocodigo GTP                            
                                                                                       Función agregarAmigo:
                                                                                        Obtener el valor del input con el id en HTML 'amigo' y guardarlo en la variable 'amigo'
                                                                
                                                                                        Si 'amigo' está vacío:
                                                                                            Mostrar alerta "Inserte el nombre de su amigo:"
                                                                                        Sino:
                                                                                            Agregar 'amigo' al arreglo de 'amigos'
                                                                                            Mostrar alerta "Amigo agregado"
                                                                                            Llamar a la función actualizarLista
                                                                                        Fin Función    
    let amigo = document.getElementById('amigo').value;
    console.log(amigo); 

    if(amigo === "") {         
         alert("Inserte el nombre de su amigo:");
    } else {
        amigos.push(amigo);
        alert("Agregado");

        actualizarLista();
    }
}

function actualizarLista() { 
    listaAmigos.innerHTML = "";                                                     //limpia el contenido de la lista para evitar duplicados

                                                                    //Agregar amigo a la lista en HTML.

for (let i = 0; i < amigos.length; i++) {                                           -- Para cada índice desde el final del arreglo hasta el principio:
                                                                                    - Genera un índice aleatorio entre 0 y el índice actual
                                                                                    - Intercambia el elemento en el índice actual con el elemento en el índice aleatorio  
    
let li = document.createElement("li");                                               //Crea en HTML un espacio para poner los nombres de los amigos.
    li.textContent = amigos[i];                                                      // El contenido del <li> será el nombre del amigo 
                                                                                                    EN HTML <ul id="listaAmigos">
                                                                                                    <li>Juan</li>  <!Nuevo amigo agregado>
                                                                                                    </ul> 
listaAmigos.appendChild(li);                                                         // Agrega en html otro elemento dentro de otro elemento para que aparezca en al pagina del usuario.
}
}

                                                                    //Sortear amigo

function sortearAmigo() { 
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);             // Genera un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];                                 // Obtiene el amigo en el índice aleatorio
    alert("El amigo sorteado es: " + amigoSorteado);                             // Muestra el amigo sorteado 
}


        }
}

}
 

GPT 


let amigos = [];  // Array que guarda los nombres de los amigos
let listaAmigos = document.getElementById("listaAmigos");  // Elemento <ul> donde se listan los amigos

// Función para agregar un amigo al array y actualizar la lista
function agregarAmigo() { 
    let amigo = document.getElementById('amigo').value;  // Obtiene el nombre del amigo desde el input

    if (amigo === "") {  // Si el input está vacío, muestra una alerta
        alert("Inserte el nombre de su amigo:");
    } else {  // Si no está vacío, agrega el nombre al array y actualiza la lista
        amigos.push(amigo);
        alert("Amigo agregado");

        actualizarLista();
    }
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    listaAmigos.innerHTML = "";  // Limpia la lista actual

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");  // Crea un nuevo elemento <li>
        li.textContent = amigos[i];  // Asigna el nombre del amigo al <li>
        listaAmigos.appendChild(li);  // Agrega el <li> a la lista en el HTML
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {  // Si no hay amigos en la lista, muestra un mensaje de alerta
        alert("No hay amigos para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);  // Genera un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];  // Obtiene el amigo en el índice aleatorio
    alert("El amigo sorteado es: " + amigoSorteado);  // Muestra el amigo sorteado
}


