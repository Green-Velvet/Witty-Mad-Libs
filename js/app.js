'use strict';
// GLOBAL Variables

let madlibArr = [`London ${noun1} is falling down, ${verb1} down, falling down. London Bridge is ${verb2} down, My ${adj1} ${noun2}`, `My teacher came up with an ${adj1} assignment to invent horrendous soup - the most disgusting soup! I called my horrendous soup ${adj2}.  Its main ingredient is  ${noun1} with steamed ${noun2}.`, `Once upon a ${noun1}, there was a boy named Alfred who decided to build a  ${adj1} tree house. He ${verb1} through his yard and picked up all the spare pieces of paper that he could find. He ${verb2} small ones and big ones amd piled them all up the oak tree. He brought everything back with him to the ${noun2} and started building his ${adj2} tree house.`];



//Global Variables
let nounArr = [];
let verbArr = [];
let adjArr = [];
const form = document.querySelector('form');
let noun1 = 'a';
let noun2 = 'b';
let verb1 = 'c';
let verb2 = 'd';
let adj1 = 'e';
let adj2 = 'f';




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
  noun1 = nounArr[getRandNoun()];
  noun2 = nounArr[getRandNoun()];
  verb1 = verbArr[getRandVerb()];
  verb2 = verbArr[getRandVerb()];
  adj1 = adjArr[getRandAdj()];
  adj2 = adjArr[getRandAdj()];
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
