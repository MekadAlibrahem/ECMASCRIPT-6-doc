/**
 * Arrow Function
 */
function test(){
    return 2  ;
}
// console.log(test()) ; // 2 

let regularTestOne  =  function () {
    return 2 ;
}

let arrowTestOne = ()=>{
    return 2 ;
}
// with No parametaers
let arrowtestOne_1 = ()=> 2 ;
let arrowtestOne_2 = _ => 2 ;

console.log(arrowTestOne());
// with one Parametaer 

let regularTestTow  =  function (x) {
    return x * 3 ;
}

let arrowTestTow  =   (x) =>  x * 3 ;
let arrowTestTow_1 =   x =>  x * 3 ;
// with Multiple Parametaers  
let regularTestThree =  function (x , y) {
    return x * y ;
}
let arrowTestThree  =   (x , y) =>  x * y ;

// this 
// function Person(){
//     this.age = 0 ;
//     setInterval(function (){
//         this.age++ ;
//         console.log(this.age); // return nan
//     }, 1000);
// }
// let user = new Person();
function Person(){
    let that = this ;
    this.age = 0 ;
    setInterval(function (){
        that.age++ ;
        console.log(that.age); // 1  -2-3-4-....
    }, 1000);
}
// let user = new Person();
function Person(){
    this.age = 0 ;
    setInterval( () =>{
        this.age++ ;
        console.log(this.age); // return nan
    }, 1000);
}
// let user = new Person();