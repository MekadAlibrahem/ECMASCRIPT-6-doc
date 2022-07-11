/**
 * String Method 
*/

/**
 * startWidth() : هل النص يبدأ بحرف او نص معين 
 * حساسة لحالة الاحرف 
 * starstWith(search Sttring  ,  position = 0) ;
 * endsWith =>  string.endWith( search string  ,  position = string.length );
 * 
 */

let x  =  "Elzero web school" ;
console.log(`if (Elzero) start in [ ${x} ] : ${x.startsWith('Elzero')} `); /** true */
console.log(`if (elzero) start in [ ${x} ] : ${x.startsWith('elzero')} `); /** false */
console.log(`(Elzero) start in [ ${x} ] : ${x.startsWith('Elzero' , 7)} `); /** false */
console.log(`(school) end in [ ${x} ] from start to end length : ${x.endsWith('school')} `); /** true */
console.log(`(school) end in [ ${x} ] from length 0  to lenght 10 : ${x.endsWith('school' , 10)} `); /** false */
console.log(`(web) end in [ ${x} ] from length 0  to lenght 10 : ${x.endsWith('web' , 10)} `); /** false */
/**
 * includes() : تبحث عن نص ضمن نص اخر و تعيد true or false
 * includes : string.includes(search string) ;
 * includes : string.includes(search string  ,  position = start) ;
 */

console.log(` found (web) in [${x}] : ${x.includes('web')} `); // true
console.log(` found (web) in [${x}] start in 7 : ${x.includes('web', 7)} `); //true
console.log(` found (web) in [${x}] start in 8 : ${x.includes('web' , 8)} `); //false
