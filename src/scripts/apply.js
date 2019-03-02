let o = {
    personId: 123,
    otro: 144,
    getId: function(title,action) {
        return `${title} - ${this.personId} - ${action}`;
    },
    getOtro: function() {
        return this.personId + 10;
    }
};

let newPerson = {
    personId: 456
};

console.log( o.getId.apply( newPerson,['Titulo','accion'] ) );
console.log( o.getOtro( newPerson ) );