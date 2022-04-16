/**
 * promise  part 5 
 * Promise All And Race 
 * all :  يجب تحقيق جميع الوعود اولا 
 * race :  يعيد اول وعد تحقق و يهمل الباقي  
 * 
 */

// const MyFirstpromise  =  new Promise((resolve , reject)=>{
//     let conect  = true; 
//     if(conect){
//         resolve("Firsr promise Resolved");
//     }else{
//         reject("first promise Rejected ");
//     }
// });

// const MySecondpromise  =  new Promise((resolve , reject)=>{
//     let conect  = false; 
//     if(conect){
//         resolve("Second promise Resolved");
//     }else{
//         reject("Second promise Rejected ");
//     }
// });


// Promise.all([MyFirstpromise , MySecondpromise]).then(
//     (result) =>{
//         console.log(result);
//     }

    
// );
const MyFirstpromise  =  new Promise((resolve , reject)=>{
       window.setTimeout(()=> {
           resolve("First promise Resolved");
       } , 500)
    });

const MySecondpromise  =  new Promise((resolve , reject)=>{
    window.setTimeout(()=> {
        resolve("Second promise Resolved");
        } , 100)
    });
 /**
  * Second promise Resolved 
    First promise Resolved
  */
// MyFirstpromise.then((result)=> console.log(result));
// MySecondpromise.then((result)=> console.log(result));

Promise.race([MyFirstpromise , ,MySecondpromise]).then(
    (result)=>{
        console.log(result);
});
    



