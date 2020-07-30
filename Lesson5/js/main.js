//1
const getRandomArray = function (length, min, max) {

function rand (min, max) {
  return (Math.round( (Math.random() * (max - min)+2))); 
}

const tempArray = Array(length).fill('');
return tempArray.map( (elem) => rand(min,max) );
}

//3
const numbers3 = [1, 45.6, 4.9, 3, 5, 7];
function getAverage (numbers) {
let getFilter = numbers.filter( num => !(num % 1));

return (getFilter.reduce((sum, v) => (sum += v))) / (getFilter.length);
}

//4
const numbers4 = [10, 45.6, 4.9, 3, 7, 7];
function getMediana (numbers) {
let getFilter = numbers.filter(num => !(num % 1));
let getSort = getFilter.sort( (a, b) => (a - b) );
let sum1 = getSort.reduce( (sum, v, i, arr) =>
{
  if ((i+1) <= ( (arr.length) / 2) ) sum += v;
  return sum;
})

let sum2 = ((getSort.reduce( (sum, v) => sum += v)) - sum1);

return ((sum1+sum2)/2);
}

//5
const numbers5 = [10, 45.6, 4.9, 3, 7, 7, 8, 2, 4];
function filterEvenNumber (numbers) {
  return numbers.filter(num => !(num % 2));
}
  
//6
const numbers6 = [-10, 45.6, -4.9, 3, 7, -7, 8, -2 , -4, 6];
function countPositiveNumbers (numbers) {
return (numbers.filter( (value) => value > 0)).length;
}

//7
const numbers7 = [-10, 45.6, -4.9, 5, 7, -20, 8, -2, -4];
function getDividedByFive (numbers) {
return numbers.filter((value) => !(value % 5));
}

//8 
const baseStr = "Where this fucking stegosaurus?! Shit!";
const badWords = ["fuck", "shit"];

function replaceBadWord (baseStr, badWords) {
const str = baseStr.toLowerCase();
const wordsArr = str.split(' ');
const getTempGoodSentence = (wordsArr.map((word) => {
  for (badWord of badWords) {
    if (!(word.indexOf(badWord))) {
      word = "****" + word.slice(4);
    }
  }
  return word;
})).join(' ');
const getGoodSentence = (getTempGoodSentence[0].toUpperCase() + getTempGoodSentence.slice(1));
return getGoodSentence;
};
 
//9
const str9 = ' Arch  osaurs';
function getDivideByTree (str) {
  
const fixedStr = str.replace(/ +/g, '').trim().toLocaleLowerCase();
let onlyLetters = fixedStr.split('');

let getLowStrDivideByTree = onlyLetters.reduce ( (sentence, letter, index) => {
  sentence += letter;

if ( !( (index+1) % 3) ) sentence += " ";
return sentence;
});

return (getLowStrDivideByTree[0].toUpperCase() + 
  getLowStrDivideByTree.slice(1));
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