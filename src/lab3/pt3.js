//MAKE SURE THE SCRIPT SRC IS ADJUSTED IN IDEX.HTML
//-------------------------------------------------------------
//TASK1 - Use 10 of Objects predefined methods and explain them.
//--------------------------------------------------------------

//1 - .assign(): copies properties of the source obj to distination  obj
var source = {
    id: 1,
    name: "maysara"
}
var dist = {
    track : "open source"
}
Object.assign(dist, source)
console.log(dist);

//2-  .entries() :  coverts the key-value properties into a astring 
for (const [key, value] of Object.entries(source)) {
    console.log(`${key}: ${value}`); // "id : 1" "name : maysara"
  }

//3- .is(val1. val2): returns a boolean of whether the 2 values are the same
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true 

//4- .defineProperty(obj , key, descriptor) : defines a new property directly on an object, or modifies an existing property on an object
 const obj = {};
Object.defineProperty(obj, 'property1', {
    value: 42,
    writable: false
  });
  console.log(obj.property1);// Expected output: 42

//5- .hasOwnProperty(string) - returns a boolean of whether property is the object's own(trur) or inherited(false)
const objt = {};
objt.property1 = 42;
console.log(objt.hasOwnProperty('property1'));// Expected output: true
console.log(objt.hasOwnProperty('toString'));// Expected output: false

//6- .keys():  returns an array of the objtects keys
console.log(Object.keys(objt)); // Expected output: Array ["property1"]
// 7.preventExtensions(obj): prevents new properties from ever being added to an Object
Object.preventExtensions(objt);
//8- .isExtensible(): returns a boolean of whether id nw properties can be added to this Object
console.log(Object.isExtensible(objt));// Expected output: false
//9 .seal(obj) : same as preventExtions + you cannot delete already existing properties
//10 .isSealed() : returns a boolean whether if the object is sealed or not
//=====================================================================================================================================================================

//------------------------------------------------------------
//TASK2- Use 10 of Arrays predefined methods and explain them.
//------------------------------------------------------------
//1 - .at(): takes an integer value and returns the item at that index
const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(`element at index ${index} is:  ${array1.at(index)}`); // Expected output: "element at index 2 is: 8"

//2-  .concat() : used to merge two or more arrays
const array2= ["green", "red"]
let array3= array1.concat(array2)
console.log(array3)//[5, 12, 8, 130, 44,"green", "red"]
//3- .every(): return a boolean whether all elements in the array pass the test implemented by the provided function
const arr = [1,2,-2]
console.log(arr.every(e=> e>0))// false
//4- .fill() -  returns the a modified array changes all elements in an array to a static value, from a start index (default 0) to an end index
const arr1 = [1, 2, 3, 4];
console.log(arr1.fill(0, 2, 4)); //Array [1, 2, 0, 0]

//5- .filter():  like every but returns an arry of the element that passed thr condition implemented by the provided function 
const colors = ["pink", "green", "orange"];
const result = colors.filter(color => color.length > 6);
console.log(result); //["pink", "green"]

// 6.find(): returns the first element that passed the condition implemented by the provided function if there isnt any it returns undefined
const arr2 = [5, 12, 8, 130, 44];
const found = arr2.find(element => element > 10);
console.log(found);// Expected output: 12

//7- .forEach(): loops over the array and execute the provided function on each element
const arr3 = ['a', 'b', 'c'];
arr3.forEach(element => console.log(element)); // "a" "b" "c"

//8. reduce(): returns a SINGL value  as a resault of a certain operation on each elemnt of the array, this operation is implemented by the provided function
const arr4 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = arr4.reduce(
  (accumulator, current) => accumulator + current,
  initialValue
);
console.log(sumWithInitial);//10
// 9 .some():  return a boolean of  whether AT LEAST ONE element in the array passes the test implemented by the provided function
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));// true

//10.map() : creates a new array that contains results of calling a provided function on every element
const arr5 = [1, 4, 9, 16];
const mapedArr= arr51.map(x => x * 2);
console.log(mapedArr);//  Array [2, 8, 18, 32
