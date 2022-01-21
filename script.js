
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


function encriptacion(){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector("#input-texto").value;
}
    var botonencriptar= document.querySelector("#btn-encriptacion"); botonencriptar.onclick = encriptacion;

function desencriptacion (){ 
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector(".text-input-salida").value = textoCifrado; 
        document.querySelector("#input-texto").value;
}
    var botondesencriptar = document.querySelector("#btn-desencriptacion"); botondesencriptar.onclick = desencriptacion;

function copy() {
    var copyText = document.querySelector("#input-texto").value;
        copyText.select();
        document.querySelector("copy").value = copyText;
}