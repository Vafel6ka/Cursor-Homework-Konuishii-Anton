const arrBtns = [...document.querySelectorAll('.btn')];

const arrColor = ['#FBEFEF', '#F8E0E0', '#F6CECE', '#F5A9A9', '#F78181', '#FA5858', '#FE2E2E', '#FF0000'];

function getAudio(ind) {
	let sound = document.createElement('audio');
	sound.setAttribute('src', `sounds/${ind}.mp3`);
	sound.autoplay = true;
	sound.load;
	sound.play();
}

function ChangeBtnColor(btn) {
	btn.style.backgroundColor = '#64348a';
	btn.style.borderColor = 'yellow';
	setTimeout(() => (btn.style.borderColor = 'grey'), 2000);
}

function ChangeBtnBgColor(btn, ind) {
	btn.style.backgroundColor = arrColor[ind];
}

arrBtns.forEach((btn, ind) => {
	btn.addEventListener('mousedown', function () {
		ChangeBtnBgColor(btn, ind);
	});
});

arrBtns.forEach((btn, ind, arr) => {
	btn.addEventListener('mouseup', function () {
		getAudio(ind);
		ChangeBtnColor(btn);
	});
});

arrBtns.forEach((btn, ind) => {
	btn.addEventListener('touchstart', function () {
		ChangeBtnBgColor(btn, ind);
	});
});

arrBtns.forEach((btn, ind, arr) => {
	btn.addEventListener('touchend', function () {
		getAudio(ind);
		ChangeBtnColor(btn);
	});
});

document.addEventListener('keyup', function (event) {
	switch (event.code) {
		case 'KeyD':
			getAudio(0);
			ChangeBtnColor(arrBtns[0]);
			break;
		case 'KeyI':
			getAudio(1);
			ChangeBtnColor(arrBtns[1]);
			break;
		case 'KeyN':
			getAudio(2);
			ChangeBtnColor(arrBtns[2]);
			break;
		case 'KeyO':
			getAudio(3);
			ChangeBtnColor(arrBtns[3]);
			break;
		case 'KeyS':
			getAudio(4);
			ChangeBtnColor(arrBtns[4]);
			break;
		case 'KeyA':
			getAudio(5);
			ChangeBtnColor(arrBtns[5]);
			break;
		case 'KeyU':
			getAudio(6);
			ChangeBtnColor(arrBtns[6]);
			break;
		case 'KeyR':
			getAudio(7);
			ChangeBtnColor(arrBtns[7]);
			break;
	}
});

document.addEventListener('keydown', function (event) {
	switch (event.code) {
		case 'KeyD':
			getAudio(0);
			ChangeBtnBgColor(arrBtns[0], 0);
			break;
		case 'KeyI':
			getAudio(1);
			ChangeBtnBgColor(arrBtns[1], 1);
			break;
		case 'KeyN':
			getAudio(2);
			ChangeBtnBgColor(arrBtns[2], 2);
			break;
		case 'KeyO':
			getAudio(3);
			ChangeBtnBgColor(arrBtns[3], 3);
			break;
		case 'KeyS':
			getAudio(4);
			ChangeBtnBgColor(arrBtns[4], 4);
			break;
		case 'KeyA':
			getAudio(5);
			ChangeBtnBgColor(arrBtns[5], 5);
			break;
		case 'KeyU':
			getAudio(6);
			ChangeBtnBgColor(arrBtns[6], 6);
			break;
		case 'KeyR':
			getAudio(7);
			ChangeBtnBgColor(arrBtns[7], 7);
			break;
	}
});
