// Always syncronous
console.log('starting app');

// this is something node provides to make something asynchronous.
setTimeout(() => {
  console.log('delayed text');
}, 2000);

// this is the same as having it run right away. But it occurs after all immediate ones.
setTimeout(() => {
  console.log('second delay');
},0);

console.log('finishing up');
