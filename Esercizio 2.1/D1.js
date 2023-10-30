

let D1 = "ESERCIZIO 1 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino."
console.log(D1)

let R11 = "NUMBER: contiene un valore numerico (un numero)"
let R21 = "STRING: contiene una stringa di caratteri (un testo) delimitata da apici o doppi apici."
let R31 = "BOOLEAN: contiene i valori true/false (vero/falso)"
let R41 = "NULL: contiene un valore nullo"
let R51 = "UNDEFINED: contiene un valore indefinito"

console.log(R11)
console.log(R21)
console.log(R31)
console.log(R41)
console.log(R51)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Gianluca"
console.log(name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n = 12
let m = 20
console.log (n+m)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
name = "Rufo"
console.log(name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(x - 4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let name1 ="john"
let name2 ="John"
let diseguaglianza = (name1 != name2) ? ("VERO") : ("FALSO")
console.log(diseguaglianza)
console.log(name1 === name2) 
console.log(name1 === name2.toLowerCase())