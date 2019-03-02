let o = {
    personId: 123,
    otro: 144,
    getId: function(test) {
        return `Hola - ${this.personId} - ${test}`;
    },
    getOtro: function() {
        return this.personId + 10;
    }
};

let newPerson = {
    personId: 456
};

let newFn = o.getId.bind( newPerson,'test' );
console.log( newFn() );