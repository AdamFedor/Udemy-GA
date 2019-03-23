function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
}

Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

Person.prototype.addToFamily = function (person) {
    if (this.family.indexOf(person) === -1 && person instanceof Person) {
        this.family.push(person)
    }
    return this.family.length;
}