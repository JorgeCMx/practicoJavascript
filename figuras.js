// Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}

// console.log("El area del cuadrado es : " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );

// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// console.log("El área del Triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de: " + radioCirculo + "cm");
//Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log("El diámetro del círculo es de: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("El valor de pi es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {

    const diametro = diametroCirculo(radio);

    return PI * diametro;
}
// console.log("El perimetro del círculo es de: " + perimetroCirculo + "cm");
//Área
function areaCirculo(radio){

    return (radio * radio) * PI;
}
    // console.log("El area del círculo es de: " + areaCirculo + "cm^2");

console.groupEnd();


function calcularPerimetroCuadrado(){

    const input= document.getElementById("inputCuadrado");

    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: " + perimetro + "cm");

}

function calcularAreaCuadrado(){

}