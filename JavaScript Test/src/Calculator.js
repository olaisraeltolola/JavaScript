function sum(numberOne, numberTwo){
    if (typeof numberOne !== "number" || typeof numberTwo !== "number"){
        throw new Error ("Invalid input: both arguments must be numbers")
    }
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo){
    if (typeof numberOne !== "number" || typeof numberTwo !== "number"){
        throw new Error ("Invalid input: both arguments must be numbers")
    }
    return numberOne - numberTwo;
}

module.exports = {sum, subtract};