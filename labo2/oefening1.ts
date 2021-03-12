let Getallen: number[]= [];
for(let i=100; i<=200; i++){
    Getallen.push(i);
}
let i:number =0;
while(i<Getallen.length){
    console.log(Getallen[i])
    i++;
}
console.log("--------------------")
for(let i=100; i<=200; i++){
    if(Getallen[i]%3===0){
        console.log(Getallen[i]);
    }
}
