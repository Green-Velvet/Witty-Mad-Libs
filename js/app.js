'use strict';
// GLOBAL Variables

let noun1 = 'noun1';
let noun2 = 'noun2';
let verb1 = 'verb1';
let verb2 = 'verb2';
let adj1 = 'adj1';
let adj2 = 'adj2';

let madlibArr = [`London ${noun1} is falling down, ${verb1} down, falling down. London Bridge is ${verb2} down, My ${adj1} ${noun2}`, `My teacher came up with an ${adj1} assignment to invent horrendous soup - the most disgusting soup! I called my horrendous soup ${adj2}.  Its main ingredient is  ${noun1} with steamed ${noun2}.`, `Once upon a ${noun1}, there was a boy named Alfred who decided to build a  ${adj1} tree house. He ${verb1} through his yard and picked up all the spare pieces of paper that he could find. He ${verb2} small ones and big ones amd piled them all up the oak tree. He brought everything back with him to the ${noun2} and started building his ${adj2} tree house.`];

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

  madlib.textContent = madlibText();

  // madlib.textContent = [`London ${noun1} is falling down, ${verb1} down, falling down. London Bridge is ${verb2} down, My ${adj1} ${noun2}`, `My teacher came up with an ${adj1} assignment to invent horrendous soup - the most disgusting soup! I called my horrendous soup ${adj2}.  Its main ingredient is  ${noun1} with steamed ${noun2}.`, `Once upon a ${noun1}, there was a boy named Alfred who decided to build a  ${adj1} tree house. He ${verb1} through his yard and picked up all the spare pieces of paper that he could find. He ${verb2} small ones and big ones amd piled them all up the oak tree. He brought everything back with him to the ${noun2} and started building his ${adj2} tree house.`];
  container.appendChild(madlib);
}

function madlibText() {
  let a = getRandNoun();
  noun1 = nounArr[a];
  a = getRandNoun();
  noun2 = nounArr[a];
  a = getRandVerb();
  verb1 = verbArr[a];
  a = getRandVerb();
  verb2 = verbArr[a];
  a = getRandAdj();
  adj1 = adjArr[a];
  a= getRandAdj();
  adj2 = adjArr[a];
  a = getRandMadlib();
  return madlibArr[a];
}

function handleSubmit(event) {
  console.log('inside handle');
  // event.preventDefault();
  nounArr.push(event.target.noun1.value);
  nounArr.push(event.target.noun2.value);
  verbArr.push(event.target.verb1.value);
  verbArr.push(event.target.verb2.value);
  adjArr.push(event.target.adj1.value);
  adjArr.push(event.target.adj2.value);
  updateStorage();
}


function updateStorage() {
  const arrayString1 = JSON.stringify(nounArr);
  const arrayString2 = JSON.stringify(verbArr);
  const arrayString3 = JSON.stringify(adjArr);
  localStorage.setItem('noun', arrayString1);
  localStorage.setItem('verb', arrayString2);
  localStorage.setItem('adj', arrayString3);
  
}

function getStorage() {
  // retrieve data from local storage
  const data1 = localStorage.getItem('noun');
  const data2 = localStorage.getItem('verb');
  const data3 = localStorage.getItem('adj');
  // convert the data (array) from a string to something that we can use in JavaScript.
  const inputData1 = JSON.parse(data1);
  const inputData2 = JSON.parse(data2);
  const inputData3 = JSON.parse(data3);

  // If this is the first time we visit the page, there will not be an array for us to use in localStorage
  if (inputData1 !== null) {
    nounArr = inputData1;
  }
  if (inputData2 !== null) {
    verbArr = inputData2;
  }
  if (inputData1 !== null) {
    adjArr = inputData3;
  }
}

//Executable Code

getStorage();
renderMadlib();
form.addEventListener('submit', handleSubmit);
