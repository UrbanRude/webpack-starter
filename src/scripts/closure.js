// IIFE Pattern
// let app = (function() {
//     let personId = 123;
//     return function(num) {
//         return personId + num;
//     };
// })();

// console.log(app(20));

// Closure 
function sumaIva(change) {
    return function(amount) {
        return change * amount;
    };
}

let iva = sumaIva(.16);
console.log(iva(20));
console.log(iva(10));
console.log(iva(100));
