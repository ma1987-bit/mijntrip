import { resolve } from "node:path";
import { cpuUsage } from "node:process";

const slowSum = (a: number, b: number) => {
   return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        },1000)
        
    });
}

slowSum(1,5).then((result)=>{console.log('1 + 5 =' + result)});

const slowMult = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
            
        },1500)
       
    });
}
slowMult(1,5).then((data)=>{console.log('(1 * 5) ='+ data)})

const slowDivid = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            
            resolve(a/b);
           
            if(a || b == 0){reject("You cannot divide by zero");}
            else{resolve};
        },1500)
       
    });
}

slowDivid(6,3).then((result)=>{console.log('(6 / 3)=' + result)})
slowDivid(6,0).catch((err)=>{console.log('You cannot divide by zero')});