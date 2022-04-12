/**
 * Destructuring 
 * يمكن إنشاء بنية جديدة للبيانات و التعامل معها 
 * ( تخزين بيانات في متغير و التعامل معها )
 * three type  : 1- Object , 2- Array ,  3- Parameter 
 */
/** Destructuring - array */

const langs = ['html' , 'css' , 'js']; 
const [one_1 , two_1 , three_1] = langs ;
console.log(`my langs : ${one_1} , ${two_1} , ${three_1}`);
// حل مشكلة إعدة التعريف في المصفوفات
// يتم إزالة كلمة const  فقط 
// ex

let i_1 = 'defult' ,
    i_2 = 'defult' ,
    i_3 = 'defult' ;
// const [i_1 , i_2 , i_3] =  langs ;/** return error  */ 

[i_1 , i_2 , i_3] =  langs ;  // not error 
console.log(`my langs (with let variables): ${i_1} , ${i_2} , ${i_3}`);
//defult value
const langs_2 = ['html' , 'css' , 'js']; 
const [one_2 , two_2 , three_2 , four_2 = 'defult'] = langs_2 ;
console.log(`my langs : ${one_2} , ${two_2} , ${three_2} , ${four_2}`);
/** لتجاوز عنصر في مصفوفة نحذف اسم العنصر من المتغير و نترك الفاصلة  */
//ex 
const langs_3 = ['javascript' , 'html' , 'php' ]; 
const [one_3 , /* two_3  هنا تم تجاوز العنصر الثاني   */ , three_3 , four_3 = 'defult'] = langs_3 ;
console.log(`my langs (تجاوز العنصر الثاني) : ${one_3}  , ${three_3} , ${four_3}`);
// مصفوفات  متداخلة 

const langs_4 = ['java' ,  'C#', [ "html" , "css"] ] ;
const [l1 ,  l2 ,[w1 , w2 ]] = langs_4 ;
console.log(`my langs (  مصفوفات متداخلة ) : ${l1}  , ${l2} , ${w1} ,  ${w2}`);
// rest operator  
const langs_5 = ['java' ,  'C#',  "html" , "css" , "javascript" , "python"  ] ;
const [l5 ,  l6 ,  ...otherLangs ] = langs_5 ;
console.log(`my langs (  rest operator(parameters) ) : ${l5}  , ${l5} , ${otherLangs} `);
