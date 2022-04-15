/**
 * Symbol Iterator & for Loop 
 * 
 * Iterable => Object Has Symbol Iterator 
 * Iterator 
 *      Object With Interface Designed For Iteration
 *      All Iterators Has Next() Method That Reyurn Result Object 
 *      the Result Object Has Two Props 
 *      [1] value => The Next Value 
 *      [2] Done  => Boolean Value To Tell If The Next Value Exists Or Not 
 * 
 * For  .... Of Loop 
 * 
 * [1] Call Symbol Iterator With Next Method 
 * [2] Save Value Inside Variable  
 * [3] Check For Done Of Its True => Exit The Loop
 * 
 * 
 * 
 */

let myName  = "ali" ;
let myNumber = 1000 ;
let myObject = {};
let myArray = [1 ,2,3 ,4];

console.log(typeof(myName[Symbol.iterator])); /** function */
console.log(typeof(myNumber[Symbol.iterator]));/** undefined */
console.log(typeof(myObject[Symbol.iterator]));/** undefined */
console.log(typeof(myArray[Symbol.iterator]));/** function */

let theStringIterator  = myName[Symbol.iterator](); /** return Object String  iterator */
console.log(theStringIterator); /** String Iterator { , next: function next() ,  } */

let theArrayIterator  = myArray[Symbol.iterator](); /** return Object Array  iterator */
console.log(theArrayIterator); /** Array Iterator { , next: function next() ,  } */

console.log(theStringIterator.next()); /** Object { value: "a",       done: false } */
console.log(theStringIterator.next()); /** Object { value: "l",       done: false } */
console.log(theStringIterator.next()); /** Object { value: "i",       done: false } */
console.log(theStringIterator.next()); /** Object { value: undefined, done: true } */

for (let char of myName ){
    console.log(char);
    /**
     * a
     * l
     * i
     */
}

// for (let num of myNumber ){
//     console.log(char);
//     /**
//      * Uncaught TypeError: myNumber is not iterable
//      */
// }



