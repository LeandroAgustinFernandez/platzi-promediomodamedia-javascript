let lista1 = [
  100, 200, 300, 500, 700, 100, 100, 200, 400, 500, 700, 500, 700, 100, 200,
  300, 500, 700, 100, 100, 200, 400, 500, 700, 500, 700, 500, 700, 700, 700,
  700, 100, 100, 100, 100, 100,
];
let lista2 = [
  "perro",
  "gato",
  "pajaro",
  "raton",
  "cobayo",
  "serpiente",
  "raton",
  "cobayo",
  "serpiente",
  "raton",
  "cobayo",
  "serpiente",
  "perro",
  "perro",
  "perro",
];
function objectCount(lista) {
  let lista1Count = {};
  lista.map((elemento) => {
    lista1Count[elemento]
      ? (lista1Count[elemento] += 1)
      : (lista1Count[elemento] = 1);
  });
  return lista1Count;
}

function sortListObject(objectCount) {
  let lista1Array = Object.entries(objectCount).sort(
    (valorAcumulado, nuevoValor) => valorAcumulado[1] - nuevoValor[1]
  );
  return lista1Array;
}
function calcularModa(lista) {
  let object = objectCount(lista);
  let arrayOrderer = sortListObject(object);
  let moda = arrayOrderer[arrayOrderer.length - 1][0];
  return moda;
}

console.log(calcularModa(lista1));
console.log(calcularModa(lista2));
