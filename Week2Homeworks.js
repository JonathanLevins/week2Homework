let pizzaPlace = "Jon's famous pizza";
let numberOfToppings = 10;
console.log(pizzaPlace + " " + typeof pizzaPlace
 + " " + numberOfToppings + " " + typeof numberOfToppings);
let sentence = `${pizzaPlace} is the worlds greatest place to get your pizza pie with over ${numberOfToppings} toppings to choose from!`;
console.log(sentence);
if(numberOfToppings >= 10){
  console.log("A whole lot of pizza.");
}
else{
  console.log("Quality not quantity");
}
