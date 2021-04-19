interface Resulthandel{(number:number):void}
const printToConsole = (number : number) : void => console.log(`the result is ${number}`); 
const sum =(getal:number[],resulthandel:Resulthandel,resulthandel2:Resulthandel):void=>{
    let total:number=0;
    for(let n of getal){
     total +=n;
    }if(total>=10){
        resulthandel(total);
    }else{resulthandel2(total);}
   
}
sum([3,4,1],printToConsole,number => console.log(`the result ${number} is a very small number`));

