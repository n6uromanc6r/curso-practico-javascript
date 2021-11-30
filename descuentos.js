//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
      return precioConDescuento;
}


function capturaDatos (){
const inputPrice = document.getElementById('InputPrice');
const priceValue = inputPrice.value;

const inputDiscount = document.getElementById('InputDiscount');
const discountValue = inputDiscount.value;

const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

const resultado = document.getElementById('resultado');
resultado.innerText = `El precio es: ${precioConDescuento}`;

}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}) */