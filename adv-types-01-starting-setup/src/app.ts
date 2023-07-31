type Person = {
  name: string;
  age: number;
};
type Female = {
  gender: "Female";
};
type FemalePerson = Female & Person; //! it combines the two types
const combinedTypes: FemalePerson = {
  name: "Ayse",
  age: 24,
  gender: "Female",
};
console.log(combinedTypes);

type first = string | number;
type second = boolean | number;
type third = first & second;
let mytype: third = 3;
console.log(typeof mytype); //! it takes the common type between two

//! Type Guards
function add(n1: first, n2: first) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

function getGender(female : Female){
  if("gender" in female){
    console.log(female.gender);
  } 
}

class Car{
  drive(){
    console.log("drive");
  }
};
class Truck{
  drive(){
    console.log("driving a truck");
  }
  loadCargo(){
    console.log("loading a cargo");
  }
}
type Vehicle= Car | Truck; //! to make it union 

const v1= new Car();
const v2 = new Truck();

function check(vehicle: Vehicle ){
  vehicle.drive();
  if(vehicle instanceof Truck){
    vehicle.loadCargo();
  }
/*   if("loadCargo" in vehicle){
    vehicle.loadCargo();
  } */
}
check(v1);
check(v2);

//! Type Casting 

const p= document.querySelector("input")! as HTMLInputElement;

p.value="hi";

//! Index Properties

interface ErrorContainer{
/*   id:"a";
  1:"a", */
/*   2:2; */
  [props:string]:string;
}

const error :ErrorContainer={
  email:"a",
  1:"a", //? number can be converted to string,but string cant be to number 

}

//! Overload functions 
function add1(n1: string, n2: string):string; 
function add1(n1: first, n2: first) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const result=add1("Mx","a");
result.split("") //!'split' does not exist on type 'number'. ts doesnt know if it return string or number