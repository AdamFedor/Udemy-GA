// Standard Constructor Function
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

// Using Call on Constructor Function
function Motorcycle(make, model, year) {
    //using call
    Car.call(this, make, model, year)
    this.numWheels = 2;
}

// Using Apply on Constructor Function
function Tricycle(make, model, year) {
    Car.apply(this,[make,model,year]);
    this.numWheels = 3;
}

// Using Apply and keyword Arguments
function DirtBike(make, model, year) {
    Car.apply(this,arguments);
}

var ducati = new Motorcycle('ducati',1,2019)
var tri = new Tricycle('try',2,2013);
var dirt = new DirtBike('Yamaha', 3, 2018);

console.log(ducati);
console.log(tri);
console.log(dirt);