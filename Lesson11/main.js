function getRandomChinese(length){
  let count = 0;
  const str=[];
 while (count < length) { 
   
  let timeStr = Number(Date.now().toString().slice(-5));
 // console.log(timeStr);
 // console.log(parseInt('9fff', 16))
 if (timeStr < 19967) timeStr +=20000
 //console.log(String.fromCharCode(timeStr));
  
  str[count]= String.fromCharCode(timeStr);
  count++;
 }  
  return new Promise(function(resolve) {
     
         str.forEach((v, i)=>setTimeout(() => resolve(), 1000))
         return console.log(str);
       }
       
       // эта функция выполнится автоматически, при вызове new Promise
  
       // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
     )
}
   
getRandomChinese(10);

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
  result => alert(result), // выведет "done!" через одну секунду
  error => alert(error) // не будет запущена
);