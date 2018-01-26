window.addEventListener('load', () => {
// Funcion para cifrar la palabra
let palabra = document.getElementById('palabra')
 let cipher = document.getElementById('encriptar');
 let decipher = document.getElementById('desencriptar');
let result  = document.getElementById('resultado');
 cipher.addEventListener('click', () => {
 /*function0 ciphers() {*/

var palabras = palabra.value;

if(palabras.match(/[a-zA-Z]/)) {

    /*
let cipher = word =>  {
  // variable para la salida de la palabra encriptada*/
  let output = '';
  // recorrido dentro de la palabra ingresada
  for (let i = 0; i < palabras.length;i++) {
    // variable en donde se convierte la letra en codigo ascii
    let code = palabras.charCodeAt(i);
    // variable que guarda la conversion de codigo ascii a letra
    let code2 = palabras[i];

    // analizando las letras mayusculas A= 65 Y Z= 90
    if ((code >= 65) && (code <= 90)) {
      // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
      code2 = String.fromCharCode(((code - 65 + 33) % 26) + 65);
      // analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
    } else if ((code >= 97) && (code <= 122)) {
      code2 = String.fromCharCode(((code - 97 + 33) % 26) + 97);
    }
    // salida de la palabra encriptada
    output += code2;
  }


  /*return output;*/
  result.innerHTML= 'La palabra encriptada es : ' + output ;
}
else{
  alert('equivocado')
}
});
/*
// entrada de la frase a encriptar
do {
  let word = prompt('Escribir el texto a encriptar');
  cipher(word);
} while (word.length <= 1);// no recibe numero, ni campo vacio ya que su longitud es menor a 1
// mensaje del resultado
alert((cipher(word)));*/
 decipher.addEventListener('click', () => {
/*$('#desencriptar').click(function() {*/
  let palabras = palabra.value;
// Funcion para decifrar la palabra
/*
let decipher=word=> {*/
  // variable para la salida de la palabra encriptada
  let output = '';
  // recorrido dentro de la palabra ingresada
  for (let i = 0; i < palabras.length;i++) {
    // variable en donde se convierte la letra en codigo ascii
    let code = palabras.charCodeAt(i);
    // variable que guarda la conversion de codigo ascii a letra
    let code2 = palabras[i];
    // analizando las letras mayusculas A= 65 Y Z= 90
    if ((code >= 65) && (code <= 90)) {
      // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
      code2 = String.fromCharCode(((code - 65 - 33 + 26*2 ) % 26) + 65);
    } else if ((code >= 97) && (code <= 122)) {//  analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
      code2 = String.fromCharCode(((code - 97 - 33 + 26*2) % 26) + 97);
    }
    // salida de la palabra encriptada
    output += code2;
  }

  result.innerHTML= 'La palabra encriptada es : ' + output ;
});



// Le añadimos función de borrar al botón
var erase = document.getElementById("clearbutton")
erase.addEventListener('click', () => {
  //Utilizamos el elemento  para borrar el campo.
  palabra.value = "";
})

});
