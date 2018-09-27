// var p2 = new Promise(function(resolve, reject) {
    // resolve(1);
// });
// p2.then(function(value) {
// console.log('a:', value); // 1
// return value + 1;
// }).then(function(value) {
// console.log('a:', value + '- This synchronous usage is virtually pointless'); // 2- This synchronous usage is virtually pointless
// });
// p2.then(function(value) {
// console.log(value); // 1
// });

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
// });


function delay(t, val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(val);
        }, t);
    });
}

exports.getProducts = async (req, res) => {
    let request;
    for (let id of productids) {
        request = await getProduct(id);
        await delay(500);
    }
};
