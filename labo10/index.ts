const uri = 'mongodb+srv://Firstmongodatabase:Antwerpen1@webontwikkeling.2mzky.mongodb.net/webontwikkeling?retryWrites=true&w=majority'
const {MongoClient} = require('mongodb');
const client = new MongoClient(uri, { useUnifiedTopology: true });
const database ='webontwikkeling'
const collection ='Movies'

/*let movies = [
    {name: "The Matrix", myScore: 90, timesViewed: 10},
    {name: "Pulp Fuction", myScore: 100, timesViewed: 100},
    {name: "Monster Hunter", myScore: 5, timesViewed:1},
    {name: "Blade Runner", myScore: 100, timesViewed:30},
    {name: "Austin Powers", myScore: 80, timesViewed:10},
    {name: "Jurasic Park 2", myScore: 40, timesViewed:1},
    {name: "Ichi the Killer", myScore: 80, timesViewed:1}
];
interface movies {
name:string; myScore:number;timesViewed:number
}*/
const mongodb = async()=>{
try 
{
    await client.connect();
    //insert of movies in database
   //let FirstMovie = await client.db(database).collection(collection).insertMany({movies})
   //console.log(FirstMovie);

//Doe een query op de database en toon de eerste film op de console
 let firstFilm =  await client.db(database).collection(collection).findOne({});
 console.log(firstFilm);
//toon een lijst van alle scores van alle films
 let listresult =  await client.db(database).collection(collection).distinct('myScore');
console.log(listresult);
 //een totaal van het aantal keren dat deze films bekeken zijn
let totaalviews = await client.db(database).collection(collection).aggregate([{$group:{_id: "$myScore", timesViewed:{$sum:1}}}]);
console.log(totaalviews);

//Toon een lijst van alle films met een score tussen 30 en 85
let resultfilm = client.db(database).collection(collection).find({myScore:{$gt:30,lt:85}});
console.log(resultfilm);
//Toon een lijst van alle films met een score tussen 30 en 85 OF die maar 1 keer bekeken zijn
let cursor = client.db(database).collection(collection).find({$or:[{myScore:{$gt:30,$lt:80}}, {timesViewed:"1"}]});
let result = await cursor.toArray();
console.log(result);
 
} 
catch (error) 
{
    console.log(error)
}
finally
{
client.close();
}

}
mongodb();