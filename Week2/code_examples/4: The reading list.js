'use strict';
let readingMaterial = [
    { title: 'Why I am not a Christian', author: 'Bertrand Russell', alreadyRead: true },
    { title: 'Zidane', author: 'Frédéric Hermel', alreadyRead: false },
    { title: 'The Magic of Reality', author: 'Richard Dawkins', alreadyRead: true },
  ];
  
  for (let books of readingMaterial) {
    console.log(`${books.title} by ${books.author}`);
    if (books.alreadyRead === true) {
      console.log(`You already read ${books.title}`);
    } else {
      console.log(`You still need to read "${books.title}"`);
    }
  }