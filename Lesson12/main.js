const BASE = 'https://swapi.dev/api/';
const characters = [];
const peoples = [];
const planets = [];

function getPlanetsName() {
  axios.get(BASE + 'planets').then((res) => {
    res.data.results.forEach((data) => {
      const singlePlanet = { ...data};
      planets.push(singlePlanet);
      showAllResults(planets)
    });
  });
}

//getPlanetsName();

function getP() {
  axios.get(BASE + 'planets').then((res) => console.log(res))
}
getP();

function getChars2() {
  axios.get(BASE + 'films/2')
  .then((res) => {
    res.data.characters.forEach((data, ind) => {
      axios.get(data)
      .then((character) => {
        const singlePeople = { ...character.data };
        characters.push(singlePeople);
      showResults(characters);
      })});
    });
}

function getPeople2() {
  axios.get(BASE + "people/2").then((res) => {
    const singlePeople = { ...res.data };
    peoples.push(singlePeople);
    showResults(peoples);
  });
}

//function showResults(data) {
 // console.log(data);
//}

function showResults(users = {}) {
  const container = document.querySelector('.wrapper');
  container.innerHTML = '';

  users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.className = 'user';
    userElement.innerHTML = `
      <h3>${user.name}</h3>
      <h4>${user.birth_year}</h4>
      <h4>${user.gender}</h4>
    `;
    container.append(userElement);
  });
}

function showAllResults(users = {}) {
  const container = document.querySelector('.wrapper');
  container.innerHTML = '';

  users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.className = 'user';
    for (let key in user) {
      const userElement2 = document.createElement('div');
    userElement2.innerHTML = `
      <h3>${key} : ${user[key]}</h3>
    `;
    
    container.append(userElement2);}
    container.append(userElement)
  });
}
