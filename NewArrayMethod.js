/**
 * New Array Method
 * Array.of
 * Array.from 
 * Array.fill
 * Array.find() 
 * Array.findIndex() 
 * Array.copyWithin()
 */

/**
 * Array.of :
 * Array.of(Elements to Create The Array)
 */
// old array 
let oldArray = Array(100);
console.log(oldArray);/** (100) [empty x 100] */
console.log(oldArray.length); /** 100 */

let newArray = Array.of(100);
console.log(newArray);/**  [100] */
console.log(newArray.length); /** 1 */

/**
 * Array.from (Iterable , Mapfn , this);
 * 
 */

let myName = "Osama" ;
let ArrayofLetters = Array.from(myName);
console.log(myName); /** Osama */
console.log(ArrayofLetters); /**(5) ["O" , "s" ,"a" , "m" ,"a"] */

let mynumber = [ 10 , 20 , 30 , 15 , 18 ,100 , 60];
let numberMinusten = Array.from(mynumber , number=> number - 10);
console.log(numberMinusten); /** Array(7) [ 0, 10, 20, 5, 8, 90, 50 ] */

/**
 * Array.fill :
 * Array.fill(value To Fill , Start Defult  0 ,  end Defult Array.lenght);
 */

let TheNumber = [1,10,20,30,70,80];

// TheNumber.fill(100); /** All will Be 100 -> [ 100 , 100 , 100 , 100 , 100 , 100 ] */
TheNumber.fill(100 ,2 ); /** From index = 2  will Be 100 -> [ 1 , 10 , 100 , 100 , 100 , 100 ] */
// TheNumber.fill(100 ,1 ,3 ); /** From  ndex =1 to index = 2 will Be 100 -> [ 1, 100, 100, 30, 70, 80 ] */

console.log(TheNumber);

/**
 * Array.find :  return first value  not all values 
 */

 let number_1 = [1,10,20,30,70,80];
 let found = number_1.find(el => el > 10);
 console.log(found); /** 20 */

 /**
  *  Array.findIndex() return First Index  Not All  
 */
let found_2  =  number_1.findIndex(el => el>10);
console.log(found_2); /** 2 */

/**
 * Array.copyWithin(target ,  start defult 0 , End Defult Array.lenght) 
 * 
 */

let myLetters =  ["A" ,"B" , "C"  , "D" , "E" , "F" , "G" , "I" , "J"];
let myLetters_2 =  ["A" ,"B" , "C"  , "D" , "E" , "F" , "G" , "I" , "J"];

myLetters.copyWithin(0);
console.log(myLetters);/** ["A" ,"B" , "C"  , "D" , "E" , "F" , "G" , "I" , "J"] */
myLetters.copyWithin(0,3,6);
console.log(myLetters);/** ["D", "E", "F", "D", "E", "F", "G", "I", "J"] */
myLetters_2.copyWithin(2,8,10);
console.log(myLetters_2);/** ["A", "B", "J", "D", "E", "F", "G", "I", "J"] */





