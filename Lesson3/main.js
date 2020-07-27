function getMaxDigit(str) {
let max = 0;
str = str.toString();
  for (let i = 0; i < str.length; i++) {
    if (max <= str[i]) max = str[i];
  }
  
return max;
}

//ex2
function calcNumbDegree(num, degree) {
  const baseNum = num;
  let baseDegree = degree;
  
  if (baseDegree === 0) return 1;
  (baseDegree < 0) ? baseDegree = -baseDegree : 
  baseDegree = baseDegree;

  for (i = 1; i < baseDegree; ++i) 
    num *= baseNum;

  return degree < 0 ? 1 / num: num;
}

//ex3
function getStyleString(name) {
  return name[0].toUpperCase() + (name.slice(1)).toLowerCase();
}

//ex4
function calcSalaryOnHands(sum, tax) {
  tax = tax / 100;
  sum = ( Math.round( (sum - (sum * tax) ) * 100) / 100);
  
return sum;
}

//ex5
function getRandomNumber(num1, num2) {
  return Math.round( Math.random() * (num2 - num1) ) + num1;
}

//ex6
function countLeter(letter, word) {
  const lowerWord = word.toLowerCase();
  const lowerLetter = letter.toLowerCase();
  let count = 0;
  
  for (i = 0; i < (lowerWord.length); i++) {
    if (lowerLetter === lowerWord[i])
    count +=1;
  }
  
  return count;
}

//ex8
function createPass (num) {
  let pass = '';
  if (num === undefined) num = 8;
  for (i = 1; i <= num; i++) {
    pass += Math.floor(Math.random() * 10) ;
  }
  return pass
}
  

const result = `<p>Функція 1: ${getMaxDigit(87702)} </p>
	              <p>Функція 2: ${calcNumbDegree(9, -2)} </p>
	              <p>Функція 3: ${getStyleString('aNTon')} </p>
	              <p>Функція 4: ${calcSalaryOnHands(10500, 19)} </p>
	              <p>Функція 5: ${getRandomNumber(1, 5)} </p>
	              <p>Функція 6: ${countLeter('o', 'Oviraptor')} </p>
	              <p>Функція 8: ${createPass()} </p>`;
document.getElementById("res").innerHTML = result;