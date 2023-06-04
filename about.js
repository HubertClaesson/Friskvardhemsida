//Här lägger jag min api-länk i en variabel
let url = "https://skatteverket.entryscape.net/rowstore/dataset/1429b654-11eb-401e-ae3c-0dd6b52e6c89/json?_offset=0&_limit=200";


let button = document.getElementById('send');  //knappen
let tabell2 = document.getElementById('tabell2'); // Där resultatet kommer ut
let datum = document.getElementById('footer'); //  Datum i footern
let boxsh = document.getElementById('hero-text3')// Rubrik 3 på sidan   


//Ändrar datumet i fottern
const idag = new Date()

const iso = idag.toLocaleDateString()

datum.innerHTML = iso;

// Button on click börjar här 
button.addEventListener('click', () => {
    tabell2.innerHTML = "";

    friskVAPI()
})

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


// Slumpar ett värde mellan 0 - 100
const random = Math.random() * 100; 

const down = Math.floor(random)


//puttar ut api värden i tabell 
for(let i = 0; i < 1; i++){

    tabell2.innerHTML += 
    ` <tr>
        <td id="aktvitetR">${resp.results[down].aktivitet}</td>
        <td id="stoderR">${resp.results[down]['skattefri förmån?']}</td>
      </tr>`
}

 })
}

//Skapar en hover effekt när man rör musen över rubrik3
boxsh.addEventListener("mouseover", () => {
   
  boxsh.style.cssText = "box-shadow: 3px 10px rgb(136, 136, 136); border: 1px solid;"
  
  
})

boxsh.addEventListener("mouseout", () => {

  boxsh.style.cssText = "";
  
})



// // Här tar jag in datan för grafen
const ctx = document.getElementById('min-graf').getContext("2d");

//Datan för x-axeln
const labels = [
    // "2012",
    // "2013",
    // "2014",
    // "2015",
    // "2016",
    "Ja",
    "Nej",
];

const data = {
    labels,
    datasets: [
        {
        // Datan på y-axeln
        data: [79,21],
        //texten över grafen
        label: "",
        backgroundColor: [
            'rgba( 255, 204, 0)',
            'rgba(0, 51, 102)',
        ],
        borderColor: [
            'rgba(0, 51, 102)',
            'rgba(255, 204, 0)',
        ] 
    }
  ],
};  


const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };



let  = new Chart(ctx,config);







