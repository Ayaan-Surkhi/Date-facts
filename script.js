let factBody  = document.querySelector('#fact-body');
let fact = document.querySelector('#fact');

let monthInput = document.querySelector('#monthinput');
let dateInput = document.querySelector('#dateinput');

monthInput.addEventListener('input', getFact);
dateInput.addEventListener('input', getFact)

function getFact() {
const year = dateInput.value;
const month = monthInput.value;
const date = dateInput.value;

 fetch(`http://numbersapi.com/${month}/${date}/date`)
 .then(response => response.text())
 .then(data => {
   if(year !== ''){ 
   fact.style.display = 'block';
   fact.style.textAlign = 'center';
   fact.style.fontSize = '20px';
   fact.style.color = 'white';
   factBody.innerText = data;   
   } 
})
 .catch(err => console.log(err))
}
