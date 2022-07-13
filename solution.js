function exponential(a, b) {
  //   let expo = 0;

  if (typeof a === "number" && typeof b === "number") {
    for (let i = 1; i <= b; i++) {
      console.log(a ** i);
      // console.log(expo);
    }
  }
  //   console.log(expo);
}

exponential(2, 8);

let fruit = "mango";

function printFavoriteFruit(fruit) {
  fruit = "apple";
  console.log("My favourite fruit is", fruit);
}

printFavoriteFruit(fruit);

function exponent(a, b) {
  let result = a ** b;
  console.log(result);
}
exponent(2, 8);
// console.log(exponent(3, 2));
