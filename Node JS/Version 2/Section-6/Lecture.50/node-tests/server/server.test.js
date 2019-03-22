const request = require('supertest');
const expect = require('expect');

var app = require('./server').app; // same as server.js without .js

describe('Server', () => {
  describe('GET /', () => {
    it ('should return hello world response', (done) => {
      request(app)
        .get('/') //get request that takes the URL
        // .expect(200) // expects a 200 status code
        .expect(404)
        // .expect('Hello world!') //method that does different things, passing in a string here

        // .expect({
        //   error: 'Page not found.'
        // }) // this is passing in an object instead of Hello world!

        .expect((res) => {
            expect(res.body).toInclude({
              error: 'Page not found.' // only looks for the error in the object.
            }) //res.body is the object
        })
        .end(done); // done is the callback, this is all I have to do via supertest
    });
  });
  describe('GET /Users', () => {
    // new test that asserts status code is 200
    // assert that you exist in users array
    it ('should include users in array', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({ // have to include this toInclude
            fullName: 'Adam Fedor',
            age: 34
          });
        })
        .end(done);
    });
  });
});
