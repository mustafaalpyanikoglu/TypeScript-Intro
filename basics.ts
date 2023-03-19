// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12.;

let userName: string |string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32
};

// person = {
//   isEmployee:true
// };

let people: Person[];

// Type inference

let course: string | number | boolean = 'React - The Compete Guide';

course = 12341;

//Functions & types

function add(a: number, b: number){
  return a+b;
}

function print(value: any){
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
  const newArray = [value,...array];
  return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray,-1); // [-1,1,2,3]
const stringArray = insertAtBeginning(['a','b','c'],'d');

//updatedArray[0].split('');
stringArray[0].split('');

class Student{

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public courses: string[]
    ){}

  enrol(courseName: string){
    this.courses.push(courseName);
  }

  listCourses(){
    return this.courses.slice();
  }
}

const student = new Student('Alp', 'Yanikoglu', 22, ['Angular']);
student.enrol('React');

//student.courses => Angular, React

// student.listCourses(); => Angular, React

interface Human{
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: 'Max',
  age: 32,
  greet(){
    console.log('Hello!');
  }
}


class Instructor implements Human{
  firstName = 'Alp';
  age = 21;
  greet(){
    console.log('Hello!!!!');
  }

}