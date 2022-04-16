/**
 * Promise 
 * 
 */
// old way 
// function getFirstRepo(APIURL){
//     let myRequset  =  new XMLHttpRequest();

//     myRequset.onreadystatechange = function() {
//         if(this.readyState === 4  && this.status === 200){
//             // console.log(this.responseText);
//             console.log(JSON.parse(this.responseText)[0].name);
//         }
//     }
//     myRequset.open("GET" , APIURL , true);
//     myRequset.send();
// }

// getFirstRepo("https://api.github.com/users/MekadAlibrahem/repos" );

// with promise

function getFirstRepo(APIURL){
    return new Promise((resolve , reject)=>{
        let myRequset  =  new XMLHttpRequest();
        /** onload  = > onreadystatechange*/
        myRequset.onload = function() {
            if(this.readyState === 4  && this.status === 200){
                
                resolve(JSON.parse(this.responseText)[0].name)
            }else{
                reject(Error(this.statusText));
            }
        }
        myRequset.open("GET" , APIURL , true);
        myRequset.send();
    });
}


// getFirstRepo("https://api.github.com/users/MekadAlibrahem/repos").then(
//     (result) => console.log(result), 
//     (error) => console.log(error)
// );
getFirstRepo("https://api.github.com/users/MekadAlibrahem/repos").then(
    (result) => {
        let newElement  =  document.createElement("div");
        let elementText  = document.createTextNode(result);
        newElement.appendChild(elementText);
        document.body.appendChild(newElement);
    }, (error) =>{
        console.log(error);
    }

    
);

