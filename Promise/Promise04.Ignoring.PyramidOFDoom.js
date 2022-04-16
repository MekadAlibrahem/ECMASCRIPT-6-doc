/**
 * promise Part 4  
 * Ignore Pyramid Of Doom 
 */


const myPromise  =  new  Promise((resolve , reject)=>{
    let thePost =  ["A" , "B" , "C" , "D" , "E" ,"F" , "G" , "H"];
    resolve(thePost) ;
});

myPromise.then(
    (result)=>{
        console.log(`Total Number Of posts Is ${result.length} Post ` );
        return result ;
    }
)
.then ((result)=>{
    console.log(`${"--".repeat(20)}`);
    console.log(`the First Post Is ${result[0]}`);
    return result ;
})
.then ((result)=>{
    console.log(`${"--".repeat(20)}`);
    console.log(`the last Post Is ${result[result.length-1]}`);
    return result ;
})
.then ((result)=>{
    console.log(`${"--".repeat(20)}`);
    console.log(`Every Page Has 2 posts`);
    console.log(`Application Has ${result.length / 2} Pages`);
    return result ;
});