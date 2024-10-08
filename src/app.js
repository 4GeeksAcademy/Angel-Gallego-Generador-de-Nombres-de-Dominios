/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pre = ["tu", "el", "vuestro"];
let mid = ["profesor", "farmeador", "programador"];
let fin = ["aterrador", "vigilante", "despistado"];
let dominio = ["com", "es", "or"];

window.onload = function() {
  let inputNick = document.getElementById("nick");
  let dominioGenerado = document.getElementById("dominioGenerado");

  //Funcion para detectar cuando pulsan la teclca
  inputNick.addEventListener("keydown", function(darIntro) {
    //Especifico que tecla es
    if (darIntro.key === "Enter") {
      // hago que nick sea el valor que meten en el imput del form
      let nick = inputNick.value;

      if (nick === "") {
        dominioGenerado.innerHTML = "Elige un nick primero";
      } else {
        let generandoDominio = " ";
        // inicio el bucle
        for (let i = 0; i < pre.length; i++) {
          for (let j = 0; j < mid.length; j++) {
            for (let k = 0; k < fin.length; k++) {
              for (let l = 0; l < dominio.length; l++) {
                generandoDominio +=
                  nick + pre[i] + mid[j] + fin[k] + "." + dominio[l] + " <br> ";
              }
            }
          }
        }

        dominioGenerado.innerHTML = generandoDominio;
      }
    }
  });
};
