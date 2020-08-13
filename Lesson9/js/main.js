function randColor() {
  var r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256));
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function generateBlock() {

  function getRow() {
    const divRow = document.createElement('div');
    divRow.className = "row";
    return document.body.append(divRow);
  }

  function getSquares() {

    function getSquare() {
      const square = document.createElement('div');
      square.className = "square";
      square.style.backgroundColor = randColor();
      return document.querySelector('.row').append(square);
    }

    for (var i = 0; i < 25; i++) {
      getSquare();
    }
    return;
  }
  getRow();
  getSquares();
  return;
}

const generateBlocksInterval = () =>
  interv = setInterval(() => changeColor(), 300);

let interv = 0;

function stop() {
  clearInterval(interv);
}

function delSquares() {
  if (document.querySelector('.row')) document.querySelector('.row').remove('div');
}

function changeColor() {
  document.querySelectorAll('.square').forEach((item) => item.style.backgroundColor = randColor());
}

const second = document.querySelector('#second');
const first = document.querySelector('#first')

function firstButtonFunctions() {
  delSquares();
  stop();
  generateBlock();
  second.disabled = false;
  first.disabled = true;
  first.style.backgroundColor = 'grey';
  second.style.backgroundColor = 'green';
  return;

}

function secondButtonFunctions() {
  generateBlocksInterval();
  second.disabled = true;
  second.style.backgroundColor = 'grey'
  return;
}

function thirdButtonFunctions() {
  stop();
  second.disabled = false;
  second.style.backgroundColor = 'green';

  first.disabled = false;
  first.style.backgroundColor = 'green';
  return;
}