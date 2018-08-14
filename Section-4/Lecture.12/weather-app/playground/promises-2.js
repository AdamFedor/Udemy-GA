var geocodeAddress = (address) => {

};

geocodeAddress('98272').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
