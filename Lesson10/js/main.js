const arrBtns = [...document.querySelectorAll('.btn')];

const arrColor = ['#FBEFEF', '#F8E0E0', '#F6CECE', '#F5A9A9', '#F78181', '#FA5858', '#FE2E2E', '#FF0000'];

arrBtns.forEach((btn, ind) => {
	btn.addEventListener('mousedown', function () {
		btn.style.backgroundColor = arrColor[ind];
	});
});


arrBtns.forEach((btn, ind, arr) => {
	btn.addEventListener('mouseup', function () {
		let sound = document.createElement('audio');
		  sound.setAttribute('src', `sounds/${ind}.mp3`);
		  sound.autoplay = true;
		  sound.load;
		  sound.play();
	  btn.style.backgroundColor = '#64348a';
	});
});

arrBtns.forEach((btn, ind) => {
  btn.addEventListener('touchstart', function() {
    btn.style.backgroundColor = arrColor[ind];
  });
});


arrBtns.forEach((btn, ind, arr) => {
	btn.addEventListener('touchend', function() {
	  let sound = document.createElement('audio');
	  sound.setAttribute('src', `sounds/${ind}.mp3`);
	  sound.autoplay = true;
	  sound.load;
	  sound.play();
	  btn.style.borderColor = "yellow";
	 setTimeout(()=>btn.style.borderColor = 'grey', 2000);
	  });
	  
});

