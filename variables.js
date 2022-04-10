/**
 * var: 
 *  - function scope
 *  - Can be ReDeclare
 *  - Undefined When Accessing a Variable Before it's Decleared
 *  - Create Properties in the window Object
 * let: 
 *  - Block scope 
 *  - Cannot be ReDeclare
 *  - ReferencecError When Accessing a Variable Before it's Decleared
 *  - Does Not Create Properties in the window Object
 * 
 * const:
 *  - Block scope 
 *  - Cannot be ReDeclare
 *  - ReferencecError When Accessing a Variable Before it's Decleared
 *  - Does Not Create Properties in the window Object
 */

function varTest(){
    console.log("start var Test method ");
    var x = 1 ;
    var x = 4 ; // can be redeclare

    if(true){
        var x = 2 ;
        console.log(" in if : x =" + x);
    }

    console.log("out if  : x =" + x);

    console.log("end var Test method");
}
function letTest(){
    console.log("start let Test method ");
    let x = 1 ;
    // let x  = 9 ; // error cannot be redeclear
    let y = 3 ;

    if(true){
        let x = 2 ;
        console.log(" in if : x =" + x +" and y =" + y );
    }

    console.log("out if  : x =" + x +" and y =" + y );

    console.log("end let Test method");
}


varTest();
letTest();

var v = 1 ;
let l = 2 ;

console.log(window.v); // return value v  = 2  
console.log(window.l); // undefined 

///
console.log("const start"); 
const NAME  = 2 ;
// NAME = 7 ; // return error 
// const NAME  = 8 ; // return error   
if(true){
    const NAME  = 3 ; 
    console.log("in IF  : const NAME =" + NAME);
}
console.log("out IF  : const NAME =" + NAME);
const SETTING = [] ;
// SETTING = [ 'js' , 'htmk'] ; // return error  
SETTING.push('html' , 'css' , 'js');
console.log(SETTING);

//const object   
const  PERSON  = {
    'name' : 'ahmad' ,
    'age'  :36 
}
PERSON.name = "ali" ; // not error  
Object.freeze(PERSON) ; // cannot change any value in object  
console.log(PERSON);