/**
 * Generators 
 * مجموعة من الوظائف او الدوال التي تنشئ و تعيد بيانات اريدها  ( مثل إنشاء ارقام غير نهائية )
 * 
 */
/**
 * intro for Generator
 */
function * generateTickets (){
    yield 1 ;
    yield 2 ;
    yield 3 ;
    yield 4 ;
    yield 5 ; 
}

let iterator  = generateTickets() ;
/** generater Create Iterator  */
console.log(typeof(iterator)); /** Object */
console.log(iterator.next()); /** Object { value: 1, done: false } */
console.log("---- do somthing ----");
console.log(iterator.next()); /** Object { value: 2, done: false } */
console.log("---- do somthing ----");
console.log(iterator.next()); /** Object { value: 3, done: false } */
console.log("---- do somthing ----");
console.log(iterator.next()); /** Object { value: 4, done: false } */
console.log("---- do somthing ----");
console.log(iterator.next()); /** Object { value: 5, done: false } */
console.log("---- do somthing ----");
console.log(iterator.next()); /** Object { value: undefined, done: true } */
console.log("---- do somthing ----");
// يتم إرجاع الرقم او القيمة التالية اينما تم استدعائها  ( اي لا يتم إعادة استدعاء الدالة مجددة في كل مرة  )
// ممكن تمرير مصفوفة للدالة 
function * generaterNumbers_1(numbers){
    for(let i = 0 ; i< numbers.length ;i++){
        yield numbers[i];
    }
}
let myNumber = [ 10 ,20,30,40 ,50 ,60];
generaterNumbers_1(myNumber);


function * generaterNumbers_2(){
    yield * [1 ,2,3,4,5,6,7,8] ;
    yield 9 ;
}

/**
 * Generators Part 2 
 * Functionality & Return 
 */
 console.log(`${"--".repeat(20)}`);
 console.log(`---- Functionality & Return  -----`);
// // nourmal function
// function orderBook() {
//     window.alert('you clicked on Button to Order A book');
//     console.log('you clicked on Button to Order A book');

//     window.alert('you Added the Book To Card');
//     console.log('you Added the Book To Card');

//     window.alert('payment Is Done');
//     console.log('payment Is Done');

// }

// let order_1 = orderBook(); /** run all statment in function  */


// // genetat function
// function * orderBook() {
//     window.alert('you clicked on Button to Order A book');
//     console.log('you clicked on Button to Order A book');

//     window.alert('you Added the Book To Card');
//     console.log('you Added the Book To Card');

//     window.alert('payment Is Done');
//     console.log('payment Is Done');

// }

// let order_1 = orderBook(); /** not run any statment   */
// // order_1.next(); /** run step 1 in function */

function * mySkills(){
    yield "HTML";
    yield "css";
    yield "javascript";
    yield "python";
    yield "php";
}

let theSkills = mySkills(); /** iterator */
for(let skill of theSkills ){
    console.log(`iterator : ${skill}`);
}
console.log(`${"--".repeat(20)}`);
for(let skill of mySkills() ){
    console.log(`generator : ${skill}`);
}

console.log(`${"--".repeat(20)}`);
function * sayName(){
    yield "ali" ; 
    yield "Ahmad" ;
    return "Sayed" ;
    yield "samer"; /** Unreachable code detected */
}
let theNames = sayName() ;
console.log(theNames.next()); /** Object { value: "ali", done: false } */
console.log(theNames.next()); /** Object { value: "Ahmad", done: false } */
console.log(theNames.next()); /** Object { value: "Sayed", done: true } */
console.log(theNames.next()); /** Object { value: "undefined", done: true } */

/**
 * Generator Part 3 
 * Create Infinite Number
 */
 console.log(`${"--".repeat(20)}`);
 console.log(`---- Create Infinite Number  -----`);

 function * CreateInfiniteNumber(){
     /** Do Not Loop On This */
     let i = 0 ;
     while (true){
         yield i++ ;
     }
 }

 let InfiniteIterator = CreateInfiniteNumber();
 console.log(InfiniteIterator.next()); /** Object { value: 0, done: false } */
 console.log(InfiniteIterator.next()); /** Object { value: 1, done: false }*/
 console.log(InfiniteIterator.next()); /** Object { value: 2, done: false } */

for(let number of InfiniteIterator){
    /** [start : (last value +1 ) in InfiniteIterator.next()  - 20] */
    if(number >20){
        break;
    }
    console.log(` InfiniteIterator : ${number}`);
}
console.log(`${"--".repeat(20)}`);

for(let number of CreateInfiniteNumber()){
    /** [0-20] */
    if(number >20){
        break;
    }
    console.log(`Generator : ${number}`);
}

/**
 * Generator Part 4 
 * Delegating Generator
 * دالة عامة تاخذ جميع قيم ال generators  و تتعامل معها هي 
 * مثل مندوب عنها
 */
 console.log(`${"--".repeat(20)}`);
 console.log(`---- Delegating Generator  -----`);
 
 function * generaterNumber_2(){
    yield * [1,2,3];
 }
function * generaterNames_2(){
    yield * ["Ali" , "Ahmad" , "Samer"] ;
}

function * generaterAll(){
    yield * generaterNumber_2();
    yield * generaterNames_2();

}
let GenAll = generaterAll() ;
console.log(GenAll.next()); /** Object { value: 1, done: false } */
console.log(GenAll.next()); /** Object { value: 2, done: false } */
console.log(GenAll.next()); /** Object { value: 3, done: false } */
console.log(GenAll.next()); /** Object { value: "Ali", done: false } */
console.log(GenAll.next()); /** Object { value: "Ahmad", done: false } */
console.log(GenAll.next()); /** Object { value: "Samer", done: false } */
console.log(GenAll.next()); /** Object { value: undefined, done: true } */





