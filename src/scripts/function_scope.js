// Function Scope
function findPerson() {
    message = 'Finding';
    let findFn = function searchKey() {
        let message = 'Overrride';
    };
    findFn();
}
findPerson();
console.log(message);


