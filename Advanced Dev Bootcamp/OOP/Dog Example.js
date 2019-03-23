var Dog = function(name,age){
    this.name = name;
    this.age = age;
    this.bark = function() {
        console.log(this.name + " just barked!");
    }
}

var myDog = new Dog('Rusty',3);
var theirDog = new Dog('Fido', 1);

console.log(myDog);
console.log(theirDog);

theirDog.bark();