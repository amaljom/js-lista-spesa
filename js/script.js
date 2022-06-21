const spesa = [
    'uova',
    'pane',
    'latte',
    'marmellata',
    'yogurt'
];

const elementoLista= document.getElementById('miniMarketList');

let i=0;

// * UTILIZZIAMO UN CICLO WHILE COME RICHIESTO DAL ESERCIZIO

while(i<spesa.length){
    const newElement = document.createElement('li');
    newElement.innerHTML=spesa[i];
    newElement.classList.add('fs-3', 'lista-stile')
    i++;
    elementoLista.append(newElement)
}