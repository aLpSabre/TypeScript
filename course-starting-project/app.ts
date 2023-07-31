const button = document.querySelector("button")!;

button.addEventListener("click", () => {
  console.log("it is clicked");
});
//! abstract classes cant not be instantiated they are only to be inherited
class Person {
  protected name: string; //! can be accessed and changed in subclasses but not outside
  private age: number;
  constructor(name: string, age: number, public readonly gender: string) {
    // !props can be initiliaze directly in the consc
    this.name = name;
    this.age = age;
  }
  getName(this: Person) {
    console.log("The name is " + this.name);
  }
  getAge(this: Person) {
    console.log("The age is " + this.age);
  }
  //? abstract function describe(this :Person):void; then the class has to be abstract as well
}
class Male extends Person {
  static cins = "human"; //! cant be accessed with this and instance
  constructor(name: string, age: number, private eyeColour: string) {
    super(name, age, "Male");
  }
  getMaleName(this: Male) {
    console.log("The male name is " + Male.cins + " " + this.name);
  }
  get getEye() {
    return "getter " + this.eyeColour;
  }
  set setEye(value: string) {
    this.eyeColour = value;
  }
}

class Female extends Person {
  static cins = "human"; //! cant be accessed with this and instance
  private static instance: Female;

  private constructor(name: string, age: number, private eyeColour: string) {
    super(name, age, "Female");
  }
  getMaleName(this: Female) {
    console.log("The male name is " + Male.cins + " " + this.name);
  }
  get getEye() {
    return "getter " + this.eyeColour;
  }
  set setEye(value: string) {
    this.eyeColour = value;
  }
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    return new Female("Ayse", 25, "blue");
  }
}
const newPerson = new Male("Ali", 25, "blue");

console.log(newPerson);
newPerson.getName(); //! "this" doesnt have to give as arguement
//console.log(newPerson.name);
// console.log(newPerson.age); // ! the private property only gives error on compile not on the runtime
newPerson.getAge();
newPerson.getMaleName();
console.log(newPerson.gender);
//console.log(newPerson.eyeColour);
console.log(newPerson.getEye);
newPerson.setEye = "brown"; //! to set dont call like func just use it like object
console.log("after set ", newPerson.getEye);
console.log(Male.cins, "static"); //! call without instacnce with class
const anotherPerson = { name: "Ahmet", getName: newPerson.getName }; //! it is the copy of person and needts to get the same keys
const female = Female.getInstance();
const female1 = Female.getInstance();
console.log("Female ", female);
console.log("Female ", female1); //! they are the same cant be different can only be instancied once

// anotherPerson.getName();

interface People {
  //! cant have methods w implmentations
  name: string;
  age: number;
  hairColour?: string; //! it is optional not a must
  getName(this: People): void;
}
/* type People= {
  name:string;
  age:number;
  getName(this:People):void;
} */
let user: People = {
  name: "Ali",
  age: 25,
  getName() {
    console.log("this is the name user " + this.name);
  },
};
user.getName();

class MyPerson implements People {
  constructor(public name: string, public age: number, hairColour?: string) {
 /*    if (hairColour) {
      this.hairColour = hairColour;
    } */
  }
  getName(this: People): void {
    console.log(this.name);
  }
}
let user1: People; //! interfaces can be used as type
user1 = new MyPerson("Ahmet", 25);
user1.getName();
let user2=new MyPerson("Mehmet",25,"brown");
/* console.log(user2.hairColour); */
//! Custom function
//type Add = (number :number) => number;
interface Add {
  (number: number): number;
}
const addMe: Add = (mynumber: number) => mynumber;

