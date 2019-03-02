// Spread Syntax

function procesPersons(...persons) {
    persons.forEach( person => console.log(person) );
}
procesPersons('abc');

function procesPersonsRest(person1,person2,person3) {
    console.log(person1,person2,person3);
}
let abc = 'abc';
procesPersonsRest(...abc);