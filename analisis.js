let salarios = colombia.map((persona) => persona.salary);
salarios = salarios.sort((salarya, salaryb) => salarya - salaryb);

const esPar = (num) => num % 2 == 0;
function calcularMediaAritmetica(lista) {
  let total = lista.reduce((suma = 0, num) => suma + num);
  let promedio = total / lista.length;
  return promedio;
}
function mediana(lista) {
  let mediana;
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    let itemA = lista[mitad - 1];
    let itemB = lista[mitad];
    mediana = calcularMediaAritmetica([itemA, itemB]);
    return mediana;
  } else {
    mediana = lista[mitad];
    return itemMitad;
  }
}

const extraerValorePorPorcentaje = (percent, list) => {
  let spliceStart = (list.length * (100 - percent)) / 100;
  let spliceEnd = list.length - spliceStart;
  console.log({
    spliceStart,
    spliceEnd,
  });
  return list.splice(spliceStart, spliceEnd);
};

const medianaGeneral = mediana(salarios);
const medianaTopPorcentaje = mediana(extraerValorePorPorcentaje(10, salarios));

console.log({
  medianaGeneral,
  medianaTopPorcentaje,
});
