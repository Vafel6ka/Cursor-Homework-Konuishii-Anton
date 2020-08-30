const BASE = '//swapi.dev/api/';
const characters = [];
const peoples = [];
const planets = [];

function getAllPlanetsInfo(page) {
  axios
    .get(BASE + `planets/`, {
      params: {
        page: page
      }
    })
    .then((res) => {
      res.data.results.forEach((data) => {
        const singlePlanet = { ...data };
        planets.push(singlePlanet);
        showAllResults(planets);
      });
    });
  clear(planets);
}

function getChars2() {
  axios.get(BASE + 'films/2').then((res) => {
    res.data.characters.forEach((data, ind) => {
      axios.get(data).then((character) => {
        const singlePeople = { ...character.data };
        characters.push(singlePeople);
        showResults(characters);
      });
    });
  });
  clear(characters);
}

function clear(arr) {
  return arr.splice(0, arr.length);
}

function showResults(users = {}) {
  hideBtn();
  const container = document.querySelector('.wrapper');
  container.innerHTML = '';

  users.forEach((user) => {
    const userElement = document.createElement('div');
    userElement.className = 'characters';
    userElement.innerHTML = `
      <h3>Name : ${user.name}</h3>
      <h4>Birth day : ${user.birth_year}</h4>
      <h4>Gender : ${user.gender}</h4>
    `;
    container.append(userElement);
  });
}

function showAllResults(users = {}) {
  showBtn();
  const container = document.querySelector('.wrapper');
  container.innerHTML = '';

  users.forEach((user) => {
    const userElement = document.createElement('div');
    userElement.className = 'planets';
    for (let key in user) {
      if (key === 'residents' || key === 'films' || key === 'url') continue;
      const userElement2 = document.createElement('div');
      userElement2.innerHTML = `
      <h3>${key} : ${user[key]}</h3>
    `;

      userElement.append(userElement2);
    }
    container.append(userElement);
  });
}

function paginationInit() {
  let currentPage = 1;

  document.querySelector('#prev').addEventListener('click', () => {
    if (currentPage < 1) return;
    getAllPlanetsInfo(currentPage--);
  });
  document.querySelector('#next').addEventListener('click', () => {
    getAllPlanetsInfo(currentPage++);
    if (currentPage > 6) currentPage = 1;
  });
}

function hideBtn() {
  document.getElementById('prev').style.display = 'none';
  document.getElementById('next').style.display = 'none';
}

function showBtn() {
  document.getElementById('prev').style.display = 'inline-block';
  document.getElementById('next').style.display = 'inline-block';
}

paginationInit();
