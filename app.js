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