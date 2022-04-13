/**
 * forEach() 
 * foreach(currentValue , index m array)
 */

const arr =['A' , "B" , "C" , "D" , , "F"];

arr.forEach((element, index) =>{
    // لا يعرض القيم الفارغة  اما حلقة عادية تعرضها للبانات الفارغة 
console.log(`${index} -> ${element} `);
}); 
function printElements(element , index){
    console.log(`${index} -> ${element} `);

}
console.log(`${"--".repeat(20)}`);
arr.forEach(printElements);
console.log(`${"--".repeat(20)}`);
console.log(`--- set ----`);
let myset = new Set([1,2,3,4,5,5,5,6,7]);
myset.forEach((element, index) =>{
    // in set : element = index  becuse set dont have key just value
console.log(`${index} -> ${element} `);
}); console.log(`${"--".repeat(20)}`);
console.log(`--- Map ----`);

const myMap = new Map([
    [1 ,"A"], 
    [2 ,"B"],
    ["C" , 3],
    [false , "flase"],
    [4 , {b:1 }],
]);
myMap.forEach((value, key) =>{

console.log(`${key} -> ${value} `);
}); console.log(`${"--".repeat(20)}`);