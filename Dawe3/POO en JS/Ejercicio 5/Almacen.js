const almacen = [
    {tipo: "lavadora", valor: 5000},
    {tipo: "lavadora", valor: 650},
    {tipo: "vaso", valor: 10},
    {tipo: "armario", valor: 1200},
    {tipo: "lavadora", valor: 77}
]

let totalValorLavadoras = almacen.filter(function(element) {return element.tipo === "lavadora";})
.reduce(function(acc, element) {return acc + element.valor;}, 0);


console.log(totalValorLavadoras); // se espera 5727
