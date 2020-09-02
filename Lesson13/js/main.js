const id=[];
let count = 0;
let fontSize = 12;
let click = true;
const text = document.querySelector(".text");
const btns = document.querySelectorAll(".btn");

function* gen () {
  let i = 0;
  while (true) {
    yield i
    i++
  }
}

function* changeFontSize() {
  while (true) {
    if (click === true) {
      yield(fontSize += 2);
    } else {
      yield(fontSize -= 2);
    }
  }
}

function getId (){
  id.push(generator.next().value);
  count++
  return id[count-1];
}

//function showAllId() {
// console.log(id)
//}

const generator = gen();
const changer = changeFontSize();

function showId (){
const el = document.querySelector('.id');
el.innerHTML = `
      <p>Id : ${getId()}</p>`
      }
      
function fontUp (){
  click = true
  text.style.fontSize = `${changer.next().value}px`
  text.innerHTML = `
        <p>Sauropod</p>`
  }
  
  function fontDown (){
    click=false;
  text.style.fontSize = `${changer.next().value}px`
  text.innerHTML = `
        <p>Sauropod</p>`
  }
	
	btns.forEach((btn) => {
	  btn.addEventListener('touchstart', function() {
	    btn.style.backgroundColor = "grey";
	  });
	});
	
	btns.forEach((btn) => {
	  btn.addEventListener('touchstart', function() {
	    btn.style.backgroundColor = "gold";
	  });
	});
	
		btns.forEach((btn) => {
	  btn.addEventListener('mousedown', function() {
	    btn.style.backgroundColor = "grey";
	  });
	});
	
	btns.forEach((btn) => {
	  btn.addEventListener('mouseup', function() {
	    btn.style.backgroundColor = "gold";
	  });
	});
	