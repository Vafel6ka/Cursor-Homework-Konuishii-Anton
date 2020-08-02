const getFilter = (numbers, denominator) =>
	numbers.filter(num => !(num % denominator));

//1
const getRandomArray = function (length, min, max) {
	let rand = (min, max) => Math.round((Math.random() * (max - min) + 2));
	return (Array(length).fill('')).map((elem) => rand(min, max));
}

//3
const numbers3 = [1, 45.6, 4.9, 3, 5, 7];
const getAverage = (numbers) =>
	((getFilter(numbers, 1)).reduce((sum, v) => (sum += v), 0)) /
	((getFilter(numbers, 1)).length);


//4
const numbers4 = [3, 45.6, 4.9, 1, 2, 4];

function getMediana(numbers) {

	const getSort = ((getFilter(numbers, 1)).sort((a, b) => (a - b)));

	const sum1 = getSort.reduce((sum, v, i, arr) => {
		return arr.length % 2 === 0 ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2 : arr[Math.floor(arr.length / 2)]
	}, 0);

	return sum1;
}

//5
const numbers5 = [10, 45.6, 4.9, 3, 7, 7, 8, 2, 4];
const filterEvenNumber = (numbers) => getFilter(numbers, 2);


//6
const numbers6 = [-10, 45.6, -4.9, 3, 7, -7, 8, -2, -4, 6];
const countPositiveNumbers = (numbers) =>
	(numbers.filter((value) => value > 0)).length;


//7
const numbers7 = [-10, 45.6, -4.9, 5, 7, -20, 8, -2, -4];
const getDividedByFive = (numbers) => getFilter(numbers, 5);

//8 
const baseStr = "Where this fucking stegosaurus?! Shit!";
const badWords = ["fuck", "Shit"];

function replaceBadWord(baseStr, badWords) {
	const str = baseStr.toLowerCase();
	const wordsArr = str.split(' ');
	const getTempGoodSentence = (wordsArr.map((word) => {
		for (badWord of badWords) {
			if (!(word.indexOf(badWord.toLowerCase()))) {
				word = "****" + word.slice(4);
			}
		}
		return word;
	})).join(' ');
	return (getTempGoodSentence[0].toUpperCase() + getTempGoodSentence.slice(1));
};

//9
const str9 = 'ankilosaur';

function getDivideByTree(word) {
	let arr = [];
	for (let i = 0; i < word.length; i += 3) {
		arr.push(word.slice(i, i + 3));
	}
	return arr;
}

const result = `<p>Function 1: ${ getRandomArray(10, 2, 7) } </p>
              <p>Function 3: ${ getAverage(numbers3) } </p>
              <p>Function 4: ${ getMediana(numbers4) } </p>
              <p>Function 5: ${ filterEvenNumber(numbers5) } </p>
              <p>Function 6: ${ countPositiveNumbers(numbers6) } </p>
              <p>Function 7: ${ getDividedByFive (numbers7) } </p>
              <p>Function 8: ${ replaceBadWord(baseStr, badWords) } </p>
              <p>Function 9: ${ getDivideByTree(str9) } </p>`;
document.getElementById("res").innerHTML = result;