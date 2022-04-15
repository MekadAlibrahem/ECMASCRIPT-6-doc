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