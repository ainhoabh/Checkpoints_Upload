// Cree una función JS que acepte 4 argumentos.
// Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
// Si el número creado es mayor que 50, la consola registra
// "¡El número es mayor que 50!". Si es más pequeño, la consola
// registra "¡El número es menor que 50!"

function calculadora(num1, num2, num3, num4) {
    resultado = (num1 + num2) * (num3 + num4)
    if (resultado > 50) {
        console.log("¡El número es mayor que 50!");
    } else if (resultado < 50) {
        console.log("¡El número es menor que 50!");
    } else {
        console.log("Resultado inesperado. Vuelve a intentarlo.");
    }
}

// Esta llamada devuelve "¡El número es menor que 50!":
calculadora(1, 1, 2, 2);

// Esta llamada devuelve "Resultado inesperado. Vuelve a intentarlo."
calculadora(0, 'a', 0, 2);

// Esta llamada devuelve una vez más el mensaje de error, aunque el resultado es el número 50.
// Esto es porque el caso de que el número sea igual a 50 no está recogido dentro de las condiciones expresadas.
// Dependiendo de la intención de la función, podría crearse una condición más para este caso
// o dejar que la función devuelva el mensaje de error en este caso.
calculadora(2, 3, 5, 5);