const expect = require('expect');
const utils = require('./utils');

// Example of grouping tests together

describe('Utils', () => {
  describe('#add',() => {
    it ('should add two numbers', () => {
      var res = utils.add(33,11);
      expect(res).toBe(44).toBeA('number');
    });

    it ('should add two numbers asynchronously', (done) => {
      utils.asyncAdd(4 , 3, (sum) => {
          expect(sum).toBe(7).toBeA('number');
          done();
      });
    });
  });
  describe('#square', () => {
    it ('should square a number', () => {
      var res = utils.square(5);
      expect(res).toBe(25).toBeA('number');
    });

    it ('should square two numbers asynchronously', (done) => {
      utils.asyncSquare(4, (sum) => {
        expect(sum).toBe(16).toBeA('number');
        done();
      });
    });
  });
});

// -------------- Below are just seperate tests

// it ('should add two numbers', () => {
//   var res = utils.add(33,11); // uses the .add in the other file
//
//   expect(res).toBe(44).toBeA('number');
//   // if (res !== 44) {
//   //   throw new Error(`Expected 44, but got ${res}`);
//   // };
// });
//
// it ('should add two numbers asynchronously', (done) => {
//   utils.asyncAdd(4 , 3, (sum) => {
//       expect(sum).toBe(7).toBeA('number');
//       done();
//   });
// });
//
// it ('should square a number', () => {
//   var res = utils.square(5);
//   expect(res).toBe(25).toBeA('number');
//   // if (res !== 25) {
//   //   throw new Error(`Expected 25, but got ${res}`);
//   // };
// });
//
// it ('should square two numbers asynchronously', (done) => {
//   utils.asyncSquare(4, (sum) => {
//     expect(sum).toBe(16).toBeA('number');
//     done();
//   });
// });
//
// it('should set first name and last names are proper and seperate', () => {
//   var user = {location: 'Seattle', age: 34}
//   var res = utils.setName(user,'Adam Fedor');
//   // expect(user).toEqual(res);
//   expect(res).toInclude({firstName: 'Adam', lastName: 'Fedor'});
// });
//
// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   // expect([2,3,4]).toInclude(5);
//   expect({
//     name: 'Adam',
//     age: 34,
//     location: 'Seattle'
//   }).toInclude({
//     age: 34
//   });
// });
