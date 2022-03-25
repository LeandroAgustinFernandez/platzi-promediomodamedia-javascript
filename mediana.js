let lista1 = [100, 200, 300, 500, 700, 100, 100, 200, 400, 500, 700, 500, 700];
lista1 = lista1.sort();
console.log(lista1);
const mitadLista = lista1.length / 2;
console.log(mitadLista);
let mediana;
function esPar(lista) {
  return lista.length % 2 == 0 ? true : false;
}

function calcularMediaAritmetica(lista) {
  let total = lista.reduce((suma = 0, num) => suma + num);
  let promedio = total / lista1.length;
  return promedio;
}

if (esPar(lista1)) {
  let valor1 = lista1[mitadLista - 1];
  let valor2 = lista1[mitadLista];
  mediana = calcularMediaAritmetica([valor1, valor2]);
  console.log(mediana);
} else {
  mediana = lista1[Math.floor(mitadLista)];
  console.log(mediana);
}
