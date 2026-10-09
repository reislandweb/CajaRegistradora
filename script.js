//EJERCICIOS NIVEL BASICO

// Ejercicio 1
console.log("--Ejercicio 1--");

function suma(a,b) {
    return a + b ;
}
console.log(suma(3,5));

// Ejercicio 2
console.log("--Ejercicio 2--");

function parImpar(number) {
    if(number%2 == 0) {
        console.log("Numero par");
    }else {
        console.log("Numero inmpar");
    }
    return number;
}
console.log(parImpar(21));

// Ejercicio 3
console.log("--Ejercicio 3--");

function maximoNumero(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) 
        console.log(`El numero:${number1} es mayor que ${number2} y ${number3}`);
    else if (number2 > number1 && number2 > number3) 
        console.log(`El numero:${number2} es mayor que ${number1} y ${number3}`);
    else if (number3 > number1 && number3 > number2) 
        console.log(`El numero:${number3} es mayor que ${number2} y ${number1}`);
    return number1, number2, number3;
}
console.log(maximoNumero(6,2,1));

// Ejercicio 4
console.log("--Ejercicio 4--");

function invertirCadena(texto) {
    let resultado = '';
    for (let i = texto.length -1; i >= 0; i--) {
        resultado += texto[i];
    }
    return resultado;
}
console.log(invertirCadena("jesuscristo"));

// Ejercicio 5
console.log("--Ejercicio 5--");

function factorial(number1) {
    let resultado = 1;
    for (let i = 1; i <= number1; i++) {
          resultado *= i;
    }
    return resultado;
}
console.log(factorial(6));

// Ejercicio 6
console.log("--Ejercicio 6--");

function palindromo(frase) {

    let normalizada = frase.toLowerCase().replace(/\s/g, ""); 

    let invertida = normalizada.split("").reverse().join("");
    //split convierte en arr
    //reverse le da la vuelta a la frase
    //join junta todo
    return normalizada === invertida;
}
console.log(palindromo("Anita lava la tina"));

// Ejercicio 7
console.log("--Ejercicio 7--");

function contarVocales(frase) {
    let vocales = frase.match(/[aeiou]/g); // /[aeiou]/g => Expresion regular
    let conteo = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    vocales.forEach(v => {
        let letra = v.toLowerCase();
        conteo[letra]++;
    })
    return conteo;
}
console.log(contarVocales("vamos a ver cuantasc vocales existen en esta frase"));

// Ejercicio 8
console.log("--Ejercicio 8--");

const arr = [12, 33,3,45,95,901];
const mayor = Math.max(...arr);
console.log(mayor);

let mayor1 = arr[0];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > mayor1) mayor1 = arr[i];
}
console.log(mayor1);


// Reto: Algoritmo de caja registradora
console.log("--caja registradora--");

const cajaRegistradora = [
    {tipo: "Billetes" , valor: 500, cantidad: 0},
    {tipo: "Billetes" , valor: 200, cantidad: 0},
    {tipo: "Billetes" , valor: 100, cantidad: 0},
    {tipo: "Billetes" , valor: 50, cantidad: 1},
    {tipo: "Billetes" , valor: 20, cantidad: 4},
    {tipo: "Billetes" , valor: 10, cantidad: 8},
    {tipo: "Billetes" , valor: 5, cantidad: 2},
    {tipo: "Monedas" , valor: 25, cantidad: 5},
    {tipo: "Monedas" , valor: 1, cantidad: 4},
    {tipo: "Monedas" , valor: 0.50, cantidad: 0},
    {tipo: "Monedas" , valor: 0.20, cantidad: 0},
    {tipo: "Monedas" , valor: 0.10, cantidad: 1},
    {tipo: "Monedas" , valor: 0.05, cantidad: 2},
    {tipo: "Monedas" , valor: 0.02, cantidad: 3},
    {tipo: "Monedas" , valor: 0.01, cantidad: 1}
]

// Función para registrar los ingresos
function ingresarDinero(tipo, valor, cantidadAñadir) {
  const item = cajaRegistradora.find(elem => elem.tipo === tipo && elem.valor === valor); // 1.1

    /*CON BUCLE FOR
    const item = undefined;
    for (let i = 0; i < cajaRegistradora.length; i++) {
        if(cajaRegistradora[i].tipo === tipo && cajaRegistradora[i].valor === valor) {
            item = cajaRegistradora[i];
            break;
        }
    }*/

  if (item) { // 1.2
    item.cantidad += cantidadAñadir; // 1.3
    console.log(`✅ Se añadieron ${cantidadAñadir}  ${tipo} de ${valor}€. Nueva cantidad: ${item.cantidad}`);
  } else { // 1.4
    console.log(`❌ No existe ${tipo} con valor ${valor}`);
  }
}
//Simulacion de pagos + caja registradora actual
//ingresarDinero("Billetes", 200, 1); // Añade 1 billete de 200
//ingresarDinero("Billetes", 20, 2);   // Añade 2 billetes de 20
//ingresarDinero("Monedas", 0.50, 3);  // Añade 3 monedas de 0.50
//console.log(cajaRegistradora);

function calcularCambio(precio, pagoCliente) {

    
    if (pagoCliente === precio) {
        console.log("Pago exacto, no hay cambio");
    } else if (pagoCliente < precio) {
        console.log("Falta dinero");
    } else {
        let valorPendiente = pagoCliente - precio; // 50 - 20 = 30
        let cambioDevolver = [];
        let posicionCambio = 0;
        for (let i = 0; i < cajaRegistradora.length; i++) {
            // Contador para saber cuántas unidades de billete/moneda daremos
            let cantidadAEntregar = 0;
            while (valorPendiente >= cajaRegistradora[i].valor && cajaRegistradora[i].cantidad > 0) {
                // 1. Restamos el valor de la deuda pendiente
                valorPendiente = valorPendiente - cajaRegistradora[i].valor;
                // 2. Restamos 1 unidad del inventario de la caja
                cajaRegistradora[i].cantidad = cajaRegistradora[i].cantidad - 1;
                // 3. Contamos 1 unidad para el cambio
                cantidadAEntregar = cantidadAEntregar + 1;
            }
            // Si entregamos al menos 1 unidad de esta moneda
            if (cantidadAEntregar > 0) {
                cambioDevolver[posicionCambio] = {
                tipo: cajaRegistradora[i].tipo,
                valor: cajaRegistradora[i].valor,
                cantidad: cantidadAEntregar
                };
                // Incrementamos el índice del array de cambio a mano
                posicionCambio = posicionCambio + 1;
            }
        }
        if (valorPendiente === 0) {
            console.log("💶 Desglose del cambio a devolver:", cambioDevolver);
        } else {
            console.log("❌ No hay cambio suficiente en la caja para dar el importe exacto.");
        }
    }
    console.log("📦 Estado actual de la caja:", cajaRegistradora);
}
// Paso A: Ingresamos los billetes que nos entrega el cliente
ingresarDinero("Billetes", 100, 2); // El cliente nos paga con un billete de 50€
ingresarDinero("Billetes", 200, 1);
ingresarDinero("Billetes", 50, 2); 

// Paso B: Calculamos el cambio para un artículo de 13,25€ pagado con 50€
calcularCambio(300, 500);