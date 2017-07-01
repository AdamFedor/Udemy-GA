// this method just grabs all the elements by class name
// as an array. We can access individual elements with the []
// operator, just like an array. The innerHTML property
// sets the contents of that node.
function displayOutput(index, content){
	var className = "conditional";
	document.getElementsByClassName(className)[index].innerHTML = content;
}

// Conditionals

// example 1
// You can use if and else to
// control program flow. See what happens if you
// change myBoolean to false, !false, true, and !true;

var myBoolean = true;
if(myBoolean){
	displayOutput(0, "dog");
}else{
	displayOutput(0, "pony");
}

// example 2
// if statements are never as simple as example 1. They
// will always involve "truth tests" that are slightly more
// complex or nuanced. Is the user's name Deborah AND is she from Denver?
// Is it before 9AM OR after 5PM? When we check for equality,
// we use the equality operator (==) or strict equality operator (===).
// Try playing around with numberA and numberB, observing how it affects
// the branching.

var numberA = 5;
var numberB = 6;
if(numberA === numberB){
	displayOutput(1, "camaro");
}else if(numberA < numberB && numberA < numberB + 10){
	displayOutput(1, "firebird");
}else{
	displayOutput(1, "mustang");
}

// example 3
// Observing the difference between assignment (=) and equality (== or ===)
// is absolutely critical. Carefully examine how this example that
// accidentally uses assignment instead of equality behaves. Keep in
// mind that each if statement here will override the previous ones.
// Try commenting out some of the statements or fixing the assignment
// to equality
var num3 = 0;
if(num3 = 5){
	displayOutput(2, "num3 = " + num3);
}if(num3 = 10){
	displayOutput(2, "num3 = " + num3);
}if(num3 = 12){
	displayOutput(2, "num3 = " + num3);
}

// example 4
// This will be exactly the same as example 3, but we're using "else if"
// instead of several if statements. How does this affect the output?
var num4 = 0;
if(num4 = 5){
	displayOutput(3, "num4 = " + num4);
}else if(num4 = 10){
	displayOutput(3, "num4 = " + num4);
}else if(num4 = 12){
	displayOutput(3, "num4 = " + num4);
}

// example 5
// What is the difference between equality (==) and strict equality (===)?
// Why does assignment of a number evaluate to true? JavaScript tries to help
// when you write conditional statements by "coercing" variables to their correct type.
// For the above examples, when num3 and num4 are assigned to all numbers except 0,
// if JavaScript needs to interpret that value in terms of true or false, it will always
// choose true. That means that, for all practical purposes in JavaScript
// if(num4 = 5)
// might well as be
// if(5)
// which is the same as
// if(true)
// consider which of these statements evaluates to true:

var num5 = "5";
if(num5 === 5){
	displayOutput(4, "num5 strictly equal to the number 5");
}else if(num5 == 5){
	displayOutput(4, "num5 loosely equal to number 5");
}

// example 6
// We can use the && (and) operator to make more complex if statements.
// With an if statement, both sides of the && need evaluate to true
// (true && true).
// Note: I'm using an array for my variable here. If you need help
// with arrays, ready up on arrays AND try the loop and array tests
// under Week 5 > Arrays

var num6 = [10, 2];
if(num6[0] === 10 && num6[0] === 12){
	displayOutput(5, "num6[0] equals 10 and num6[0] equals 12");
}else if(num6[0] === 10 && num6[1] === 2){
	displayOutput(5, "num6[0] equals 10 and num6[0] equals 2");
}

// example 7
// We can use the || (or) operator to also make more complex if statements.
// With and if statement, one side of the || needs to evaluate to true in order
// for the full expression to be interpreted as true. For example:
// (true || false) //evaluates to true
// (false || true) // evaluates to true
// (false || 2 === 2) // evaluates to true
// (2 < 3 || 100 % 4 === 3) //evaluates to true
// see if you can change the values in num7 to get the second
// if statement to pass

var num7 = [21, 72];
if(num7[0] < 17 || num7[1] < 100){
	displayOutput(6, "num7[0] less than 17 or num7[1] less than 100");
}else if(num7[0] > 24 || num[1] < 101){
	displayOutput(6, "num7[0] greater than 24 or num[1] less than 72");
}