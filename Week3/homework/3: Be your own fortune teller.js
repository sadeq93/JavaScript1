'use strict'
let numChildren = ["Iya","Sara","Marian","Daved","Maikul"];
let partnerNames = ["Greet","Samer","Sadeq","Hadeer","Marian"];
let locations = ["Baghdad","London","Sneek","Arnhem","Harderwijk"];
let jobs = ["Architect","Developer","Desiner","Doctor","writer"];

const tellFortune = (childrenNum,partnerNam,location,theJob)=>{

    let childrenNumber = childrenNum[ Math.floor(Math.random() * childrenNum.length)];
    let partnerName = partnerNam[ Math.floor(Math.random() * partnerNam.length)];
    let locationName = location[ Math.floor(Math.random() * location.length)];
    let jobsName = theJob[ Math.floor(Math.random() * theJob.length)];

    return `"You will be a ${jobsName} in ${locationName}, married to ${partnerName} with ${childrenNumber} kids."`
}
console.log(tellFortune(numChildren,partnerNames,locations,jobs))
console.log(tellFortune(numChildren,partnerNames,locations,jobs))
console.log(tellFortune(numChildren,partnerNames,locations,jobs))