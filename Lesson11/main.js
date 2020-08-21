function getRandomChinese(length) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      let count = 0;
      const str = [];
      let timeStr = Date.now().toString().slice(-5);
      while (count < length) {
        timeStr += 50;
        str[count] = String.fromCharCode(timeStr);
        ++count;
      }
      resolve(str.join(''));
    }, length * 50);
  });
}

getRandomChinese(4).then((result) => console.log(result));
