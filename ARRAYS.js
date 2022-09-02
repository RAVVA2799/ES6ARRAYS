//<p id="demo"></p>


const myArr = Array.from("ABCDEFG");
console.log(myArr);

//.......................................................//
//The Array.keys() method returns an Array Iterator object with the keys of the array.</p>

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();           //calling keys/index positions directly.

let text = "";
for (let x of keys) {
  text += x + " ";          //index position of emenets will be returned.//
}

console.log(text);



//......................................................................//


//subtract the numbers in the array, starting from the left://


//ARRAY REDUCE FUNCTION
const numbers = [175, 50, 25];
console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
  return total - num;
}

//...................................//
//finding elements in an array/
const nums = [4, 9, 16, 25, 29];
let first = nums.find(myFunction);         //finds the number
let first1=nums.findIndex(myFunction);     //finds the position of  the number.
console.log("first number  over 18 is "+first+" and position is  "+first1);       //value more than 18 will be printed.
function myFunction(value, index, array) {
  return value > 18;       //checks number greater than 18
  
}

//...........................................................................................//
