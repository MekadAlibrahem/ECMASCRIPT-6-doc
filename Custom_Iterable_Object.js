/**
 * Custom Iterable Object
 */

const myObject = {
    name: "Ali" ,
    age : 36 ,
    country: "Egypt", 
    favSkill : "JavaScript" ,
    [Symbol.iterator] (){
        let step = 0; 
        let Properties = Object.keys(this);
        // console.log(Properties) ; /** name , age  , country , favSkill */
        return {
            next() {
                return {
                    // value : myObject[Properties[step]] , /** return  properties  name*/
                    value : myObject[Properties[step]] , /** return value of properties */
                    done  : step++ === Properties.length
                }
            }
        }
    }
}

for(let value of myObject ){
    console.log(value);
}