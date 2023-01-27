//Business Logic

//Construct pizza

function NewPizza(meat, veggies, size) {
  this.sauce = sauce;
  this.veggies = veggies;
  this.meats = meat;
  this.size = size;
  this.price = 0;
  console.log(NewPizza)
};

NewPizza.prototype.veggiesSelected = function() {
  this.price = this.price + (this.veggies.length + 3);
  return this.price;
};

NewPizza.prototype.meat = function() {
  this.price = this.price + (this.meat.length + 5);
  return this.price;
};

NewPizza.prototype.size = function() {
  if (this.size === "small") {
    this.price += 12;
  } else if (this.size === "medium") {
    this.price += 16;
  } else if (this.size === "large") {
    this.price += 20;
  }
  return this.price;
};




//UI logic

//Gather pizza information
window.addEventListener("load", function pizzaOrder() {
  document.querySelector("form").onsubmit = function(event){
  event.preventDefault();
  

  function pizzaForm() {
  const NewPizza = 
    document.querySelectorAll("form", meats, veggies, sauce, size).value
  
}
  });
