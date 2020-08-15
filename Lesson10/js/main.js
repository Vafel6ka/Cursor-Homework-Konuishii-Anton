// const button = document.querySelector('.colorBtn1');
// button.onclick = function () {
// 	button.style.backgroundColor === 'red'
// 		? (button.style.backgroundColor = 'green')
// 		: (button.style.backgroundColor = 'red');
// };

//зробити два масива. в першому ссилки на музику в кількості рівній к-ті кнопок, а в другому масиві - все елементи бтн. потім почергово forEach присвоїти кожному бтн при кліку свою музику. все.

const arrBtns = [...document.querySelectorAll('.btn')];
console.log(arrBtns);

const arrColor = ['red', 'green', 'yellow', 'blue', 'black', 'cyan', 'grey', 'lightblue'];
console.log(arrColor);

arrBtns.forEach((btn, ind) => {
	btn.onclick = function () {
		btn.style.backgroundColor === arrColor[ind]
			? (btn.style.backgroundColor = '#64348a')
			: (btn.style.backgroundColor = arrColor[ind]);
	};
});
