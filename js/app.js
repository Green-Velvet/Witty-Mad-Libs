'use strict';

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
