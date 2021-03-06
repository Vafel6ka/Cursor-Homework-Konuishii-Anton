const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
function getMyTaxes(country) {
  const yourSalary = prompt('Enter your salary');
  return Math.round(this.tax * yourSalary * 100) / 100;
}

//2
function getMiddleTaxes(country) {
  return Math.round(this.tax * this.middleSalary * 100) / 100;
}

//3
function getTotalTaxes(country) {
  return Math.round(this.tax * this.middleSalary * this.vacancies * 100) / 100;
}

//4

function getMySalary(country) {
  const obj = {};
  const salary = Math.round((Math.random() * 1000 + Math.random() * 500) * 100) / 100;
  const taxes = this.tax;
  const profit = Math.round((salary - this.tax * salary) * 100) / 100;
  obj.salary = salary;
  obj.taxes = taxes;
  obj.profit = profit;
  return obj;
}

console.log('getMyTaxes: ', getMyTaxes.call(ukraine));
console.log('getMiddleTaxes: ', getMiddleTaxes.call(ukraine));
console.log('getTotalTaxes: ', getTotalTaxes.call(ukraine));
console.log(getMySalary.call(ukraine));
let timer = setInterval(() => console.log(getMySalary.call(ukraine)), 10000);
