// EXAMPLE: No actual input

// // store the promise object
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hey, it worked!'); // this is what the promise was fullfilled with. In this case it's a string being passed.
//     reject('Unable to fulfill promise.');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success:', message);
// }, (er3rorMessage) => {
//   console.log('Error:', er3rorMessage);
// });
//-----------------------------------------------------------------------------

// EXAMPLE: With Input

// code
var aSyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      };
    }, 1500);
  });
};

// // simple version
// aSyncAdd(2,'3').then((res) => { // by making this a string for 3 it errors out, but there are multiple error handlers.
//   console.log('Result: ',res);
//   return aSyncAdd(res, 33);
// }, (errorMessage) => {
//   console.log(errorMessage)
// }).then((res) => {
//   console.log('Should be 38:', res);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });

// .catch instead of above when an error occurs early
aSyncAdd(2,'3').then((res) => { // by making this a string for 3 it errors out, but there are multiple error handlers.
  console.log('Result: ',res);
  return aSyncAdd(res, 33);
}).then((res) => {
  console.log('Should be 38:', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});
