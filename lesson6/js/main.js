const students = [{
  name: 'Tanya',
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: 'Victor',
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: 'Anton',
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];
//1
const getSubjects = (sub) => Object.keys(sub.subjects).map((them, ind, subj) => {
  const fixedSubject = them.replace(them[0], them[0].toUpperCase());
  const trueFixedSubject = fixedSubject.replace(/_/gi, ' ');
  return (trueFixedSubject);
});

//2
let getAverageMark = (sub) => {
  let temp = ([...Object.values(sub.subjects)]);
  count = 0;
  sum = 0;
  for (var i = 0; i < temp.length; i++) {
    for (var j = 0; j < temp[i].length; j++) {
      sum += temp[i][j];
      ++count;
    }
  }
  return (Math.round((sum / count) * 100) / 100);
}

//3
const getStudentInfo = (student) =>
  ("course :" + student.course + ', ' + "name: " + student.name + ', ' +
    "averageMark: " + getAverageMark(student));

//4
let getStudentsNames = (stud) => {
  let tempArr = [];
  for (var i = 0; i < students.length; i++) {
    tempArr[i] = students[i].name;
  }
  return tempArr.sort();
}

//5
let getBestStudent = (students) => {
  let arr = [];
  for (var i = 0; i < students.length; i++)
    arr[i] = getAverageMark(students[i]);
  let index = arr.indexOf(Math.max.apply(null, arr));
  return students[index].name;
}

//6
let calculateWordLetters = (word) => {
  const result = {};
  const tempKeys = [];
  const values = [];
  let tempArr = word.toLowerCase();
  for (var i = 0; i < tempArr.length; i++) {
    tempKeys[i] = tempArr[i];
    values[i] = (tempArr.split(tempArr[i]).length - 1);
  }
  for (var i = 0; i < tempKeys.length; i++) {
    const keys = [];
    if (!keys.includes(tempKeys[i])) {
      keys.push(tempKeys[i]);
      result[keys] = values[i];
      keys.pop();
    }
  }
  return result;
}
console.log(calculateWordLetters("Aaantonn"));

document.writeln(`<p><b>Функція getSubjects для students[0]:</b> ${getSubjects(students[0])} </p>`);
document.writeln(`<p><b>Функція getAverageMark для students[0]:</b> ${getAverageMark(students[0])} </p>`);
document.writeln(`<p><b>Функція getStudentInfo для students[0]:</b> ${getStudentInfo(students[0])} </p>`);
document.writeln(`<p><b>Функція getStudentsNames:</b> ${getStudentsNames(students)} </p>`);
document.writeln(`<p><b>Функція getBestStudent:</b> ${getBestStudent(students)} </p>`);
document.writeln(`<p><b>Функція calculateWordLetters('Aaantonn'): в консолі</b> </p>`);