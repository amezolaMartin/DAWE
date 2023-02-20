class ArrayOrdenado {
  constructor(comparador) {
    this.comparador = comparador;
    this.contenido = [];
  }

  findPos = (elt) => {
    // Find the index where `elt` should be inserted using `findIndex`.
    const index = this.contenido.findIndex((element) => this.comparador(elt, element) < 0);
    // If `index` is greater than or equal to 0, `elt` should be inserted at `index`.
    // Otherwise, `elt` should be inserted at the end of the array.
    return index >= 0 ? index : this.contenido.length;
  }

  insert = (elt) => {
    // Find the index where `elt` should be inserted.
    const index = this.findPos(elt);
    // Use `splice` to insert `elt` at `index`.
    this.contenido.splice(index, 0, elt);
  }
}

// Create a new instance of `ArrayOrdenado` with a comparator function that compares numbers.
const ordenado = new ArrayOrdenado((a, b) => a - b);
// Insert some elements into the `ordenado` array in sorted order.
ordenado.insert(5);
ordenado.insert(1);
ordenado.insert(2);
ordenado.insert(4);
ordenado.insert(3);
// Print the `contenido` array to the console.
console.log("array:", ordenado.contenido);
// array: [1, 2, 3, 4, 5]
