/**
 * map :
 * مجموعة من البيانات التي لها قيمة و مفتاح مثل الكائنات 
 * لكن فيها ممكن ان يكون المفتاح اي نوع بيانات او ممكن ان يكون كائن
 */

// normal object  
var user = {} ;
user["name"] = "ali" ;
user.website = "ali.org"; 
user["10"] = "String" ;
user[10] = "number" ;
// يتم إعادة تعريف القيمة فقط 
console.log(user); 
console.log(user.name);
console.log(user['website']);

let myMap = new Map([
    /** set elemnts */
    [1 , "one"],
    [2 , "two"],
    [3 , "three"],
]);
myMap.set("10" , "string" )
     .set(10 , "number")
     .set(false , "boolean")
     .set({a :1 , b:1} , "object")
     .set(function dosomthing(){} , "function");
console.log(myMap)

/** الفرق 
 * في المصفوفات يتم تحويل المفتاح الى نص 
 * اما ال map يترك المفتاح كما هو 
 */
// map method 
// size : it is not method it (key => value = count element)
console.log(`my count elements in my MAP is ${myMap.size}`);
// get() :  return element by key 
console.log(`get method : get element by key(10) : ${myMap.get(10)}`);
console.log(`get method : get element by key("10") : ${myMap.get("10")}`);
// has() : البحث عن مفتاح إاذا موجود او لاء 
console.log(`the key ("10") is used ? ${myMap.has("10")}`);
console.log(`delete item by key("10") ? ${myMap.delete("10")}`); /** return true if delete done eles that return error if key not used */
myMap.clear()
console.log(`clear elements Map `);





