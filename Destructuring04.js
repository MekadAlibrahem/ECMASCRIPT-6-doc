/**
 * Destructuring 
 * 
 */
// Parameter
const user =  {
    name : "ali" ,
    age : 23  ,
    skills:{
        html: '80%' ,
        css : '70%' ,
        js : [ 'vuejs' , 'reactjs' , 'Angularjs']
    }
};

// const {name , age , skills:{html , css , js:[one , two  , three] } } =  user ; 

function oldShowInfo(user){
    console.log(`old way`);
    console.log(`my Name is ${user.name} and my age is ${user.age}`) ;
    console.log(`my html skills is ${user.skills.html} and css ${user.skills.css} `);
    console.log(`js FrameWorks  ${user.skills.js[0]} , ${user.skills.js[1]} , ${user.skills.js[2]}`)
}
function newShowInfo({name , age , skills:{html , css , js:[one , two  , three] } }){
    console.log(`new way`);
    console.log(`my Name is ${name} and my age is ${age}`) ;
    console.log(`my html skills is ${html} and css ${css} `);
    console.log(`js FrameWorks  ${one} , ${two} , ${three}`)
}
oldShowInfo(user) ;
newShowInfo(user);