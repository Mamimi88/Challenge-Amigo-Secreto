//Declaración de listas.
let amigos = []
let listaAmigos = document.getElementById("listaAmigos"); // Se obtiene el elemento de la lista en HTML.


function agregarAmigo() {
    let amigo = document.getElementById('amigo').value; // obtendo el valor del campo.  Ayudado por ChatGTP en corroborar.
    console.log(agregarAmigo); // Imprime lo que el usuario haya escrito. Ayudado por ChatGTP en corroborar.
    
    //Se verifica si el campo está vacío
    if (agregarAmigo === "") { 
        alert("Por favor, inserte un nombre:");
} else {
        alert('Agregado');

        actualizarLista();
        }
}



function actualizarLista() {
        listaAmigos.innerHTML = ""; //Limpiar la lista antes de agregar nuevos amigos para que ho haya duplicado.
    
        // Recorrer la lista de amigos y agregar cada uno a la lista HTML
        for (let i = 0; i < amigos.length; i++) { // sacado topico duda while y for. 
                let li =  /// repasé de nuevo el for por no entenderlo en varias paginas. 
        }

}

