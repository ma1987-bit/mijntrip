import { url } from "node:inspector";

const fetch = require('node-fetch');
let promise1 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000').then((response:any) => response.json());;
let promise2 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001').then((response:any) => response.json());;
let promise3 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002').then((response:any) => response.json());;
let promises =[promise1,promise2,promise3];
Promise.all(promises)
.then((result)=>{for(let i=0;i<result.length;i++){
    console.log(result[i])
   
      
}})
.catch((err)=>console.log(err));