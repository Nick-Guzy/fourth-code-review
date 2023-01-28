//Business Logic

//Construct pizza

function MyPizza(size, veggies, meat) {
  this.sauce = sauce;
  this.size = size;
  this.veggies = veggies;
  this.meat = meat;
  this.price = 0;
  console.log("word")
};

let myPizza = new MyPizza(size,[veggies],[meat],price);

MyPizza.prototype.veggiesSelected = function() {
  this.price = this.price += (this.veggies.length * 3);
  console.log(this.price)
  return this.price;
};

MyPizza.prototype.meat = function() {
  this.price = this.price += (this.meat.length * 5);
  console.log(this.price)
  return this.price;
  
};

MyPizza.prototype.size = function() {
  if (this.size === "small") {
    this.price += 12;
  } else if (this.size === "medium") {
    this.price += 16;
  } else if (this.size === "large") {
    this.price += 20;
  }
  console.log(this.price)
  return this.price;
  };




//UI logic

//Gather pizza information
window.addEventListener("load", function pizzaOrder() {
  document.querySelector("form").onsubmit = function(event){
  event.preventDefault();
  
  function pizzaPrice() { 
    document.getElementById("price").innerText = pizzaPrice ;this.price.value;
    return price
      }
    }
  });
