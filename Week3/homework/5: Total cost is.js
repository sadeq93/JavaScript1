'use strict'
let cartForParty = {
    chips: 0.9,
    chocolate: 2.3,
    banana: 0.3,
    cola: 1.6,
    water: 0.5
 
}
const calculateTotalPrice = (object)=>{
    let total = 0 ;
for (let i in object){
     total += object[i];
   
}
return `Total: €${total}`;
}

console.log(calculateTotalPrice(cartForParty));