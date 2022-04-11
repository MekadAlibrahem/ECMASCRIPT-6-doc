/**
 * Defult Parametars
 * defult value  => parametare  if dont  change value whene invoke method
 */


// function with out defult parametars 

function showResult(username , role , them ){
    return `hello ${username} , Your Role is : ${role} , WebSite Them is : ${them}`;
}
console.log(showResult()); /** return undifined for parametare not use */
/** function with defult parametars */
function showResult_2(username ='defult' , role = 'defult' , them = 'defult' ){
    return `hello ${username} , Your Role is : ${role} , WebSite Them is : ${them}`;
}
console.log(showResult_2()); /** return defult value for parametare not use */