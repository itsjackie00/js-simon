// CONSEGNA
/*
Descrizione:
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) 
non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() 
( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei 
numeri da indovinare sono stati individuati.

*/


// variabile per il bottone e la creazione della funzione
const buttonGenerate = document.getElementById('generate');

buttonGenerate.addEventListener('click',generateNumb);

function generateNumb() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        let numbRandom = generateUniqueRandomNumber(1,100,array);
        console.log(numbRandom);
        array.push(numbRandom);
        
        
    }
    console.log(array);
}