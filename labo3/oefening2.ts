const reverseString = (text:string):string =>{
    return text.split("").reverse().join("");

}
console.log(reverseString("hello"));


//tweede manier voor dit oefening
const reverseStrings = (text:string):string =>{
    let output : string ="";
    for(let char of text){
        output = char + output;
    }
    return output;

}
console.log(reverseStrings("hello"));
