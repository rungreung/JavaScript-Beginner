/*JavaScript has two  different data types 
that are primitive  type and reference types

Primitive Types
- string
- Nember
- Boolean
- Undefuned
- Null อะไรที่ไม่มีค่าจริงๆ
- Symol ไม่ค่อยได้ใช้  เป็น Type ที่อยู๋่เบื้องหลัง


*/ 

//Primitive Types
const myName = "Rungreung";
// myName = "Saksupen"
let height = "175";
let isMale = false;
let city= null;
let bigNumber = 10n;
console.log(myName,height,isMale,city,bigNumber);


/*
Reference Type
- Object
- Array
- Functing
*/ 


const person = {
    name: "rungreung",
    height: 175,
    city: "Bangkok"
}
person.height = 190 ;
person.weight = 68;
console.log(person.name)
console.log(person)

const numbers=[5,10,15,20];
console.log(numbers);
numbers.push(25)
console.log(numbers)
numbers.pop();
console.log(numbers);
numbers.unshift(1)
console.log(numbers)
numbers.shift()
console.log(numbers);