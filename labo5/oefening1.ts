/*const printStuff = (amount: number, text: string):void => {
    console.log(`Hello ${text}, you are number ${amount}`);
}
const twoDArray = (element1: string, element2: string): string[] => {
    return [element1, element2];
}
const numberToString = (number: number): string => {
    return `${number}`;
}*/
// kort notatie schrijven voor hierbovenstond code
interface printStuff{(amount: number, text: string):void}

const printStuff:printStuff = (amount, text) => console.log(`Hello ${text}, you are number ${amount}`);
interface twoDArray{(element1: string, element2: string): string[]}
const twoDArray:twoDArray = (element1, element2) =>[element1,element2];
interface numberToString{(number: number): string}
const numberToString:numberToString = number =>  `${number}`;
   

