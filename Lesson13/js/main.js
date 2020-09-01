const id=[];
let count = 0;
let fontSize = 12;
let click = true;

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
const el = document.querySelector('.idd');
el.innerHTML = `
      <p>Id : ${getId()}</p>`
      }
      
function fontUp (){
  click = true
  const text = document.querySelector(".test");
  
  text.style.fontSize = `${changer.next().value}px`
  text.innerHTML = `
        <p>texttext</p>`
  }
  
  function fontDown (){
    click=false;
  const text = document.querySelector(".test");
  text.style.fontSize = `${changer.next().value}px`
  text.innerHTML = `
        <p>texttext</p>`
  }
  
  
  