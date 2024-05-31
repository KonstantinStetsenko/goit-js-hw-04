


function isEnoughCapacity(products, containerSize) {
let totalQuantity=0;

for (const key in products) {
totalQuantity=+products[key]
}
return totalQuantity<=containerSize
}


console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false