interface CalculateDogAge{(age :number):number}
const calculateAnimalAge =(age:number,ratio:number):number=> age*ratio;
const calculateDogAge = (age:number):number=> calculateAnimalAge(age,7);

console.log(calculateDogAge(3));
console.log(calculateAnimalAge(3,7));
interface calculatespecficAnimalage{
    (age:number):number
}

const calculateAnimalAgeFunctional = (ratio:number):calculatespecficAnimalage=>{
    return age => calculateAnimalAge(age,ratio)
}



const calculateHamsterAge = calculateAnimalAgeFunctional(7);
console.log(calculateHamsterAge(.5));

console.log(calculateDogAge(10));
console.log(calculateHamsterAge(10));
