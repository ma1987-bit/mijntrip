import * as chalk from "chalk";
enum Color{
    Red, blue, green
}
const multiplyTextColor =(amount:number,text:string, color : Color,appendix?:string)=>{
    let output :string=text;
    for(let i:number=0;i<amount-1;i++){
        output+= " " + text;
    }if(appendix){
        output+=appendix;
    }
    switch(+color){
        case Color.Red:
            console.log(chalk.red(output))
            break;
            
        case Color.blue:
            console.log(chalk.blue(output))
            break;
            case Color.green:
                console.log(chalk.green(output))
                break;  
        default:
        console.log(output);
            
    }
    
}
multiplyTextColor(3,"flower",Color.blue,"?");
multiplyTextColor(3,"mahmoud",Color.Red,"?");
multiplyTextColor(3,"wonderfull",Color.green,"?");