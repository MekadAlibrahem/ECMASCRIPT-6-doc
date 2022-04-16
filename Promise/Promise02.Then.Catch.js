/**
 * Promise Part 3  : Promise The & Catch Training's 
 * 
 */
 const MyPromise  =  new Promise( (resolve , reject) =>{

    /**  Only status Allowed  */ 
    // resolve("Resulved");
    // reject("rejected"); /** Ignored */
    if(Math.random() * 100 < 50){
        resolve("good") ;
    }else{
        reject("Bad");
    }
}); 
// MyPromise.then(
//     (resolved) => console.log(resolved) ,
//     (rejected) => console.log(rejected) 
// );
/**
 *  catch == then (null , reject)
 */
// MyPromise.then(
//     null ,
//     (rejected) => console.log(rejected) 
// );
MyPromise.then(
    (resolved) => console.log(resolved) 
   
);
MyPromise.catch( 
    (rejected) => console.log(rejected)
); 



/** callback function */
firstRequest(function(response){

    secoundRequset(response , function(nextRequest){

        thirdRequest(nextRequest , function(finalRequest){

            console.log('final response' + finalRequest );

        } , failureCallback)

    } , failureCallback)

} , failureCallback);


/** promise  */

firstRequest()
.then((response) => secoundRequset(response))
.then((nextRequest) => thirdRequest(nextRequest))
.then((finalRequest) => console.log('final requsest ' + finalRequest) )
.catch(failureCallback);
