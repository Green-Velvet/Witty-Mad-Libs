'use strict';


let rows = 5;
let cols = 5;

const grid = document.getElementById('battleship');

for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {

    let space = document.createElement('div');
    grid.appendChild(space);
    space.id = 's' + j + i;
    let topPosition = j * 5;
    let leftPosition = i * 5;

    space.style.top = topPosition + 'rem';
    space.style.left = leftPosition + 'rem';
  }
}

let hitCount = 0;

let gameBoard = [
  [0, 0, 0, 1, 1],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

grid.addEventListener('click', fireTorpedo, false);

function fireTorpedo(e) {
  if (e.target !== e.currentTarget) {
    let row = e.target.id.substring(1, 2);
    let col = e.target.id.substring(2, 3);

    if (gameBoard[row][col] === 0) {
      e.target.style.background = '#bbb';

      gameBoard[row][col] = 3;

    } else if (gameBoard[row][col] === 1) {
      e.target.style.background = 'red';

      gameBoard[row][col] = 2;

      hitCount++;

      if (hitCount === 6) {
        alert('All enemy battleships have been defeated! You win!');
      }
    } else if (gameBoard[row][col] > 1) {
      alert('Stop wasting your torpedos! You already fired at this location.');
    }
  }
  e.stopPropagation();
}




