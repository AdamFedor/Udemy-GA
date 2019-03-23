// constructor object for a vehicle
function vehicle (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

vehicle.prototype.turnOn = function() {
    this.isRunning = true;
}

vehicle.prototype.turnOff = function() {
    this.isRunning = false;
}

vehicle.prototype.honk = function() {
    if (this.isRunning === true) {
        return "beep!";
    }
}

var liberty = new vehicle("Jeep", "Liberty", "2007");

