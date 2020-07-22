//ex1 вводиться тілько стрінга, не знаю як зробити цифрою без методів масивів
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
  
  for (i = 1; i < degree; ++i) {
    num *= baseNum;
  }
  
  return num;
}

//ex3
function getStyleString(name) {
  const newName = name[0].toUpperCase() + (name.slice(1)).toLowerCase();
  
return newName;
}

//ex4
function calcSalaryOnHands(sum, tax) {
  tax = tax / 100;
  sum = ( Math.round( (sum - (sum * tax) ) * 100) / 100);
  
return sum;
}

//ex5
function getRandomNumber(num1, num2) {
  const rand = Math.round( Math.random() * (num2 - num1) ) + num1;
  
  return rand;
}

//ex6
function countLeter(letter, word) {
  const lowerWord = word.toLowerCase();
  const lowerLetter = letter.toLowerCase();
  let count = 0;
  
  for (i = 0; i < (lowerWord.length); i++) {
    if (lowerLetter == lowerWord[i])
    count +=1;
  }
  
  return count;
}

//ex8
function createPass (num) {
  let pass = '';
  for (i = 0; i < num; i++) {
    pass = pass + Math.round(Math.random() * 10) ;
  }
  return pass
}
  

const result = `<p>Функція 1: ${getMaxDigit(87702)} </p>
	               <p>Функція 2: ${calcNumbDegree(2, 8)} </p>
	               <p>Функція 3: ${getStyleString('aNTon')} </p>
	               <p>Функція 4: ${calcSalaryOnHands(10500, 19)} </p>
	               <p>Функція 5: ${getRandomNumber(1, 5)} </p>
	               <p>Функція 6: ${countLeter('o', 'Oviraptor')} </p>
	               <p>Функція 8: ${createPass(10)} </p>`;
document.getElementById("res").innerHTML = result;