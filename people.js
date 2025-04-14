// importo gli elementi della prima funzione
const names = require("./names")
// importo gli elementi della seconda funzione
const hobbies = require("./hobbies")

//nuova funzione
function newFunction () {
const newObject={
    fullName:names('Davide','Cotigliani'),
    hobbies:hobbies('viaggiare','leggere','giocare'),
}
console.log(newObject);
}
newFunction()

