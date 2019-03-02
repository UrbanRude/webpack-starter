let o = {
    personId: 123,
    otro: 144,
    getId: function() {
        return this.personId - 10;
    },
    getOtro: function() {
        return this.personId + 10;
    }
};

let newPerson = {
    personId: 456
};

console.log( o.getId.call( newPerson ) );
console.log( o.getOtro( newPerson ) );