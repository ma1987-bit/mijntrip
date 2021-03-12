let getallen: number[] =[];
for(let i=0; i<=70;i++){
    if(i%7===0){
        getallen.push(i);
    }
}
for(let i=0;i<getallen.length;i++){
    let getal:number = getallen[i];
    if((getal % 5 === 0 || getal%3===0) && !(getal%5===0 && getal%3===0)){
        console.log(getal);
    }
    ((getal % 5 === 0 || getal%3===0) && !(getal%5===0 && getal%3===0))? console.log(getal):undefined;
}