// ////////////create row and blocks
// function generateBlock(numSqv) {
//   function getRow() {
//     const divRow = document.createElement('div');
//     divRow.className = 'row';
//     return document.body.append(divRow);
//   }

//   function getSquares() {
//     function getSquare() {
//       const square = document.createElement('div');
//       square.className = 'btn';
//       square.style.backgroundColor = '#64348a';
//       return document.querySelector('.row').append(btn);
//     }

//     for (var i = 0; i < numSqv; i++) {
//       getSquare();
//     }
//     return;
//   }
//   getRow();
//   getSquares();
//   return;
// /////////////////////////////////
const arrBtns = [...document.querySelectorAll('.btn')];
console.log(arrBtns);

const arrColor = ['#FBEFEF', '#F8E0E0', '#F6CECE', '#F5A9A9', '#F78181', '#FA5858', '#FE2E2E', '#FF0000'];
console.log(arrColor);

arrBtns.forEach((btn, ind) => {
	btn.onclick = function () {
		console.log(btn);
	};
});

arrBtns.forEach((btn, ind) => {
	btn.addEventListener('mousedown', function () {
		btn.style.backgroundColor = arrColor[ind];
	});
});

arrBtns.forEach((btn, ind) => {
	btn.addEventListener('mouseup', function () {
		btn.style.backgroundColor = '#64348a';
	});
});

arrBtns.forEach((btn, ind) => {
	btn.addEventListener('mouseup', function () {
		let x = document.createElement('AUDIO');
		x.setAttribute('src', `sounds/${ind}.mp3`);
		x.autoplay = 1;
		document.body.appendChild(x);
	});
});
