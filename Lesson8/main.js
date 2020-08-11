class Student {
    constructor(course, university, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marksData = [4, 5, 5, 4];
      this.isDismiss = false;
    }
  getInfo() {
    return console.log("Студент " + this.course + " - го курсу " + this.university + " " +this.fullName);
  }
  
  get marks() {
    if (this.isDismiss) {
      return null;
    } else {
    return this.marksData;
    }
  }
  
  set marks(value) {
    if (this.isDismiss) {
      return null;
    } else {
      return this.marksData.push(value);
    }
  }
  
  getAverageMark() {
    const sum = this.marksData.reduce((result, mark) => result + mark);
    return sum/this.marksData.length
  }
  
  dismiss() {
     return this.isDismiss = true;
   }
  
  recover() {
     return this.isDismiss = false;
   }
}

class BudgetStudent extends Student {
constructor(course, university, fullName, scholarship) {
  super (course, university, fullName);
  this.scholarship = scholarship;
}
  getScholarship () {
    return setInterval(console.log("Ви отримали " + this.scholarship + " грн стипендії"), 100);
  }
}

const student1 = new Student("Alabama", 3, "Anton Koniushii");
student1.getInfo();
console.log(student1.marks);
student1.marks = 4;
console.log(student1.getAverageMark());
student1.dismiss();
console.log(student1.marks);
student1.recover();
console.log(student1.marks);

const student2 = new BudgetStudent("Alabama", 2, "Ava Gardner", 1400);
student2.getInfo();
student2.getScholarship();