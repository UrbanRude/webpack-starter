//JSON

let person = [
    {
        id:123,
        age: 12
    },{
        id:1234,
        age:23
    }
];
console.log( JSON.stringify(person) );

let json = `[{"id":123,"age":12},{"id":1234,"age":23}]`;
console.log( JSON.parse(json) );

