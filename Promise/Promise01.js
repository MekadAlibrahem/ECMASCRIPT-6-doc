/**
 * First Promise Example 
 */

const MyPromise  =  new Promise( (resolve , reject) =>{
/**
 * resolve : Operation succeeded ( if Promise Done  )
 * reject  : Operation Failed ( if failed Promise )
 * 
 */

// console.log(`Welcome To My First Promise`);
/**
 * Asynchronous Operation 
 * Fulfilled => resolve  
 * Rejected  => reject
 */
    let connect =  false ; /** variable status  to connect in databass */
    if(connect){
        resolve("connection  Established ");
    }else{
        // reject("connection Failed");
        reject(Error("connection Failed")); /** throw Error  */

    }
}).then(
        (resolved) => console.log(resolved) ,
        (rejected) => console.log(rejected) 
    );
    
// or 
// MyPromise.then(
//     (resolved) => console.log(resolved) ,
//     (rejected) => console.log(rejected) 
// );

