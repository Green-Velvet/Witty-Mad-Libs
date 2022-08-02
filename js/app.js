'use strict';

//Global Variables



//Object Constructors



//Functional Logic

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function updateStorage() {
  const arrayString = JSON.stringify(userInputArr);
  console.log(arrayString);
  localStorage.setItem('input', arrayString);
}

function getStorage() {
  // retrieve data from local storage
  const data = localStorage.getItem('input');
  // convert the data (array) from a string to something that we can use in JavaScript.
  const inputData = JSON.parse(data);

  // If this is the first time we visit the page, there will not be an array for us to use in localStorage
  if (inputData !== null) {
    userInputArr = inputData;
    // }
  }
}



//Executable Code