const button=document.querySelector('.colorBtn1');
button.onclick = function() {
 (button.style.backgroundColor==='red') ? button.style.backgroundColor='green': button.style.backgroundColor='red'}
 
 //зробити два масива. в першому ссилки на музику в кількості рівній к-ті кнопок, а в другому масиві - все елементи бтн. потім почергово forEach присвоїти кожному бтн при кліку свою музику. все.