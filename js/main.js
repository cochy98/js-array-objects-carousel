/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?
 *
 */
const carouselImages = [
    {
        name: 'Immagine random 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        source: 'https://picsum.photos/id/0/5616/3744',
    },
    {
        name: 'Immagine random 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        source: 'https://picsum.photos/id/2/5616/3744',
    },
    {
        name: 'Immagine random 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        source: 'https://picsum.photos/id/3/5616/3744',
    },
    {
        name: 'Immagine random 4',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        source: 'https://picsum.photos/id/4/5616/3744',
    },
    {
        name: 'Immagine random 5',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        source: 'https://picsum.photos/id/1/5616/3744',
    },
];


// mi prendo il wrapper delle immagini di thubnails
const thubsWrapper = document.querySelector('.my-thumbnails');

// Visualizzo nel wrapper thubnails tutte le immagini contenute nell'array di oggetti
for (let i = 0; i < carouselImages.length; i++){
    thubsWrapper.innerHTML += `<img src="${carouselImages[i].source}" class="my-img-thub" alt="${carouselImages[i].name}">`;
}
// Mi richiamo tutte le immagini di thubnails appena create
const thubnailsImg = document.getElementsByClassName('my-img-thub');

// Richiamo la funzione che visualizza lo slider e passo l'indice della prima foto
let position = 0;
viewFullImage (carouselImages, position);
thubnailsImg[position].classList.add('active');

// Imposto un ciclo infinito ogni 7 secondi
setInterval(() => {
    document.querySelector('.my-next').click();
}, 7000); 


// All'evento di click sul pulsante next avanza lo slider
document.querySelector('.my-next').addEventListener('click', function(){
    thubnailsImg[position].classList.remove('active');
    if(position != carouselImages.length - 1) {
        position ++;
    } else{
        position = 0;
    }
    
    //console.log(`Mi trovo alla posizione: ${position}`);
    viewFullImage (carouselImages, position);
    thubnailsImg[position].classList.add('active');
});


// All'evento di click sul pulsante previous retreggia lo slider
document.querySelector('.my-previous').addEventListener('click', function(){
    thubnailsImg[position].classList.remove('active');
    if(position == 0) {
        position = carouselImages.length - 1;
    } else{
        position --;
    }
    
    //console.log(`Mi trovo alla posizione: ${position}`);
    viewFullImage (carouselImages, position);
    thubnailsImg[position].classList.add('active');
});


/******************************FUNCTIONS************************************/
function viewFullImage (array, indexElementView){
    // Mi prendo il wrapper dell'immagine full size
    const carouselFullImage = document.querySelector('.my-carousel-images');
    carouselFullImage.innerHTML = `
        <div class="carousel-element position-relative">
            <img src="${array[indexElementView].source}" class="my-img-carousel" alt="${array[indexElementView].name}">
            <div class="carousel-img-description position-absolute bottom-0 end-0 text-end text-white p-4">
                <h3>${array[indexElementView].name}</h3>
                <p>${array[indexElementView].description}</p>
            </div>
        </div>`;
}