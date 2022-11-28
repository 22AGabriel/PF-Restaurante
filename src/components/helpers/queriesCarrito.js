
export const Suma = (carrito) => {
    let suma = 0;
    carrito.forEach((item) => {
      suma += item.precio * item.cantidad;
    });
    return suma
};