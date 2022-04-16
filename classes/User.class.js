
class User {
    constructor(name  , email){
        this.name = name ; 
        this.email = email ;
    }
    getInfo(){
        console.log(`Hello  ${this.name} your Email is  ${this.email}`)
    }
}

export default User ;