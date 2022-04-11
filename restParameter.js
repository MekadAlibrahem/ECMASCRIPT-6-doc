/**
 * Rest Parameter  
 * ياخذ مصفوفة متغيرات غير محددة العدد و يمررها للدالة 
 */

function sumAll(...numbers){
    let sum = 0 ;
    numbers.forEach(number => {
        sum += number ;
    });

    return sum ; 
}


console.log(sumAll(1)); 
console.log(sumAll(1 , 2));
console.log(sumAll(1 , 239 ,21));
console.log(sumAll(1 , 2 , 4));
console.log(sumAll(1 , 3, 5,6,7));