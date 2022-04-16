/**
 * Promise Part 5 
 * Fetch & Training's 
 * 
 */

fetch("https://api.github.com/users/MekadAlibrahem/repos" )
.then( (result) => {
    let allRepos  = result.json(); 
    console.log((allRepos));
    return allRepos ;
    
}).then((repos) => {
    console.log(`Total number Of Repos Is ${repos.length}`);
    return repos ;
}).then(
    (repos)=>{
        console.log(`First Repo Is ${repos[0].name}`);
        return repos ;
}).then(
    (repos)=>{
        console.log(`Last Repo Is ${repos[repos.length-1].name}`);
        return repos ;
}).then(
    (repos)=>{
        for (let i = 0 ; i<repos.length ; i++){
            let newElement = document.createElement("div");
            let elementsText = document.createTextNode(repos[i].name);
            newElement.appendChild(elementsText);
            document.body.appendChild(newElement);
            
        }
});


