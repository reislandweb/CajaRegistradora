
Caja Registradora

1.Función para registrar los ingresos
    1.1 - const item => Busca en el arr los valores deseados, si los encuentra es "true" y si no es undefined
    
    1.2 - El IF => si en la variable item encuentra el valor encontrado, el if se lo toma como TRUE y ejecuta la condicion
    1.3 - Si el IF se ejecuta, cogemos la cantidad del ARR original y le sumamos el nuevo valor y lo pintamos por consola.
    1.4 - ELSE IF => En caso de que la variable sea UNDEFINED, cuando llega al IF se lo toma como falso y entonces pasamos al ELSE IF que seria ejecutado.

2. Explicación del Algoritmo: calcularCambio()

La función calcularCambio(precio, pagoCliente) determina la diferencia entre el total pagado y el coste del producto, devolviendo el cambio de forma óptima (utilizando el menor número de billetes y monedas posible) y actualizando el inventario de la caja.

Recorriendo la caja registradora de mayor a menor valor (desde 500 € hasta 0,01 €). En cada denominación, intenta entregar la máxima cantidad posible antes de pasar a la siguiente moneda o billete más pequeño.

Flujo de Ejecución Paso a Paso
Validaciones Previas:

Pago exacto (pagoCliente === precio): Muestra que no hay cambio que devolver.

Pago insuficiente (pagoCliente < precio): Notifica que falta dinero para completar la compra.

Cálculo de la Deuda Pendiente:

Si pagoCliente > precio, se calcula la diferencia a devolver y se almacena en valorPendiente.

Bucle de Extracción de Cambio (for + while):

Recorrido (for): Revisa elemento por elemento el array cajaRegistradora.

Descuento progresivo (while): Mientras el valor del billete/moneda actual sea menor o igual a valorPendiente Y queden unidades en la caja:

Resta el valor de la denominación a valorPendiente.

Resta 1 a la existencia en cajaRegistradora[i].cantidad.

Incrementa en 1 el contador local cantidadAEntregar.

Registro Manual del Desglose (Sin métodos de array):

Si se entregó al menos una unidad (cantidadAEntregar > 0), se asigna un nuevo objeto directamente en la posición posicionCambio del array cambioDevolver y se incrementa el índice manual (posicionCambio = posicionCambio + 1).

Verificación y Resultado Final:

Si valorPendiente === 0, el cambio se ha entregado con éxito y se imprime el desglose.

Si valorPendiente > 0, significa que no había cambio exacto disponible en la caja.

Finalmente, se imprime el estado actualizado del inventario de la caja registradora.