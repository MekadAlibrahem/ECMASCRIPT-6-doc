/**
 * Spread Operator 
 * تقوم باستخراج عناصر المصفوفة كل عنصر من المصفوفة يكون بعنصر وحده
يمكن تكبيقه على الكائنات 

*/
let arrayOne = [1,2,3] ;
let arrayTwo = [4,5];
let AllArray = [...arrayOne , ...arrayTwo];

function sum(x ,y,z){
    return x+y+z ;
}

const MyNumber = [1,2,3];
console.log(MyNumber); /**  retrun array (1 ,2,3); */
console.log(...MyNumber) ; /** return  item 1 2 3 */
console.log(sum(MyNumber)) ; /**return 1,2,3undefinedundefined  */
console.log(sum(...MyNumber)); /** return  6 */


let arrayThree = [1 ,2,3];
let arrayThree_4  = [1 ,2,3];
let arrayThree_1 = arrayThree ;
let arrayThree_2 = [...arrayThree_4];

arrayThree_1.push(4); /** issue : add item (4) to arrayThree and arrayThreee_1 */
arrayThree_2.push(5); /**fixe old issue  in this case add item(4)  to arrayThree_2  , dont add to arrayThree_4 */
console.log(arrayThree); /** array  [ 1 ,2,3,4] */
console.log(arrayThree_1);/** array  [ 1 ,2,3,4] */
console.log(arrayThree_4);/** array  [ 1 ,2,3] */
console.log(arrayThree_2);/** array  [ 1 ,2,3,5] */



