interface Movie {
    titel : string;
    year:number;
    actors:string[];
    metascore:number;
    seen:boolean;
}
const thematrix : Movie =
{
    titel: "The Matrix",
    year: 1999,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    metascore: 73,
    seen: true
}

 const myfavoritemovie:Movie ={
    titel: "klans",
    year: 1998,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    metascore: 90,
    seen: true

 }
 const myworstmovie:Movie = {
    titel: "nakfa",
    year: 1962,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    metascore: 15,
    seen: true
 }
 interface wasMovieMadeInThe90s {
    (movie:Movie): boolean
 }
 const wasMovieMadeInThe90s:wasMovieMadeInThe90s =(movie) =>{
     return movie.year>1999 && movie.year<=2000;

      }
      interface averageMetaScore{
        (movies:Movie[]):number
      }
const averageMetaScore:averageMetaScore =(movies)=>{
    let totaalscore :number =0;
    for(let movie of movies){
        totaalscore+=movie.metascore;
    }
    return totaalscore / movies.length;
}
interface fakeMetaScore{
    (movie:Movie,newscore:number):Movie 
}
const fakeMetaScore:fakeMetaScore =(movie:Movie,newscore:number):Movie=>{
    let newMovieObject:Movie = {
        titel:movie.titel,
        year:movie.year,
        actors:movie.actors,
        metascore:movie.metascore,
        seen:movie.seen
    }
    return newMovieObject;

}
 console.log(wasMovieMadeInThe90s(myfavoritemovie));
 console.log(averageMetaScore([thematrix,myfavoritemovie,myworstmovie]));
 console.log(fakeMetaScore(thematrix,50));