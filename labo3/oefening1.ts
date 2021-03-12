let items : number[] = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87];
const search = (numbers : number[], numberToFind:number):number =>{
    for(let i:number=0;i<items.length;i++){
        if(numberToFind === numbers[i]){
            return i;
        }
    }
}
console.log(search(items, 5)); // 1 
console.log(search(items, 15)); // 6
console.log(search(items, 87))
console.log(search(items, 99))
