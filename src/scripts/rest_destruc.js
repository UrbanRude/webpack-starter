
// Rest parameters
function printCards(num1,...nums) {
    console.log( 'num',num1 );
    nums.forEach( num => console.log(num) );
}
printCards(1,2,3,':D');

//Destructuring Arrays
let personsId = [1,2,3,4];
let [person1,person2,...persons] = personsId;
console.log('person1',person1);
console.log('person2',person2);
console.log('persons',persons);

let person = { id:10,name:'Axxxity' };

let {id:ID,name} = person;
console.log('idd',ID); 