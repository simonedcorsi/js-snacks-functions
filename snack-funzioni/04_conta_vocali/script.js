/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocali = "aeiouAEIOU"
let contatoriVocali = 0
let arrayVocali = []

// Dichiara la funzione qui.
function letturaStringa(stringa){
    for( let i = 0; i < stringa.length; i++ ){

        for(let k = 0; k < vocali.length; k++ ){
            
            if( stringa[i] === vocali[k] ){
                contatoriVocali++
                arrayVocali.push( vocali[k] )
            }
        }
    }
}

// Invoca la funzione qui e stampa il risultato in console
letturaStringa(world)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log( contatoriVocali, arrayVocali )