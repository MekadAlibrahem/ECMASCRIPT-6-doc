/**
 *  Modules Part 3  Named Export vs Defult Export
 * لايمكن إضافة اكثر من متغير واحد ا دالة ك إفتراضية 
 */

 const a1 = 100 ; 
 const a2 = 200 ;

 export  {
     a1 , 
     a2
 }

 // defult export 
export  default function sayHello_3(){
     return `Hello` ;
}





