const express = require('express');
const app = express();
const path =require('path');
export{};
app.use(express.static('./views'))
app.use('/css',express.static(__dirname + './views/css'))
app.use('/img',express.static(__dirname +'./views/image'))
//app.use('views',express.static(__dirname ,'./views'))

app.set('port', 3000);
//localhost3000:
app.set('views','./views')
app.set('view engine','ejs')
app.get('/',(req:any,res:any)=>{
    res.render('index')
});


 //http://localhost:3000/movies:
 //app.set("./public",path.join(__dirname,"./public"));
 app.set('views','./views')
app.set('view engine','ejs')
app.get('/movies',(req:any,res:any)=>{ 
res.render('movie',{movies:req.query.index})
});
//Hier kunt je twee ejs files aan elkaar linken
app.get('/labo9/views/index.ejs', (req:any, res:any) => {

    res.render('index');
    
    });
    app.get('/labo9/views/movie.ejs', (req:any, res:any) => {

        res.render('movie');
        
  });

  //query, maar via ejs lukt niet 
  let movies  = [
    {name: "The Matrix", myScore: 90},
    {name: "Pulp Fuction", myScore: 100},
    {name: "Monster Hunter", myScore: 5},
    {name: "Blade Runner", myScore: 100}
];
app.get('/Films/:index',(req:any,res:any)=>{
    let index = req.params.index;
    
    res.send(movies[index]);
})
//EXTRA UITDAGING: AddMovie

app.get('/Addmovies',(req:any,res:any)=>{ 
    const {name,myScore} =req.query;
    res.send(name,myScore);
    res.render('addmovie')
    });  

    //nog verder te doen




    
   
app.listen(app.get('port'), ()=>console.log( '[server] http://localhost:' + app.get('port')));
