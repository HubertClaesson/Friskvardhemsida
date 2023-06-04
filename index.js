//Här lägger jag min api-länk i en variabel 
let url = "https://skatteverket.entryscape.net/rowstore/dataset/1429b654-11eb-401e-ae3c-0dd6b52e6c89/json?_offset=0&_limit=200";



let textBox = document.getElementById('name');// input rutan
let button = document.getElementById('send');  //knappen
let tabell2 = document.getElementById('tabell2'); // Där resultatet kommer ut
let datum = document.getElementById('footer'); // text på footer 


//Ändrar datumet i fottern
const idag = new Date()

const iso = idag.toLocaleDateString()

datum.innerHTML = iso;


friskVAPI()

async function friskVAPI(){
    await fetch(`${url}`)
    .then(resp => {
        return resp.json()
    })
    .then(resp => {   
let entries = Object.entries(resp.results);
 //console.log(entries);
 //console.log(resp.results)

// mappar ut nyckel och värde 
const skattefriOutput = entries.map(([key, val] = vals) => {
    let skatteFri = val['skattefri förmån?']
    let aktivitet = val.aktivitet
//console.log(aktivitet,skatteFri);

}) 

// For loop för att pusha ut data från api till tabellen
for(let i = 0; i < 120; i++){

    tabell2.innerHTML += 
    ` <tr>
        <td id="aktvitetR">${resp.results[i].aktivitet}</td>
        <td id="stoderR">${resp.results[i]['skattefri förmån?']}</td>
      </tr>`
}

 })
}























