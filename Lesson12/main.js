const BASE = 'https://swapi.dev/api/';
function getPeoples (){
  
  axios.get(BASE +'films/2')
    .then((res)=>{
      
 return (res.data.characters).forEach(v=>axios.get(v)
   .then((res) => {
     console.log(res.data.name)
    }))
})}
getPeoples();

function getP (){
  axios.get(BASE +'films/2')
    .then((res)=>{
   console.log(res)
})}

getP();
