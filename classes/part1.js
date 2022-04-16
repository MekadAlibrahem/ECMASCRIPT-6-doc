/**
 * OOP => classes Part 1 
 * old And New Class Syntax
 */
// old way  

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(`Hello  ${this.name} your Age is  ${this.age}`);
    }
    getDays() {
        console.log(`You Lived For ${this.age * 365} Days`);
    }
}


const User_1 =  new User("ali" ,  22) ;

User_1.getInfo() ;
User_1.getDays();


// new way 
class User_New_Class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(`Hello  ${this.name} your Age is  ${this.age}`);
    }
    getDays() {
        console.log(`You Lived For ${this.age * 365} Days`);
    }
}


const User_2 =  new  User_New_Class("new class" ,  7) ;

User_2.getInfo() ;
User_2.getDays();

