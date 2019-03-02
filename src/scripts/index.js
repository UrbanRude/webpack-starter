//ECMA ES6

class Person {
    
    constructor(id){
        this.id = id;
    }

    identify( sufix ) {
        return `Person ${ sufix }`;
    }

}

let person = new Person(123);
console.log( person );
console.log( person.identify(123) );

class Engine {
    constructor() {
        this.type = 'Hybrid';
    }
    start() {
        return `Starting: ${this.type}`;
    }
}

class Car extends Engine {
    constructor() {
        super();
    }

    start() {
        return super.start();
    }

}

let car = new Car();
console.log( car.start() );

