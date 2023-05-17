function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0 ) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito.";
      muñeco.src = "./img/encriptado.png";

      parrafo.textContent = "";
      
    } else {
      muñeco.src = "./img/oops.jpg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado.";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar.";
    }
  }


  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  

    if (texto.length != 0 ) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito.";
      muñeco.src = "./img/desencriptado.png";
     
      parrafo.textContent = "";
      

    } else {
      muñeco.src = "./img/oops.jpg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado.";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar.";
    }
  }