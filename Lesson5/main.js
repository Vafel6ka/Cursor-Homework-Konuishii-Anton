/*//1
let asd = () => Math.round( (Math.random()) * 10);

let getRandomArray = function (length, min, max) {
  arr = [];
  let i = 0;
  do {
    arr[i] = asd ();
      if (arr[i] > max) continue
   else 
     if (arr[i] < min) continue
       else ++i;
  }
  while (i < length);
  
  return arr;
}

 alert ( getRandomArray(20, 8, 9) ); */
//----------------------------------------------------
//2
//function numbers () {  
  
  let str = prompt('w');
  let arr = str.split(',');

    for (let num of arr) {
      num = Number (num);
    } 
    

  
//return arr;
//}
alert ( isNumber(arr[0]) );



