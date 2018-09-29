const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app'); //loads file through require, but adds 2 methods (app.__set__ & app.__get__)

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    // spy();
    // expect(spy).toHaveBeenCalled(); // cause a test to pass if spy was called, or fail if not called
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it ('should call saveUser with user object', () => {
    var email = 'andrew@example.com';
    var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  });
});
