// constructor object for a vehicle
// Every new object will have make/model/year
function vehicle (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
// Each object should have a property called isRunning which is set to false
vehicle.prototype.isRunning = false;

var liberty = new vehicle("Jeep", "Liberty", "2007");

console.log(liberty);
console.log(liberty.__proto__);