const students = ["Олександр", "Ігор", "Олена", 
					"Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", 
				"Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//ств копії арх
function createCopyArr (newArr, arr) {
	for (var i = 0; i <  arr.length; i++) {
	 newArr[i] = arr[i]
	}
return newArr;
}

//ств арх тільки з чоловіками
function getOnlyMale (male) { 
	const a = [];
	let k = 0;
for (let i = 0; i < copyStudents.length; i++) {
 	a[i] = copyStudents.slice(i,i+1);
	let str = a.join();
	if  (((str[ ( (str.length) -1)] ) == "р") || 
		((str[ ( (str.length) -1)] ) == "й")) {
			male[k] = copyStudents.slice(i,i+1);
			++k;
		} 
}
return male;
}

//ств арх тільки з жінками
function getOnlyFemale (female) { 	
	const a = [];
	let k = 0;
for (let i = 0; i < copyStudents.length; i++) {

 	a[i] = copyStudents.slice(i,i+1);
 	
	let str = a.join();
	if  (!(((str[ ( (str.length) -1)] ) == "р") || 
		((str[ ( (str.length) -1)] ) == "й"))) {
			female[k] = copyStudents.slice(i,i+1);
			++k;
		} 
}
return female;
}

//ств пару чол-жін підмасивами
function createPairs (pairsStudents,male, female) {
	for (let i = 0; i < (male.length); i++) {
		const arrARR = [];
			arrARR.push( (male[i]) );
			arrARR.push( (female[i]) );
			pairsStudents.push (arrARR);
		}
	return pairsStudents;
}

//додає між парами імен "і" 
function addToStudentsI (addI, pairsStudents) { 	
	for (var i = 0; i < pairsStudents.length; i++) {
	addI[i] = pairsStudents[i].join(" і ");		
	
}
return addI;
}

//ств рандомні оцінки
function getRandomMarks (RandMarks){
	for (var i = 0; i < pairsStudentsAndThemes.length; i++) {
		let mark = 1;
		do mark = (Math.round( (Math.random() * 10) / 2))
		while (!mark);
		RandMarks[i] = mark;
	}
	return RandMarks;
}

//ств копії масивів
const copyStudents = [];
const copyThemes = [];
const copyMarks = [];

createCopyArr(copyStudents, students);
createCopyArr(copyThemes, themes);
createCopyArr(copyMarks, marks);

//1)ств пари хлопець - дівчина
const male = [];
const female = [];
const pairsStudents = [];

getOnlyMale(male);
getOnlyFemale(female);
createPairs (pairsStudents, male, female);

//2)ств пари студентів з темами
const addI = [];
const pairsStudentsAndThemes = [];

addToStudentsI (addI, pairsStudents);
createPairs (pairsStudentsAndThemes,addI, themes);

//3)ств пари студент - оцінка
const studentAndMark = [];

createPairs (studentAndMark, copyStudents, copyMarks);

//4)ств ранд оцінки та потрійної пари
const RandMarks = [];
const studentsThemesMarks = [];

getRandomMarks(RandMarks);
createPairs(studentsThemesMarks, pairsStudentsAndThemes, RandMarks);
//----------------------------------------------------------
const result = `<p>Хлопець та дівчина: ${pairsStudents} </p>
	            <p>Хлопець, дівчина і тема: ${pairsStudentsAndThemes} </p>
	            <p>Студент та оцінка: ${studentAndMark} </p>
	            <p>Хлопець, дівчина, тема і випадкова оцінка: ${studentsThemesMarks} </p>`;
document.getElementById("res").innerHTML = result;
//Знаю, що код далеко від ідеалу, але я намагався 
//зробити ф-ції універсальними...Прошу зважати на те що я вчусь) 