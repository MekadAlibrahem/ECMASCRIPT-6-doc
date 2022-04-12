/**
 * Destructuring 
 * يمكن إنشاء بنية جديدة للبيانات و التعامل معها 
 * ( تخزين بيانات في متغير و التعامل معها )
 * three type  : 1- Object , 2- Array ,  3- Parameter 
 */

/** old way in js */

var user = {
    name : "ali" , 
    age : 21 , 
    city: "homs",
    gender : "Male" ,
    webSite: "not web site" 
}
var u = user.name , 
    a = user.age ,
    c = user.city;
console.log(` old way :  my name is ${u} , my Age is  ${a} `);

/** new way in ES6 */

// let name = "defult " , 
//     age = "defult" ;
const user_2 = {
    name : "ali" , 
    age : 21 , 
    city: "homs",
    gender : "Male" ,
    webSite: "not web site" 
};
const user_3 = {
    name_3 : "ali" , 
    age_3 : 21 , 
    city_3: "homs",
    gender_3 : "Male" ,
    webSite_3: "not web site" 
};
// /**
//  *  عند تعريف المتغيرات سابقا في let لم نسطع اعادة تعريفها مرة ثانية 
//  *  
//  */
// // const {name_let  , age_let } = user_2 ; /**  return error  : redeclaration of let name*/
// /** fix redeclaration of let name & age */
// ({name  , age } = user_2) ; /** هنا تم إعادة تعين القيم وليس اعادة تعريف متغيرات جديدة  */
// console.log(`new Way (let) : my name is ${name} , my Age is  ${age} `)

const {name  , age , them } = user_2 ;

console.log(`new Way : my name is ${name} , my Age is  ${age} `);
/**
 *  إذا  تمم تعريف متغير غير موجود بالكائن يعيد قيمة غير موجودة  
 * يتم إصلاح ذلك عن طريق إسناد قيم افتراضية 
 */
console.log(`new Way : my name is ${name} , my Age is  ${age} , my them is ${them} `);
const {name_3  , age_3 , them_3 = 'defult' } = user_3 ;
console.log(`new Way : my name is ${name_3} , my Age is  ${age_3} , my them is ${them_3} `);

/**
 * الامثلة السابقة اسندنا قيم كل خاصية في الكائن الى متغير بنفس الاسم وعند وضع اسم مختلف يعيد قيمة غير معرف 
 * يمكن إسناد قيمة الخاصية الى متغير باسم مختلف عن طريق استخدام طريقة ( مفتاح =: قيمة )
 * ex const { keyName : varName = 'defultvalue'}
 */
 const { name: name_2  , age: age_2 , them : them_2 = 'defult' } = user_2 ;
console.log(`new Way (key : value): my name is ${name_2} , my Age is  ${age_2} , my them is ${them_2} `);
/** مثال للوصول الى كائن ضمن كائن اخر  */
const user_4 = {
    name : "ali" , 
    age : 21 , 
    city: "homs",
    gender : "Male" ,
    webSite: "not web site"  ,
    langs: {
        html : '70%' , 
        css : '90%' ,
        js :'10'
    }
};

const {name:name_4  , age:age_4 , langs:{html , css} } = user_4 ;
console.log(`new Way (instans object) : my name is ${name} , my Age is  ${age} and my html is: ${html}`);
/** إذا كنا نريد إعادة الكائن الداخلي فقط  */
const {html:html_1 , css:css_1 , js:js_1} = user_4.langs ;
console.log(`html : ${html_1} and css : ${css_1}  and js: ${js_1}`) ;