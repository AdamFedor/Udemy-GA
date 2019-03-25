let person = {name: 'Mosh'};
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');
console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false, // makes it read only
    enerable: false, // will not show up in object.keys
    configurable: false // cannot remove it
});
person.name = 'John'; // name won't change because of writable