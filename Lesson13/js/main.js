function* gen () {
  let i = 0;
  while (true) {
    yield i
    i++
  }
}

const generator = gen();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);