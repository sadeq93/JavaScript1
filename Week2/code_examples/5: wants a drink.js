'use strict';
let drinkTray = [];
for (i = 0; i < 5; i++) {
  function counter(drink) {
    let count = 0;
    for (drinks of drinkTray) {
      if (drinks === drink) {
        count = count + 1;
      }
    }
    return count;
  }

  let cola = counter('cola');
  let lemonade = counter('lemonade');

  if (cola < 2) {
    drinkTray.push('cola');
  } else if (lemonade < 2) {
    drinkTray.push('lemonade');
  } else {
    drinkTray.push('water');
  }
}
console.log(`“Hey guys, I brought a ${drinkTray}“`);
// ----------------------------- another way but the first is better.
/*
let drinkTray = [];

for (let i = 0; i < 5; i++) {
  // count the number of cola.
  let colaArr = drinkTray.filter(function (value) {
    return value === 'cola';
  });
  let cola = colaArr.length;
  // count the number of lemonade.
  let lemonadeArr = drinkTray.filter(function (value) {
    return value === 'lemonade';
  });
  let lemonade = lemonadeArr.length;
  //condition statement.
  if (cola < 2) {
    drinkTray.push('cola');
  } else if (lemonade < 2) {
    drinkTray.push('lemonade');
  } else {
    drinkTray.push('water');
  }
}
console.log(`"Hey guys, I brought a ${drinkTray}"`);
*/
