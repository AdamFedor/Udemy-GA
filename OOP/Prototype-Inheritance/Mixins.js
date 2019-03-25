function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
};

const canSwim = {
    swim: function () {
        console.log('swim');
    }
};

// ES6 method
// const person = Object.assign({}, canEat, canWalk)

function Person () {
}

// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person, canEat, canWalk)

const person = new Person();
console.log(person.eat);

function Goldfish () {
}

// Object.assign(Goldfish.prototype, canEat, canSwim);
mixin(Person, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish.swim)