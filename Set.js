/**
 * set : هو كائن يسمح بتخزين القيم الفريدة 
 * شبيه بالمصفوفات 
 * ليس لدى القيم مفاتيح
 */
/**
 * Iterable : اي كائن يمكن تمريره لحلقة تكرارية  ( مصفوفة  و نص ..)
 */

/**
 * set syntax  
 *  set : new Set(Iterable);
 */

let myBooks =  new Set() ;
// console.log(typeof myBooks); /** return object */
// comper set and array 

let myset = new Set([1,2,3,3]);
let myarray  = [1,2,3,3];
console.log(myset) ;/** 1 ,2,3  بدون تكرار*/
console.log(myarray); /**1 ,2,3,3 */
/**
 * set : لايمكن الوصول الى العناصر عبر index 
 * 
 */
console.log(myset[1]); // undefined

// set method 
// add() : add new element in set 
let myset_1 =  new Set("one" /** يقبل عنصر يمكن تمرريره ل حلقة تكرارية لذلك قسم النص الى محاررف */).add('one');
myset_1.add('two'); /** قبل النص كله ك عنصر واحد لا يقوم بتقسيمه لمحارف */
myset_1.add('three');
console.log(myset_1);
// delete () delete element from set 

myset_1.delete("three"); 

console.log(`set after delete element (three) : ${[...myset_1]}`);
// has(x) : تعيد قيمة  صح إذا وجدت عنصر ضمن الset

console.log(`the element (two) in myset ? ${myset_1.has("Two".toLowerCase)}`);/** true  */ 
/** يمكن استخدام تعابير و دوال تحويل ضمن دالة البحث */
// size() : return size set 
console.log(`size myset is : ${myset_1.size}`);//5 // o , n,e,one,two//
// clear() : delete all elements in set 
myset_1.clear(); 













