alert("BIENVENID@S");

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

function Fundacion(nombre, anioFundacion, cantidadSocios, fundador) {
  this.nombre = nombre,
  this.anioFundacion = anioFundacion,
  this.cantidadSocios = cantidadSocios;
  this.fundador = fundador;
}

const fundacion1 = new Fundacion(
  "Marcelina Menerces",
  2009,
  8,
  "Carlos Gatica"
);
const fundacion2 = new Fundacion(
  "Marcelina Menerces 2",
  2019,
  8,
  "Carlos Gatica"
);

console.log(fundacion1);
console.log(fundacion2);
