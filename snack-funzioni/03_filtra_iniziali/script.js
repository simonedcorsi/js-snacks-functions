/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const arrayNomi = []

// Dichiara la funzione qui.
function estraiNomi( array, lettera ){

    for(let i=0; i< array.length; i++ ){
        arrayNomi.push( array[i] )
    }
}

// Invoca la funzione qui e stampa il risultato in console
estraiNomi( names, "L" )


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log( arrayNomi )