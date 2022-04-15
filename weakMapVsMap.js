/**
 * WeakMap vs Map 
 */

/**
 * Map :
 * - contain any Type of values 
 * - Get Elements Count With Size 
 * - ForEach Available To Iterate
 * - You can Get Its Keys
 * 
 * WeakMap: 
 * - contain only object
 * - You can't Use Size To Get Elements Count 
 * - ForEach Not Available To Iterate
 * - You can't Get  Keys
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 * تفيد عندما يكون لدينا كائنات نريد حذفها بعد العمل عليها 
 */
 

let myMap  =  new Map(); 
let Object_1 = {a :1} ;
myMap.set(Object_1 , "test");
myMap.set("b" , 2);
myMap.set("c", 3);
myMap.set(1 , 15);

console.log(myMap);/** Map(4) { {…} → "test", b → 2, c → 3, 1 → 15 }  */
console.log(myMap.get("c"));/** 3 */
console.log(myMap.get(Object_1)); /** test */

console.log(myMap.has("b")); /** true */
myMap.delete("b");
console.log(myMap.has("b")); /** false */

Object_1 = null ;
console.log(myMap.get(Object_1)); /** undefined */

console.log(myMap.size); /** 3 */

// WeakMap
let myWeakMap  =  new WeakMap(); 
let Object_2 = {a :1} ;
let Object_3 = {b :2} ;
myWeakMap.set(Object_2 , "test_1");
myWeakMap.set(Object_3 , "test_2");
/**
 * ERORR : WeakMap key must be an object
 */
// myWeakMap.set("b" , 2);
// myWeakMap.set("c", 3);
// myWeakMap.set(1 , 15);

console.log(myWeakMap); /** WeakMap { {…} → "test_2", {…} → "test_1" } */
console.log(myWeakMap.get(Object_2)); /** test_1 */

console.log(myWeakMap.has(Object_3)); /** true */
myWeakMap.delete(Object_3);
console.log(myWeakMap.has(Object_3)); /** false */

Object_2 = null ;
console.log(myWeakMap.get(Object_2)); /** undefined  */

console.log(myWeakMap.size); /** undefined - WeakMap can't use Size */

