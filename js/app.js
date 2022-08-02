'use strict';

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
