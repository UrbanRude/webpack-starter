// Constructor
function Person(id) {
    this.personId = id;
    this.register = () => {
        console.log( `Register ${ this.personId }` );
    };
}

let a = new Person(123);
console.log( a );

// Prototype
function personP(id) {
    this.personId = id;
}

personP.prototype.register = () => {
    console.log(`Regiter ${this.personId}`);
};

let proto = new personP(123);
console.log( proto );