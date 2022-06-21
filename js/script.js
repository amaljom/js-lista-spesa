const spesa = [
    'uova',
    'pane',
    'latte',
    'marmellata',
    'yogurt',
    'insalta'
];

const elementoLista= document.getElementById('miniMarketList');

let i=0;

// * UTILIZZIAMO UN CICLO WHILE COME RICHIESTO DAL ESERCIZIO

while(i<spesa.length){
    const newElement = document.createElement('li');
    newElement.innerHTML=spesa[i];
    newElement.classList.add('fs-3', 'lista-stile', 'text-white');
    i++;
    elementoLista.append(newElement);
}

const box = document.getElementById('box');
box.classList.add('bg-primary', 'w-50', 'rounded-3', 'mx-auto', 'mt-4', 'p-3', 'fw-bolder');

const titolo = prompt("Che titolo vorresti avere per questa lista della spesa?");
let titoloScelto= `${titolo}`

document.querySelector('.stile-h1').innerHTML= titoloScelto;