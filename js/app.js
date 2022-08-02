'use strict';
// GLOBAL Variables

let madlibArr = [`London ${noun1} is falling down, ${verb1} down, falling down. London Bridge is ${verb2} down, My ${adj1} ${noun2}`, `My teacher came up with an ${adj1} assignment to invent horrendous soup - the most disgusting soup! I called my horrendous soup ${adj2}.  Its main ingredient is  ${noun1} with steamed ${noun2}.`, `Once upon a ${noun1}, there was a boy named Alfred who decided to build a  ${adj1} tree house. He ${verb1} through his yard and picked up all the spare pieces of paper that he could find. He ${verb2} small ones and big ones amd piled them all up the oak tree. He brought everything back with him to the ${noun2} and started building his ${adj2} tree house.`];



function Madlib(pronoun, noun, verb, adv, adj) {
  this.pronoun = pronoun;
  this.noun = noun;
  this.verb = verb;
  this.adv = adv;
  this.adj = adj;
}

const form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  let newMadlib = new Madlib(
    event.target.pronoun.value,
    event.target.noun.value,
    event.target.verb.value,
    event.target.adv.value,
    event.target.adj.value
  );
  newMadlib.render();
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
