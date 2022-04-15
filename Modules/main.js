/**
 * Modules Part 1  Export & import 
 *   
 */
// Important Note  : Run Live Server Before run code 

import { a , myArray , sayHello} from './app.js' ;
console.log(a);
console.log(myArray);
console.log(sayHello("ali"));

/**
 *  Modules Part 2  Import All And Aliases 
 */

// import { myRank , sayHello_2 } from './app02.js';

// console.log(myRank); 
// console.log(sayHello_2("moduel_2"));

//  can import All use  *  
import * as all from './app02.js' ;
/** Important Note :  إضافة او تضمين الجميع تعيد فقط المتغيرات و الدوال التي تم تصديرهااما التي لم يتم تصديرها لا ينمكن الوصول اليها  */
// console.log(myRank);  /** error */
// console.log(sayHello_2("moduel_2")); /** error */
console.log(all.myRank);  
console.log(all.sayHello_2("moduel_2")); 
console.log(all);/** Object { myRank: 100, sayHello_2: sayHello_2(name), … } */

/**
 *  Modules Part 3  Named Export vs Defult Export
 */

import {a1 ,a2} from './app03.js' ;
// import defult 
import sayHello_3 from './app03.js';

console.log(sayHello_3);




