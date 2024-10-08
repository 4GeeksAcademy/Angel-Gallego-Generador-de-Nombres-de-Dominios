const genBoton = document.getElementById("genBoton");
// let imput = document.getElementById("Nick").value;
let nick = "";
let pre = ["el", "tu", "vuestro"];
let mid = ["aterrador", "amante", "programador"];
let fin = ["viciado", "escoces", "despistado"];
let dominio = ["com", "es", "ado"];

// window.onload = function genDomin() {
function introNick() {}
function genDomin() {
  const domGenerados = document.getElementById("domGenerados");
  let dominiosGenerados = " ";
  // let nick = prompt("¿Nick o nombre que te gustaria?");
  for (let i = 0; i < pre.length; i++) {
    for (let j = 0; j < mid.length; j++) {
      for (let k = 0; k < fin.length; k++) {
        for (let l = 0; l < dominio.length; l++) {
          dominiosGenerados +=
            pre[i] + mid[j] + fin[k] + "." + dominio[l] + " ";
        }
      }
    }
  }
  domGenerados.innerHTML = dominiosGenerados;
}
genBoton.addEventListener("click", genDomin);
genDomin();

// genBoton.addEventListener("click", genDomin);
// genDomin();

// for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < adj.length; j++) {
//     for (let k = 0; k < noun.length; k++) {
//       for (let l = 0; l < domain.length; l++) {
//         let strDomainName = pronoun[i] + adj[j] + noun[k] + domain[l];
