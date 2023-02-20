const almacen = [
    {tipo: "lavadora", valor: 5000},
    {tipo: "lavadora", valor: 650},
    {tipo: "vaso", valor: 10},
    {tipo: "armario", valor: 1200},
    {tipo: "lavadora", valor: 77}
]
console.log("El codigo que se nos da: ");
almacen.forEach(function(item) {
    console.log(item.valor);
});
console.log("El codigo hecho con la función arrow: ")
almacen.forEach(item => console.log(item.valor));



