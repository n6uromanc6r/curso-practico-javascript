//calcular cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado);
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El perímetro es: ${perimetroCuadrado} cm`);

console.log(`El área es: ${areaCuadrado} cm2`);
console.groupEnd();

// calcular triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.group("Triángulos");
console.log(`Los lados del triángulo miden: ${ladoTriangulo1}, ${ladoTriangulo2}, ${baseTriangulo}`);
console.log(`Su altura es ${alturaTriangulo}`);

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log(`El área del triangulo es: ${areaTriangulo}`)
console.groupEnd();

// circulo

console.group("Circulos");

const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;


console.log(`El radio del círculo es: ${radioCirculo}`);

console.log(`El diametro del círculo es: ${diametroCirculo} cm`);
console.log(`El perímetro del círculo es: ${perimetroCirculo} cm`);
console.log(`El área del círculo es: ${areaCirculo} cm2`);
console.log(`PI: ${PI}`);



console.groupEnd();
