const entrees = [
    {name: 'fried eggs', price: 15},
    {name: 'grilled fish', price: 25},
    {name: 'roasted chicken', price: 20},
    {name: 'ceasar salad', price: 18}
  ];
  
  const sides = [
    {name: 'side salad', price: 5},
    {name: 'sweet potato chips', price: 5},
    {name: 'white rice', price: 3},
    {name: 'potato chips', price: 3},
    {name: 'grilled mushrooms', price: 5}
  ]
  
  alert(`Bottega Diner Menu
  
  Entrees
  - Fried Eggs - $15
  - Grilled Fish - $25
  - Roasted Chicken - $20
  - Ceasar Salad - $18
  
  Side Dishes
  - Side Salad - $5
  - Sweet Potato Chips - $5
  - White Rice - $3
  - Potato Chips - $3
  - Grilled Mushrooms - $5`);
  
  
  let total = 0;
  function entreeCheck() {
    let entreeAnswer = prompt('What would you like to have?');
    let entreeAnswerLower = entreeAnswer.toLowerCase();
    switch (entreeAnswerLower) {
      case 'grilled fish':
      case 'fish':
        alert('Excellent choice!');
        alert(`That will be $${entrees[1].price}.`);
        total += entrees[1].price;
        break;
      case 'fried eggs':
      case 'eggs':
        alert('You won\'t regret it!');
        alert(`That will be $${entrees[0].price}.`);
        total += entrees[0].price;
        break;
      case 'roasted chicken':
      case 'chicken':
        alert('You won\'t regret it!');
        alert(`That will be $${entrees[2].price}.`);
        total += entrees[2].price;
        break;
      case 'ceasar salad':
      case 'salad':
        alert('The healthy choice!');
        alert(`That will be $${entrees[3].price}.`);
        total += entrees[3].price;
        break;
      default:
        alert('Please enter a dish from the entrees menu.');
        entreeCheck();
    }
    
  }
  
  
  let counter = 0;
  function sidesCheck() {
    let sidesAnswer = prompt('Please tell me a side dish you would like to have. You can order two.');
    let sidesAnswerLower = sidesAnswer.toLowerCase();
    
    switch (sidesAnswerLower) {
      case 'side salad':
      case 'salad':
        alert('It goes perfect with your order!');
        alert(`That will be $${sides[0].price}.`);
        total += sides[0].price;
        counter += 1;
        break;
      case 'sweet potato chips':
      case 'sweet potatoes':
        alert('They\'re delicious!');
        alert(`That will be $${sides[1].price}.`);
        total += sides[1].price;
        counter += 1;
        break;
      case 'white rice':
      case 'rice':
        alert('Coming right up!');
        alert(`That will be $${sides[2].price}.`);
        total += sides[2].price;
        counter += 1;
        break;
      case 'potato chips':
      case 'chips':
        alert('I always order those, too!');
        alert(`That will be $${sides[3].price}.`);
        total += sides[3].price;
        counter += 1;
        break;
      case 'grilled mushrooms':
      case 'mushrooms':
        alert('They\'re so fresh!');
        alert(`That will be $${sides[4].price}.`);
        total += sides[4].price;
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
  
  entreeCheck();
  sidesCheck();
  alert(`The total will be ${total}.`);
  