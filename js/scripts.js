//Business Logic

//Construct pizza

function getSize() {
  let pSize = document.getElementById("size-select");
  let selectedSize = pSize.options[pSize.selectedIndex].text;
  console.log(selectedSize);
  return selectedSize;
}

// function buildVeggieArray(veggies) {
//   let numberSelected = 0;
//   for (let i = 0; i < veggies.options.length, i++) {
//     if (veggies.options[i].selected); {
//       numberSelected++;
//     }
//   }
//   return numberSelected;
// };


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


function MyPizza(size, veggies, meat, sauce) {
  this.sauce = sauce;
  this.size = size;
  this.veggies = veggies;
  this.meat = meat;
  this.price = 0;
  console.log("word")
};



  function pricePizza() {
    MyPizza.prototype.veggies = function() {
      this.price = this.price += (this.veggies.length * 3);
    };
    
    MyPizza.prototype.meat = function() {
      this.price = this.price += (this.meat.length * 5);
    };
    
    MyPizza.prototype.size = function() {
      if (this.size === "small") {
        this.price += 12;
      } else if (this.size === "medium") {
        this.price += 16;
      } else if (this.size === "large") {
        this.price += 20;
      }
    }
  };



//UI logic

//Gather pizza information
window.onload = function(){
  let form = document.querySelector('form');
  form.onsubmit = function(event){
    event.preventDefault();
      getSize();
      buildVeggieArray();
      buildMeatArray();
      let myPizza = new MyPizza(selectedSize,[veggies],[meat]);
      pricePizza(myPizza);
  }
}

// window.addEventListener("load", function(){
//   document.querySelector("form").onsubmit = function(event)
//   event.preventDefault()
//     });

  
  // function pizzaPrice() { 
  //   document.getElementById("price").innerText = pizzaPrice ;this.price.value;
  //   return price
  //     }
  //   }
  // });
