enum color{
    Red,Orange,Yellow,Green, Blue,Indigo, Violet
};
let colors:string []=[];
for(let i =0 ; i< 7;i++){
    colors.push(color[i]);
    console.log(color[i])
}
console.log("-----------------------")
while(colors.length>0){
    console.log(colors.pop())
}
