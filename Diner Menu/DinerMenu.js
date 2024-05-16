let breakfastAnswer;
let breakfastPrice;
let entreeAnswer;
let entreePrice;
let dessertAnswer;
let dessertPrice;
let selectedSides = [];
let time;

const breakfast = [
  {name: 'Avocado Toast', price: 9},
  {name: 'Buttered Sourdough', price: 7},
  {name: 'Cinammon Roll', price: 6}
];

const entrees = [
  {name: 'Fried Eggs', price: 15},
  {name: 'Grilled Fish', price: 25},
  {name: 'Roasted Chicken', price: 20},
];

const sides = [
  {name: 'Side Salad', price: 5},
  {name: 'Sweet Potato Chips', price: 5},
  {name: 'White Rice', price: 3},
]

const desserts = [
  {name: 'Rice Pudding', price: 2},
  {name: 'Fruit Salad', price: 2},
  {name: 'Cheese Cake', price: 3}
]

alert(`Bottega Diner Menu`);
function timeCheck() {

  time = prompt('Set the time of day. Please write it in the following 24h format: "HH".')

  if (time >= 22 || time < 6 ) {
    alert('Sorry, we are closed.');
  } else if (time >= 6 && time < 11) {
    alert('It\'s breakfast time.');
    breakfastCheck();
  } else if (time >= 11 && time < 16) {
    alert('It\'s lunch time.');
    entreeCheck();
    sidesCheck();
    dessertCheck();
    bill();
  } else if (time >= 16 && time < 22) {
    alert('It\'s dinner time.');
    entreeCheck();
    sidesCheck();
    dessertCheck();
    bill();
  } else {
    alert('Please write the time again. Please use the 24 hour format "HH". For instance, if it\'s 7pm, write "19".')
    timeCheck();
  }
  
  return 
}

let total = 0;
let counter = 0;
timeCheck();


function breakfastCheck() {
  breakfastAnswer = prompt(`What would you like to have?
  Breakfast
  Avocado Toast - $9 | Buttered Sourdough - $7 | Cinnamon Roll - $6`);
  
  let breakfastAnswerLower = breakfastAnswer.toLowerCase();
  switch (breakfastAnswerLower) {
    case 'avocado toast':
    case 'toast':
      alert('Excellent choice!');
      alert(`That will be $${breakfast[0].price}.`);
      total += breakfast[0].price;
      breakfastAnswer = breakfast[0].name;
      breakfastPrice = breakfast[0].price;
      break;
    case 'buttered sourdough':
    case 'sourdough':
      alert('You won\'t regret it!');
      alert(`That will be $${breakfast[1].price}.`);
      total += breakfast[1].price;
      breakfastAnswer = breakfast[1].name;
      breakfastPrice = breakfast[1].price;
      break;
    case 'cinnamon roll':
    case 'roll':
      alert('You won\'t regret it!');
      alert(`That will be $${breakfast[2].price}.`);
      total += breakfast[2].price;
      breakfastAnswer = breakfast[2].name;
      breakfastPrice = breakfast[2].price;
      break;
    default:
      alert('Please enter a dish from the breakfast menu.');
      breakfastCheck();
  }
  
  
  alert(`You ordered:
  - ${breakfastAnswer} - $${breakfastPrice}
  The total will be $${total}.`);
  
}


function entreeCheck() {
  if (time >= 16 && time < 22) {
    entreeAnswer = prompt(`What would you like to have?
    Entrees
    Fried Eggs - $18 | Grilled Fish - $28 | Roasted Chicken - $23`);
  } else {
    entreeAnswer = prompt(`What would you like to have?
    Entrees
    Fried Eggs - $15 | Grilled Fish - $25 | Roasted Chicken - $20`);
  };
  
  let entreeAnswerLower = entreeAnswer.toLowerCase();
  switch (entreeAnswerLower) {
    case 'grilled fish':
    case 'fish':
      alert('Excellent choice!');
      if (time >= 16 && time < 22) {
        alert(`That will be $${entrees[1].price + 3}.`);
        total += entrees[1].price + 3;
      } else {
        alert(`That will be $${entrees[1].price}.`);
        total += entrees[1].price;
      }
      entreeAnswer = entrees[1].name;
      if (time >= 16 && time < 22) {
        entreePrice = entrees[1].price + 3;
      } else {
        entreePrice = entrees[1].price;
      }
      break;
    case 'fried eggs':
    case 'eggs':
      alert('You won\'t regret it!');
      if (time >= 16 && time < 22) {
        alert(`That will be $${entrees[0].price + 3}.`);
        total += entrees[0].price + 3;
      } else {
        alert(`That will be $${entrees[0].price}.`);
        total += entrees[0].price;
      }
      entreeAnswer = entrees[0].name;
      if (time >= 16 && time < 22) {
        entreePrice = entrees[0].price + 3;
      } else {
        entreePrice = entrees[0].price;
      }
      break;
    case 'roasted chicken':
    case 'chicken':
      alert('You won\'t regret it!');
      if (time >= 16 && time < 22) {
        alert(`That will be $${entrees[2].price + 3}.`);
        total += entrees[2].price + 3;
      } else {
        alert(`That will be $${entrees[2].price}.`);
        total += entrees[2].price;
      }
      entreeAnswer = entrees[2].name;
      if (time >= 16 && time < 22) {
        entreePrice = entrees[2].price + 3;
      } else {
        entreePrice = entrees[2].price;
      }
      break;
    default:
      alert('Please enter a dish from the entrees menu.');
      entreeCheck();
  }
  
}



function sidesCheck() {
  if (time >= 16 && time < 22) {
    sidesAnswer = prompt(`Please tell me a side dish you would like to have. You can order two.
    Side Dishes
    Side Salad - $7 | Sweet Potato Chips - $7 | White Rice - $5
    `);
  } else {
    sidesAnswer = prompt(`Please tell me a side dish you would like to have. You can order two.
    Side Dishes
    Side Salad - $5 | Sweet Potato Chips - $5 | White Rice - $3
    `);
  }
  
  let sidesAnswerLower = sidesAnswer.toLowerCase();
  switch (sidesAnswerLower) {
    case 'side salad':
    case 'salad':
      alert('It goes perfect with your order!');
      if (time >= 16 && time < 22) {
      alert(`That will be $${sides[0].price + 2}.`);
      total += sides[0].price + 2;
      selectedSides.push({ name: sides[0].name, price: sides[0].price + 2});
      } else {
      alert(`That will be $${sides[0].price}.`);
      total += sides[0].price;
      selectedSides.push({ name: sides[0].name, price: sides[0].price });
      }
      counter += 1;
      break;
    case 'sweet potato chips':
    case 'sweet potatoes':
      alert('They\'re delicious!');
      if (time >= 16 && time < 22) {
      alert(`That will be $${sides[1].price + 2}.`);
      total += sides[1].price + 2;
      selectedSides.push({ name: sides[1].name, price: sides[1].price + 2});
      } else {
      alert(`That will be $${sides[1].price}.`);
      total += sides[1].price;
      selectedSides.push({ name: sides[1].name, price: sides[1].price });
      }
      counter += 1;
      break;
    case 'white rice':
    case 'rice':
      alert('Coming right up!');
      if (time >= 16 && time < 22) {
      alert(`That will be $${sides[2].price + 2}.`);
      total += sides[2].price + 2;
      selectedSides.push({ name: sides[2].name, price: sides[2].price + 2});
      } else {
      alert(`That will be $${sides[2].price}.`);
      total += sides[2].price;
      selectedSides.push({ name: sides[2].name, price: sides[2].price });
      }
      counter += 1;
      break;
    default:
      alert('Please enter a dish from the sides menu.');
      sidesCheck();
  }
  
    while (counter < 2) {
      sidesCheck();
    }
  
    
}



function dessertCheck() {
  if (time >= 16 && time < 22) {
    dessertAnswer = prompt(`What would you like to have?
    Desserts
    Rice Pudding - $4 | Fruit Salad - $4 | Cheese Cake - $5`);
  } else {
    dessertAnswer = prompt(`What would you like to have?
    Desserts
    Rice Pudding - $2 | Fruit Salad - $2 | Cheese Cake - $3`);
  }
  let dessertAnswerLower = dessertAnswer.toLowerCase();
  switch (dessertAnswerLower) {
    case 'rice pudding':
    case 'pudding':
      alert('Delicious!');
      if (time >= 16 && time < 22) {
        alert(`That will be $${desserts[0].price + 2}.`);
        total += desserts[0].price + 2;
        dessertPrice = desserts[0].price + 2;
      } else {
        alert(`That will be $${desserts[0].price}.`);
        total += desserts[0].price;
        dessertPrice = desserts[0].price;
      }
      dessertAnswer = desserts[0].name;
      break;
    case 'fruit salad':
    case 'fruit':
      alert('Sweet and healthy!');
      if (time >= 16 && time < 22) {
        alert(`That will be $${desserts[1].price + 2}.`);
        total += desserts[1].price + 2;
        dessertPrice = desserts[1].price + 2;
      } else {
        alert(`That will be $${desserts[1].price}.`);
        total += desserts[1].price;
        dessertPrice = desserts[1].price;
      }
      dessertAnswer = desserts[1].name;
      break;
    case 'cheese cake':
    case 'cake':
      alert('Just the right amount of sweet!');
      if (time >= 16 && time < 22) {
        alert(`That will be $${desserts[2].price + 2}.`);
        total += desserts[2].price + 2;
        dessertPrice = desserts[2].price + 2;
      } else {
        alert(`That will be $${desserts[2].price}.`);
        total += desserts[2].price;
        dessertPrice = desserts[2].price;
      }
      dessertAnswer = desserts[2].name;
      break;
    default:
      alert('Please enter a dish from the desserts menu.');
      dessertCheck();
  }
  return dessertAnswer;
}


function bill () {
  alert(`You ordered:
  - ${entreeAnswer} - $${entreePrice}
  - ${selectedSides[0].name} - $${selectedSides[0].price}
  - ${selectedSides[1].name} - $${selectedSides[1].price}
  - ${dessertAnswer} - $${dessertPrice}
  The total will be $${total}.`);
}