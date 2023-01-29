//Business Logic

//Construct pizza

function getSize() {
  let pSize = document.getElementById("size-select");
  let selectedSize = pSize.options[pSize.selectedIndex].text;
  console.log(selectedSize);
  return selectedSize;
}

  function buildVeggieArray() {
  let veggies = []
  let markedBox = document.querySelectorAll('input[name="veg"]:checked');
  markedBox.forEach((checkbox) => {
  veggies.push(checkbox.value);
  });
    
    console.log(veggies);
    return veggies;
  }

  function buildMeatArray() {
  let meat = []
  let markedBox2 = document.querySelectorAll('input[name="meat"]:checked');
  markedBox2.forEach((checkbox) => {
  meat.push(checkbox.value);
  });
    console.log(meat);
    return meat;
  }


function NewPizza(size, veggies, meat) {
  this.size = size;
  this.veggies = veggies;
  this.meat = meat;
};



  function pricePizza() {
    NewPizza.prototype.price = function() {
      let cost = 0
      console.log(veggies.length)
      cost += veggies.length * 3;
      console.log(cost);
      console.log(meat.length);
      cost += meat.length * 5;
      console.log(cost);
        if (this.size === "Small") {
          cost += 12;
        } else if (this.size === "Medium") {
          cost += 16;
        } else if (this.size === "Large") {
          cost += 20;
        }
        console.log(cost);
        return cost;
      }
    };



//UI logic

//Gather pizza information
let selectedSize = ""
  let veggies = []
  let meat = []
  let pizzaPrice = 0
window.onload = function(){
  let form = document.querySelector('form');
  form.onsubmit = function(event){
    event.preventDefault();
      selectedSize = getSize();
      console.log(selectedSize)
      veggies = buildVeggieArray();
      meat = buildMeatArray();
      let myPizza = new NewPizza(selectedSize,[veggies],[meat]);
      console.log(myPizza);
      pricePizza();
      pizzaPrice = myPizza.price();
      document.getElementById("Price").innerText = "Your pizza will cost $" + pizzaPrice
  }
  form.onreset = function reset() {document.getElementById("pizza-form");
  document.getElementById("Price").innerText = ""
  }

}


