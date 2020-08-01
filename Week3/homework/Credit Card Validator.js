'use strict'

//1- Input must be 16 characters
function checkLength(credit){
    if(credit.length !== 16 ){
       return `Invalid! The input ${credit} must be 16 digites!`;
    }
}

//2- All characters must be numbers
function checkTheTypeOf(credit){

    for(let i = 0 ; i< credit.length ; i++ ){

        let theNumber = parseFloat(credit[i]);
        
    
        if(isNaN(theNumber)){
            return `Invalid! The input ${credit} should contain only numbers`;
           
        }
    }

}

// 3- At least two different numbers should be represented.
function checkSimilarNumber(credit){

    let reversestr = (str) => [...str];
  
    let newArray = reversestr(credit);
    
           const checkTheNumber = newArray.every(function(element){
          return (element == newArray[newArray.length-1]);
        
          
          });
    if(checkTheNumber){
        return `Invalid! The input ${credit} should contain at least 2 different types of numbers`;
    }  
}


//4- The last number must be even.
function checkTheLastNumber(credit){

    let lastNumber = parseFloat(credit[credit.length-1]);
    
    // return lastNumber;
     if(lastNumber % 2 !== 0){
    return `Invalid! The input ${credit} the last number should shoud be even`;
     }
    }

// 5-  The sum of all the numbers must be greater than 16
function checkTheTotal(credit){


    let total = 0;

    for(let i = 0 ; i< credit.length ; i++ ){
        let theNumber = parseFloat(credit[i]);
        total += theNumber;
        }

        if(total <= 16){
            return `Invalid! The input ${credit} should be greater than 16`; 
        }  
}



function validateCreditNumber(credit){
    return checkLength(credit) ||
    checkTheTypeOf(credit) ||
    checkSimilarNumber(credit) ||
    checkTheLastNumber(credit) ||
    checkTheTotal(credit);

}


console.log(validateCreditNumber('11111a111111111111'))




