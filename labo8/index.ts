const express = require('express');
const app = express();
const ejs =require('ejs');
const path =require('path');
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"css")))
var request = require('request');

app.set('port', 3000);
app.get('/',(req:any,res:any)=>{
    
    res.send(`Hello world`);
})
app.listen(app.get('port'), ()=>console.log( '[server] http://localhost:' + app.get('port')));

// tweede with localhost whoami.
app.set('port',3000);
app.get('/whoami',(req:any,res:any)=>{res.send(`Hello world`);});
app.listen(app.get('port'), ()=>console.log( '[server] http://localhost:/whoami' + app.get('port')));

// derde met localhost:3000/whoamijson
app.set('port',3000);
app.get('/whoamijson',(req:any,res:any)=>{
        res.send(`Hello world`);
});
app.listen(app.get('port'),()=>console.log('[server]http://localhost:/whoamijson' + app.get('port')));


// vierde met localhost:3000/pikachujson
app.set('port',3000);
app.get('/pikachujson',(req:any,res:any)=>{
res.send(`Hello world`)
});
app.listen(app.get('port'),()=>console.log('[server]localhost:/pikachujson' + app.get('port')));


// vijfde met localhost:3000/pikachuhtml
app.set('port',3000);
app.get('/pikachuhtml',(req:any,res:any)=>{
res.send(`<strong>Hello world<strong/>`)
});
app.listen(app.get('port'),()=>console.log('[server]localhost:/pikachuhtml' + app.get('port')));
// server met naam gemaakt een text daarbij.
app.set('port', 3000);
app.get('/',(req:any,res:any)=>{
    
    res.send(`<h1>FIRST SERVER</h1>
    <p>bedankt om mijn web te bezoeken en tot volgend keer </p>`);
})

app.listen(app.get('port'), ()=>console.log( '[server] http://localhost:' + app.get('port')));



//Zorg dat localhost:3000/whoami een HTML pagina toont 

app.get('/whoami',(req:any,res:any)=>{
res.render("index",{Thisisme:[{name:"Mahmoud",age:32,Image:"//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/<unique_id>/quwowooybuqbl6ntboz3.jpg"}]})}

);

app.listen(3000);
//localhost:3000/whoamijson de inhoud van thisisme stuurt als JSON.
app.get('/whoamijson',(req:any,res:any)=>{
res.render("index",{Thisisme:[{name:"Mahmoud",age:32,Image:"//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/<unique_id>/quwowooybuqbl6ntboz3.jpg"}]})})
  app.listen(3000);
//gebruik API call om data van pikachu te halen en html pagina tonen.
app.set('port',3000);
request('https://pokeapi.co/api/v2/pokemon/ditto', function (error:any, response:any, body:any) {
  console.error('error:', error); 
 console.log('body:', body); 
});
app.listen(app.get('port'), ()=>console.log( '[server] http://localhost/pikachujson:' + app.get('port')));

app.set('port',3000);
app.get('/pikachujson',(req:any,res:any)=>{
res.sendFile(path.join(__dirname,'pikachu'));
});

app.listen(app.get('port'), ()=>console.log( '[server] http://localhost/pikachujson:' + app.get('port')));
//gebruik API call om data van pikachu te halen en json pagina tonen.
