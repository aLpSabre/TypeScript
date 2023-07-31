//! Generics

const list: Array<string> = ["abc ata"];
let newWord = list[0].split(" ");
console.log(newWord);

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj.age);

/* function merge(objA: {name:string}, objB: {age:number}) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max'}, { age: 30 });
console.log(mergedObj.name);
 */

//! Another function of generic
interface Length {
  length: number;
}

function count<T extends Length>(element: T): [T, string] {
  //! it is being used to avoid using unions
  let length = element.length;
  return [element, `the element length is ${length}`];
}
console.log(count("ali"));
console.log(count(["a"]));
/* console.log(count(1)); */ //! Doesnt work because number doesnt have length

//! U extends keyof T to ensure that the key exists in object

//! Generic Classes

class DataStoroge<T extends string | number | boolean | object> { //! constraints 
  //! better use it with primitive types to avoid errors
  data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    console.log(this.data.indexOf(item));
    this.data.splice(this.data.indexOf(item), 1);
  }
}

const myData = new DataStoroge<string>(); //! so it is gonna create an string array

myData.addItem("a");
myData.addItem("b");
console.log(myData.data);
myData.removeItem("a");
console.log(myData.data);

const myObjectData = new DataStoroge<object>(); //! so it is gonna create an string array

myObjectData.addItem({ name: "Alex" });
myObjectData.addItem({ age: 25 });
console.log(myObjectData.data);
let takeOut = { name: "Alex" };

//! with objects it doesnt work
/* myObjectData.removeItem(takeOut);
console.log(myObjectData.data); */
