let number1 = 0;
 let number2 = 0;
 
    do {
      number1 = +prompt ("Enter the first positive integer number");
      if (number1<0) number1 = false; //тільки "позитивні" числа
    }
    while ((!number1) && !(number1 % 1)); //тільки цілі числа, не відміна та не ""
    
    do {
      number2 = +prompt("Enter the second positive integer number");
      if (number2<0) number2 = false;
    }
    while ((!number2) && !(number2 % 1));
    
  let numbersSum = 0;
  const isMissEven = confirm ('Are you skip even numbers? '); 
  for (let k=(Math.min(number1,number2)); k<=Math.max(number1,number2); k++) {
    if (isMissEven) {
      if (k % 2) {
        numbersSum +=k;
      }
    } 
     
    else {
    numbersSum +=k;
    }
  }

  const result = `<p>Result:${numbersSum}</p>`;
  document.getElementById("res").innerHTML = result;