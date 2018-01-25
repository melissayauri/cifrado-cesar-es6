window.addEventListener('load', function(event) {
// Funcion para cifrar la palabra
 $('#encriptar').click(function() {
    var palabra = $('#palabra').val().trim();
    /*
let cipher = word =>  {
  // variable para la salida de la palabra encriptada*/
  let output = '';
  // recorrido dentro de la palabra ingresada
  for (let i = 0; i < palabra.length;i++) {
    // variable en donde se convierte la letra en codigo ascii
    let code = palabra.charCodeAt(i);
    // variable que guarda la conversion de codigo ascii a letra
    let code2 = palabra[i];

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
$('#resultado').text('La palabra encriptada es : ' + output );
});
/*
// entrada de la frase a encriptar
do {
  let word = prompt('Escribir el texto a encriptar');
  cipher(word);
} while (word.length <= 1);// no recibe numero, ni campo vacio ya que su longitud es menor a 1
// mensaje del resultado
alert((cipher(word)));*/

$('#desencriptar').click(function() {
   var palabra = $('#palabra').val().trim();
// Funcion para decifrar la palabra
/*
let decipher=word=> {*/
  // variable para la salida de la palabra encriptada
  let output = '';
  // recorrido dentro de la palabra ingresada
  for (let i = 0; i < palabra.length;i++) {
    // variable en donde se convierte la letra en codigo ascii
    let code = palabra.charCodeAt(i);
    // variable que guarda la conversion de codigo ascii a letra
    let code2 = palabra[i];
    // analizando las letras mayusculas A= 65 Y Z= 90
    if ((code >= 65) && (code <= 90)) {
      // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
      code2 = String.fromCharCode(((code - 65 - 33 + 26*2) % 26) + 65);
    } else if ((code >= 97) && (code <= 122)) {//  analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
      code2 = String.fromCharCode(((code - 97 - 33+ 26*2) % 26) + 97);
    }
    // salida de la palabra encriptada
    output += code2;
  }


$('#resultado').text('La palabra encriptada es : ' + output );
});
/*
// entrada de la frase a encriptar
do {
  let word = prompt('Escribir el texto a descifrar');
  decipher(word);
} while (word.length <= 1);// no recibe numero, ni campo vacio ya que su longitud es menor a 1
// mensaje del resultado
alert((decipher(word)));*/
/*
let validate = date => {
  for (let i = 0; i < date.length; i++) {
    if ((date.charCodeAt(i) > 64 && date.charCodeAt(i) < 91) || (date.charCodeAt(i) > 96 && date.charCodeAt(i) < 123)) // condicionamos a que solo se ingrese letras o mayusculas o minusculas pasando a ascii, una vez convertido condicionamos a que este entre el rango
      return date;
    else if (date === null)
      return document.write('[ERROR]'); // no ingrese nada
    else
      return document.write('[ERROR]'); // ingrese números o símbolos en el primer valor
  }
};
*/
/*

*/
});
