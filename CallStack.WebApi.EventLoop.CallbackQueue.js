/**
 * Call Stack , Web Api   , Event Loop , CallBack Queue 
 * Important knowledge  
 * For Promises 
 * - Call Stack 
 * ---- Mechnism To make Interpreter Track Your Calls  
 * ---- When You Call A Function its Added To The Stack 
 * ---- When Function Executed Its Removed From The Stack 
 * ---- The Interpreter Continue  Calling From The Last Point Reached 
 * ---- Call Stack Detect Wep APi And leave It To The Browser To Handle It 
 * - Web Api :
 * ---- Methods Available  From Enveroment => Browser 
 * ---- When Complete It Add The Callback To The Callback Queue
 * 
 * - Event Loop :
 * ---- Wait The Call Stack To Finish 
 * ---- Get Callback From Callback Queue  
 * ---- Add Callback To Call Stack 
 * - Callback Queue
 */
/**
 * Call Stack : 
 * هو الية يتم استخدامها في مترجم اللغة لتتبع الدوال و الاوامر التي تعمل 
 * عند استدعاء دالة واثناء تنفيذها يتم إضافتها الى المكدس و عند الانتهاء يتم إزالتها من المكدس 
 * يستمر العمل عند اخر نقطة تم الوصول اليها 
 */
// let i  = 10 ;
// let j  =  20 ; 
// console.log(i + j ); 

// function first(){
//     console.log("Hello First"); 

// }
// function second(){
//     first(); 
//     console.log("Hello second"); 
    
// }
// second(); 
// /**
//  * 30 
//  * Hello First 
//  * hello seconf
//  */


// console.log("one");
// window.setTimeout(()=> console.log("Tow") , 0) ;
// console.log("three"); 
// /**
//  * one  
//  * three 
//  * Tow
//  */

/**
 * Web Api : 
 *  هي الدوالة المتاحة في بيئة العمل التي تجعل جافاسكريب تنفذ الكود فيها
 * بيئة العمل هنا هي المتصفح 
 */

// console.log(myVariable);/**Uncaught ReferenceError: can't access lexical declaration 'myVariable' before initialization */
window.setTimeout(() => console.log(myVariable) ,0); /** 300 */
let myVariable  = 100 ; 
myVariable += 200 ;