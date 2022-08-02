'use strict';

//Global Variables
let nounArr = [];
let verbArr = [];
let adjArr = [];
const form = document.querySelector('form');




//Functional Logic

function getRandMadlib() {
  return Math.floor(Math.random() * madlibArr.length);
}

function getRandNoun() {
  return Math.floor(Math.random() * nounArr.length);
}

function getRandVerb() {
  return Math.floor(Math.random() * verbArr.length);
}

function getRandAdj() {
  return Math.floor(Math.random() * adjArr.length);
}

function renderMadlib() {
  let container = document.getElementById('madlib');
  let madlib = document.createElement('p');
  madlib.textContent = madlibArr[getRandMadlib()];
  container.appendChild(madlib);
  let noun1 = nounArr[getRandNoun()];
  let noun2 = nounArr[getRandNoun()];
  let verb1 = verbArr[getRandVerb()];
  let verb2 = verbArr[getRandVerb()];
  let adj1 = adjArr[getRandAdj()];
  let adj2 = adjArr[getRandAdj()];
}

function handleSubmit(event) {
  event.preventDefault();
  nounArr.push(event.target.noun1.value);
  nounArr.push(event.target.noun2.value);
  verbArr.push(event.target.verb1.value);
  verbArr.push(event.target.verb2.value);
  adjArr.push(event.target.adj1.value);
  adjArr.push(event.target.adj2.value);
}

form.addEventListener('submit', handleSubmit);

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

renderMadlib();