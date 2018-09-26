// var p2 = new Promise(function(resolve, reject) {
//     resolve(1);
//   });
//   p2.then(function(value) {
//     console.log('a:', value); // 1
//     return value + 1;
//   }).then(function(value) {
//     console.log('a:', value + '- This synchronous usage is virtually pointless'); // 2- This synchronous usage is virtually pointless
//   });
//   p2.then(function(value) {
//     console.log(value); // 1
//   });

// Promise.resolve()
//   .then( () => {
//     // Makes .then() return a rejected promise
//     throw 'Oh no!';
//   })
//   .catch( reason => {
//     console.error( 'onRejected function called: ' + reason );
//   })
//   .then( () => {
//     console.log( "I am always called even if the prior then's promise rejects" );
//   });

