'use strict'
  let Fname = "Sadeq";
  let Lname = "Al-Dallal";
  let mycar = {color:"black",year:2020}
  let mymac = {color:"silver",year: 2017}

const typeChecker = function(var1,var2){
  let first = typeof(var1);
  let second = typeof(var2);

if(first === second){
console.log("variable is the same");
}else{
  console.log("variable is not the same");
}
};
typeChecker(Fname,Lname);
typeChecker(Fname,mycar);
typeChecker(Fname,mymac);
typeChecker(Lname,mycar);
typeChecker(Lname,mymac);
typeChecker(mycar,mymac);
