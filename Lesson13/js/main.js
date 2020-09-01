const id=[];
let count = 0;

function* gen () {
  let i = 0;
  while (true) {
    yield i
    i++
  }
}

function* changeFont () {
  while (true) {
    yield 12
    yield 14
    yield 16
  }
}

function getId (){
  id.push(generator.next().value);
  count++
  return id[count-1];
}

function showAllId() {
  console.log(id)
}

const generator = gen();
const changer = changeFont();

function showId (){
const el = document.querySelector('.idd');
el.innerHTML = `
      <p>Id : ${getId()}</p>`
      }
      
function fontUp (){
  const text = document.querySelector(".test");
  text.style.fontSize = `${changer.next().value}px`
  text.innerHTML = ``;
  text.innerHTML = `
        <p>texttext</p>`
  }
  
  
  