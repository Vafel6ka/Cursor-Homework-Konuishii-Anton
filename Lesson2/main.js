let number1 = 0;
 let number2 = 0;
 
    do {
      number1 = +prompt ("Enter the first positive integer number");
      if ((number1<0) || (number1 % 1)) number1 = false;
       }
    while (!number1); 
    
    do {
      number2 = +prompt("Enter the second positive integer number");
      if ((number2<0) || (number2 % 1)) number2 = false;
    }
    while ((!number2));
    
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

  const result = `<p>First number:${number1}</p>
                  <p>Second number:${number2}</p>
                  <p>Sum of numbers between first and second numbers:${numbersSum}</p>`;
  document.getElementById("res").innerHTML = result;