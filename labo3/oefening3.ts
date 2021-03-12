const multiplyText =(amount:number,text:string,appendix?:string)=>{
    let output :string=text;
    for(let i:number=0;i<amount-1;i++){
        output+= " " + text;
    }if(appendix){
        output+=appendix;
    }
    return output;
}
console.log(multiplyText(3,"mahmoud","?"));