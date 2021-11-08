//calcular cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado){
   return lado * lado; 
}

console.groupEnd();
// calcular triángulo
console.group("Triángulos");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2
}

console.groupEnd();

// circulo

console.group("Circulos");
const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio*radio) * PI;
}

console.groupEnd();


// Funciones

function calcularPerimetroCuadrado(){
const input = document.getElementById("inputCuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(`El perímetro es: ${perimetro}`);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(`El área es: ${area}`);
}

function calcularPerimetroTriangulo (){
const inputLado1 = document.getElementById("inputLado1");
const valueLado1 = inputLado1.value;
const inputLado2 = document.getElementById("inputLado2");
const valueLado2 = inputLado2.value;
const inputBase = document.getElementById("inputBase");
const valueBase = inputBase.value;

const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
alert(`El perímetro es: ${perimetro}`);
}
function clacularAreaTriangulo (){
    const inputLado1 = document.getElementById("inputLado1");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("inputLado2");
    const valueLado2 = inputLado2.value;
    const inputBase = document.getElementById("inputBase");
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("inputAltura");
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(inputBase,inputAltura);
    alert(`El área es: ${area}`);
}

function calcularPerimetroCirculo (){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = inputRadio.value;

    const perimetro = perimetroCirculo(valueRadio);
    alert(`El perímetro es: ${perimetro}`);


}
function calcularAreaCirculo (){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = inputRadio.value;

    const area = areaCirculo(valueRadio);
    alert(`El área es: ${area}`);
}


