let amigos : []

document.getElementById(agregarAmigo);
agregarAmigo.innerHTML = "Añade un amigo";
amigos.push() /*Actualizar el array de amigos. Si el valor es válido,
añadirlo al arreglo que almacena los nombres de amigos usando el método .push()
*/

//Avisa al hacer clic en el botón "Añadir" un mensaje el cual es "agregado!" en una función
function agregarAmigo() {
  let agregarAmigo = document.getElementById('amigo').value; // Obtengo el valor del campo. 
    console.log(agregarAmigo); //Imprime lo que el usuario haya escrito en la consola.

  //Se verifica si el campo está vacio.
  if (agregarAmigo === "") {
    alert("Por favor, inserte un nombre:")
  } else {
    alert("Agregado");
}

