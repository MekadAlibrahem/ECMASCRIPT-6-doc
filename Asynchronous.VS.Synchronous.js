/**
 * 
 * Asynchronous Vs Synchronous Programing
 * 
 */

/**
 * Synchronous :  كل تعليمة في الكود لازم تخلص قبل تنفيذ التعليمة التي تليها  
 * هنا يتم طباعة اول رسالة ثم ينتظر الضغط على زر النافذة المنبثقة  ثم يطبع ثاني رسالة  
 */
// console.log("one");
// window.alert("do somthing");
// console.log("tow");

/**
 * Asynchronous  Example
 */

/**
 * Function To Do Somthing 
 * Do important Thing , Waiting is A Big Problem 
 * GeT DATA 1
 * GeT DATA 2
 */
console.log("Function To Do Somthing ");
/**
 * here in real program  : Ajax  , fetch Api  .....
 */
window.setTimeout(()=> console.log("GeT DATA 1") , 1000);
window.setTimeout(()=> console.log("GeT DATA 2") , 2000);

console.log("Do important Thing , Waiting is A Big Problem ");


