const lista1 = [100, 200, 300, 500, 700, 100];
const lista2 = [100, 200, 700, 100];
function calcularMediaAritmetica(lista) {
  let total = lista.reduce((suma = 0, num) => suma + num);
  let promedio = total / lista1.length;
  return promedio;
}
console.log(calcularMediaAritmetica(lista1));
console.log(calcularMediaAritmetica(lista2));

module.exports = calcularMediaAritmetica;
