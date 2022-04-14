/**
 * set  vs weakSet :
 * 
 */

/**
 * Garbage Collections  :  
 * له علاقة بالتخزين في الذاكرة موجو في جميع لغات البرمجة 
 * 
 */


/**
 * set  :  
 * - contain any Type of values 
 * - Get Elements Count With Size 
 * - ForEach Available To Iterate
 * - You can Get Its Keys
 * 
 * weakSet :
 * - contain only object
 * - You can't Use Size To Get Elements Count 
 * - ForEach Not Available To Iterate
 * - You can't Get  Keys
 * 
 */

let mainObject = {A:1} ;
let mySet = new Set([mainObject]);
let Object_1 = {B:2};
let Object_2 = {C:3};
mySet.add(Object_1) ;
mySet.add(Object_2) ;

console.log(mySet); 
console.log(mySet.has(Object_1)); /** true */
console.log(mySet.has(Object_2));/** true */

console.log(mySet.size);/** 3 */
console.log(mySet.keys());

mySet.delete(Object_1);
console.log(mySet.has(Object_1));/** false */
Object_2 = null ;
console.log(mySet.has(Object_2));/** false */

mySet.add("String") ;  /** add string */
mySet.add(22) ; /** add number */
console.log(mySet); /** mainobject object_2 String 22 */
mySet.forEach(v=>{
    /**
     * mainOject 
     * Object_2 
     * String
     * 22
     */
 console.log(v);
});
let mainObject_2 = {A:1} ;
let myWeakSet = new WeakSet([mainObject]);
let Object_3 = {B:2};
let Object_4 = {C:3};
myWeakSet.add(Object_3) ;
myWeakSet.add(Object_4) ;

console.log(myWeakSet); /** MainObject_2 Object_3 , Object_4 */
console.log(myWeakSet.has(Object_3)); /** true */
console.log(myWeakSet.has(Object_4));/** true */
/**
 *  can't check size in WeakSet
 */
// console.log(myWeakSet.size);/** undefined */
/**
 * can't show keys in weakSet
 */
// console.log(myWeakSet.keys());/** Uncaught TypeError: myWeakSet.keys is not a function */

myWeakSet.delete(Object_3);
console.log(myWeakSet.has(Object_3));/** false */
Object_4 = null ;
console.log(myWeakSet.has(Object_4));/** false */
/**
 * can't add String to WeakSet 
 * can add object 
 */
// myWeakSet.add("String") ;  /** Uncaught TypeError: WeakSet value must be an object, got "String" */
/**
 * can't add number to WeakSet 
 * can add object 
 */
// myWeakSet.add(22) ; /** Uncaught TypeError: WeakSet value must be an object, got 22 */
console.log(myWeakSet); /** mainobject object_2 */
// Uncaught TypeError: myWeakSet.forEach is not a function
// myWeakSet.forEach(v=>{
//     /**
//      * mainOject 
//      * Object_2 
//      * String
//      * 22
//      */
//  console.log(v);
// });






