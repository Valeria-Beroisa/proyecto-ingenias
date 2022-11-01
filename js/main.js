/*alert("BIENVENID@S");

function saludar() {
  let nombre = prompt("Ingrese su nombre");
  console.log("hola desde la funcion saludar ():" + nombre);
  alert("Gracias " + nombre + " " + " por visitarnos!!");
}

saludar();

edad = prompt("ingrese su edad");

if (edad > 18) {
  console.log("es mayor de edad");
} else {
  console.log("Es menor de edad");
}
*/

function Fundacion(nombre, anioFundacion, cantidadSocios, fundador) {
  (this.nombre = nombre),
    (this.anioFundacion = anioFundacion),
    (this.cantidadSocios = cantidadSocios);
  this.fundador = fundador;
  this.hablar = function () {
    console.log(
      "Desde la Fundacion " + this.nombre + "  esperamos ser de gran ayuda"
    );
  };
}

const fundacion1 = new Fundacion(
  "Marcelina Menerces",
  2009,
  4,
  "Carlos Gatica"
);
const fundacion2 = new Fundacion(
  "Marcelina Menerces 2",
  2019,
  4,
  "Carlos Gatica"
);

let nombreSocios = [
  "Carlos Oyazun",
  "Mario Benavides",
  "Martin Rivas",
  "Jorge Benitez",
];

console.log(fundacion1);
console.log(fundacion2);
console.log(Fundacion.length);
fundacion1.hablar();
console.log(nombreSocios);
console.log(nombreSocios.length);
nombreSocios.push("Ricardo Julian");

const saludo = document.getElementById("clicksaludo");
saludo.onclick = graciasSaludo;

function graciasSaludo() {
  alert("Gracias por tu colaboracion!!");
}

let btn = document.getElementById("btnPrincipal");
btn.addEventListener("click", mostrarParrafo);
function mostrarParrafo() {
  let parrafo = document.getElementById("mostrar");
  mostrar.style.display = "block";
}

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
  event.preventDefault();
  let formulario = event.target;
  console.log(formulario.children[1].value);
  console.log("Formulario enviado para validar");
}
