'use strict';
// create a function to calculate the percentage of the grade and put it in a category .
function calculateTheGrades(grade){
  // change the grade number to percentage .
  let percentageNumber = (grade /100) * 100;
  // create conditional statement 
  let Category ;
if(grade >= 90 && grade <= 100){
  Category = 'A' ;
}else if(grade >= 80 && grade <= 89){
  Category = 'B' ;
}else if(grade >= 70 && grade <= 79){
  Category = 'C' ;
}else if(grade >= 60 && grade <= 69){
  Category = 'D' ;
}else if(grade >= 50 && grade <= 59){
  Category = 'E' ;
}else if(grade >= 0 && grade <= 49){
  Category = 'F' ;
}
return ` You got a ${Category} (${percentageNumber} %)!` ;
}


console.log(calculateTheGrades(97));
console.log(calculateTheGrades(81));
console.log(calculateTheGrades(73));
console.log(calculateTheGrades(64));
console.log(calculateTheGrades(52));
console.log(calculateTheGrades(33));
