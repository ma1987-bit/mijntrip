  async function moppen (){
    const mop = await fetch('https://icanhazdadjoke.com/search?term=dog&limit=5&page=1',{headers: {
      'Accept': 'application/json'
    }
 });
        
    const response = await mop.json();
     for(let h of response.headers){
       console.log(h);
     }
 console.log(response.headers)

 }
 // ik heb deze manier ook gebruikt niet gelukt dus ik zal voor de modeloplossing wachten
 async function fetchJokes() {
  
  let data = await (await fetch('https://icanhazdadjoke.com/search?term=dog&limit=5&page=1',{headers: {
    'Accept': 'application/json'}})).json();
  for (let i = 0; i < data.headers.length; i++) {
    console.log(i)
  }
  console.log(data);
}


 
 
 