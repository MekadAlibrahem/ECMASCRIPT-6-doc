/**
 * symbol 
 * هو نوع بيانات مثل نص و رقم 
 * هو فريد لا يمكن ان يتكرر 
 * و هو ثابت لايمكن تعديله
 */

const mySymbol = Symbol() ; 
console.log(typeof mySymbol);// symbol 

const mySymbolOne =  Symbol('testing');
const mySymbolTwo =  Symbol('testing');
console.log(`mySymboleOne === mySymbolTwo ? ${mySymbolOne === mySymbolTwo}   `); /** false */

const Symbol_1 = Symbol();

const myObject = {
    name: "ali" ,
    age : 22 ,
    [Symbol_1] : "This is Hidden From Iteration"
}

// for of loop 

for(let val of Object.entries(myObject)){
    /** not show [Symbol_1] */
    console.log(val); 
}
console.log(` Propert Name is : ${[...Object.getOwnPropertyNames(myObject)]}`) ; /** name  , age */
console.log(`key Name is ${[...Object.keys(myObject)]}`);
console.log(`Symbol Name is   ` ); 
console.log( Object.getOwnPropertySymbols(myObject)); 

///
const symbol_2 =  Symbol('testing_1');  /** create new syobol */
const symbol_3 =  Symbol('testing_1');  /** create new syobol */
const symbol_4 =  Symbol('testing_4');   /** create new syobol */
console.log(`symbol_2 === symbol_3  ?${symbol_2 === symbol_3}   `); /** false */
const symbol_for_2 =  Symbol.for('for');  /** Symbol Not Exist , Create It */
const symbol_for_3 =  Symbol.for('for');   /** Symbole is Exist , return it */
console.log(`symbol_for_2 === symbol_for_3 ? ${symbol_for_2 === symbol_for_3}   `); /** true */
const symbol_for_4 =  Symbol.for('for_4');   /** Symbole is Exist , return it */

console.log(`symbol_4 key  : ${Symbol.keyFor(symbol_4)}`);/** undefined */
console.log(`symbol_for_4 key  : ${Symbol.keyFor(symbol_for_4)}`);/** for_4 */

// note : do not convert symbole to string 
// console.log(symbol_for_2); /** error cont convert to string */
console.log(`to String : ${symbol_for_4.toString()}`);
console.log(`description : ${symbol_for_4.description} `);


