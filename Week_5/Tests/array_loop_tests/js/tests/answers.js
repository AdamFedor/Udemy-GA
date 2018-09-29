// Question 1:
// create array with the following values
// 1
// 2
// "Henry"
// true
// 21
// call this array q1
q1 = [1,2,"Henry",true,21];

/*--------------------*/

// Question 2:
// create a variable called q2 and assign it
// the value of the first item in q1. Use the [] operator.
var q2 = q1[0];

/*--------------------*/

// Question 3:
// create a variable called q3 and assign it
// the value of the second item in q1. Use the [] operator.
var q3 = q1[1];

/*--------------------*/

// Question 4:
// create a variable called q4 and assign it
// the value of the third item in q1. Use the [] operator.
var q4 = q1 [2];

/*--------------------*/

// Question 5:
// create a variable called q5 and assign it
// the value of the last item in q1 (try to use q1.length)
var q5 = q1[4];

/*--------------------*/

// Question 6:
// create a new array called q6 and assign it
// the following values 2 3 4 45 67 101
var q6 = [2,3,4,45,67,101];

/*--------------------*/

// Question 7:
// create a variable called q7 and assign it
// the length of q6. Use the array.length property.
var q7 = q6.length;

/*--------------------*/

// Question 8:
// create a variable called q8 and assign it the
// value of the third element in q6. Use the [] operator.
var q8 = q6[2];

/*--------------------*/

// Question 9:
// create a variable called q9 and assign it the
// value of the first element in q6. Use the [] operator.
var q9 = q6[0];

/*--------------------*/

// Question 10:
// create a variable called q10 and set it to the number 213.
var q10 = 213;

/*--------------------*/

// Question 11:
// create a variable called q11 and set it to the value
// of q6, then insert the value of q10 at the end of q11.
// Remember that the last element in an array is at array[array.length-1].
var q11 = [ , , , , , ];
q11 = q6;
q11[6] = q10;

/*--------------------*/

// Question 12:
// Create an array called q12 with all of the values from 0 to 100 (hint: use a loop).
var q12 = new Array();
var i = 0;
while (i < 101){
  q12[i] = i;
  i = i + 1;
};

/*--------------------*/

// Question 13:
// Create an array called q13 with all of the values from 1 to 101 (hint: use a for loop).
// Your index variable "i" does NOT need to start at 0!
var q13 = new Array();
var i = 0;
var j = 1;
while (i < 101){
  q13[i] = j;
  i = i + 1;
  j = j + 1;
};

/*--------------------*/

// Question 14:
// Create an array called q14 with all of the even values from 2 to 100.
// Consider the following loop:
// for(var i = 0, n = 1; n < 102; i++, n+=2){
// 	myArray[i] = n;
// }
// i is used to track the current index, and n is the number we want to
// assign at that index. The above loop would give us all odd numbers from
// 1 to 101. The above example follows the pattern that we've been
// using for all loops. The only difference here is that we need the loop to use
// 2 variables, the index and the value we want to assign.
var q14 = new Array();
for (var i = 0, n = 2; n<102; i++, n+=2){ // creates 2 variable, argument; action, action
  q14[i] = n;
};

/*--------------------*/

// Question 15:
// Create a variable called q15 and assign it the value of the
// sum of q13 (hint: use a loop)
for(var i = 0, q15 = 0; i<q13.length; i++){// why is the length greater than what I would want to sum? <= results on last as NaN
  q15 = q15 + q13[i];
}

/*--------------------*/

// Question 16:
// Create a variable called q16 and assign it the value of
// the sum of all the numbers in q14 that are divisible by 4.
// Remember you can check for even divisibility by using the % (modulo)
// operator (e.g, 12 % 6 == 0, 13 % 6 === 1)
for(var i = 0, q16 = 0; i<q14.length; i++){
  if(q14[i]%4===0){
    q16 = q16 + q14[i];
  }
}










//
