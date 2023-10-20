function cheapProducts(array) {
  let newArray = [];

  for (let i= 0; i < array.length; i++){
    if (array[i].price < 10){
      newArray.push(array[i].name)
    }
    console.log(array[i].price);
  }
  return newArray
}

const products2 = [ 
  { name: "rice", price: 10 }, 
  { name: "panela", price: 20 }, 
  { name: "pasta", price: 16 }, 
  { name: "eggs", price: 37 },
];

const products1 = [
  { name: "rice", price: 10 }, 
  { name: "panela", price: 5 }, 
  { name: "pasta", price: 16 }, 
  { name: "eggs", price: 8 },
]
console.log(cheapProducts(products1))
console.log(cheapProducts(products2))