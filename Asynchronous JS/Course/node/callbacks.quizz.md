# Question 1

The below code errors when you run it.

Make it run without errors but you cannot change the location of the `let` statement, that has to stay at the end.

When pressing F8, highlight only the portion you want to run. Then F8.

```js
function doAsyncTask(cb) {
  cb();
};
doAsyncTask((message) => console.log(message));

let message = "Callback Called"; //cannot move this
```

## My Answer

```js
function doAsyncTask(cb) {
  setImmediate(() => {
    console.log('Async Task Calling Callback');
    cb();
  });  
};

doAsyncTask(() => console.log(message));

let message = "Callback Called";
```

# Question 2

The below code swallows the error and doesn't pass it up the chain, make it pass the error up the stack using the next callback.

```js
const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    next(data);
  });
}

readFileThenDo(data => {
  console.log(data);
});
```

## My Answer

```js
const fs = require('fs');
// next is the callback
readFileThenDo = (next) => {
  fs.readFile('./blah.nofile', (err, data) => {
    if (err) {
      next(err);
    } else {
      next(null, data); // since callback is err then data
    };
  });
};

readFileThenDo((err, data) => {
  console.log('-----');
  if (err){
    console.log(err);
  } else {
    console.log(data);
  };
});
```

# Question 3

Instead of passing it up the stack throw it instead and try to catch it later on.

```js
const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    if (err) throw err;
    next(data);
  });
}
// Hint use try..catch
readFileThenDo(data => {
  console.log(data);
});
```

## My Answer
```js
const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    if (err) {
      console.log(err); // doesn't work with async code... so throw doesn't work
      // throw new Error(err);
    };
    // next(data);
  });
}
try {
  readFileThenDo(data => {
    console.log(data);
  });
} catch (e) {
  console.log(e);
}
```