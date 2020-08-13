let interv;
const firstBtn = document.querySelector('#firstBtn');
const secondBtn = document.querySelector('#secondBtn');

function generateBlock() {
  function getRow() {
    const divRow = document.createElement('div');
    divRow.className = 'row';
    return document.body.append(divRow);
  }

  function getSquares() {
    function getSquare() {
      const square = document.createElement('div');
      square.className = 'square';
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

function randColor() {
  const r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

const generateBlocksInterval = () => (interv = setInterval(() => changeColor(), 300));

function stop() {
  clearInterval(interv);
}

function delSquares() {
  if (document.querySelector('.row')) document.querySelector('.row').remove('div');
}

function changeColor() {
  document.querySelectorAll('.square').forEach((item) => (item.style.backgroundColor = randColor()));
}

function firstButtonFunctions() {
  delSquares();
  stop();
  generateBlock();
  secondBtn.disabled = false;
  firstBtn.disabled = true;
  firstBtn.style.backgroundColor = 'grey';
  secondBtn.style.backgroundColor = 'green';
  return;
}

function secondButtonFunctions() {
  generateBlocksInterval();
  secondBtn.disabled = true;
  secondBtn.style.backgroundColor = 'grey';
  return;
}

function thirdButtonFunctions() {
  stop();
  secondBtn.disabled = false;
  secondBtn.style.backgroundColor = 'green';

  firstBtn.disabled = false;
  firstBtn.style.backgroundColor = 'green';
  return;
}
