import { ObjectId } from "bson";

const express = require('express');
const app = express();
app.use(express.static('views'))
app.set('port', 3000);
app.set('view engine','ejs')
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended:true}))

const uri = 'mongodb+srv://Firstmongodatabase:Antwerpen1@webontwikkeling.2mzky.mongodb.net/webontwikkeling?retryWrites=true&w=majority'
const {MongoClient} = require('mongodb');
const client = new MongoClient(uri, { useUnifiedTopology: true });
const database ='webontwikkeling'
const collection ='Movies'

interface Movies {
name:string; myScore:number;timesViewed:number;jaar:number; _id?:number
}
const mongodb = async()=>{
    try 
    {
        console.log("connection connecting ...");
        await client.connect();
        console.log("connection sucess");
        
                    
    } 
    catch (error) 
    {
        console.log(error)
    }
    
    
    }
    mongodb();
app.get('/', (req:any,res:any)=>{
   
        res.render('index',)
   });

   const runallmovies = async (res:any)=>{
    let cursor = await client.db(database).collection(collection).find({});
    let moviesList =  await cursor.toArray();
    res.render('movie',{movies:moviesList})
   }
   
 //http://localhost:3000/movies:
  app.get('/movies',async(req:any,res:any)=>{ 
      try
      
     { let cursor = await client.db(database).collection(collection).find({});
     let moviesList =  await cursor.toArray();
     res.render('movie',{movies:moviesList})
    }
    catch (error) 
    {
        console.log(error)
    }

});
 
app.get('/addmovies/:x',async(req:any,res:any)=>{
    try{ 
        let x = req.params.x
     let films = await client.db(database).collection(collection).findOne({_id:ObjectId})
    res.render('addmovie', {film:films})
     }
     catch (error) 
    {
        console.log(error)
    }
    
    });  
    app.get('/filmstoevoegen',(req:any,res:any)=>{ 
        res.render('filmstoevoegen')
                    
        }); 
app.post('/filmstoevoegen',async(req:any,res:any)=>{ 
 try{
      let addedfilms:Movies= {
        name : req.body.titel,
         timesViewed :req.body.timesViewed,
        jaar :req.body.jaar,
        myScore: req.body.score};
         await client.db(database).collection(collection).insertOne(addedfilms);
         runallmovies(res);
     }
     catch (error) 
    {
        console.log(error)
    }
});
app.get('/removmovies/:x',async(req:any,res:any)=>{
    try{ 
        let x = req.params.x
     let films = await client.db(database).collection(collection).removOne({_id:ObjectId})
    runallmovies(res);
     }
     catch (error) 
    {
        console.log(error)
    }
    
    });  
 const server =app.listen( process.env.PORT || app.get('port'), ()=>console.log( '[server] http://localhost:' + app.get('port')) );
export{};
process.on("SIGINT",async()=>{
try{
    console.log("control-c recieved");
    console.log("closing connection to DB ...");
    await client.close();
    console.log("connection to DB is closed");
    console.log("stopping server..");
    server.close(()=>{console.log("server is stopped")});

}
catch(ex){console.log(ex)}
finally{process.exit(0)};

})
