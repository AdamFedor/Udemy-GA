# Question 1

Convert the promise version of the multi-file loader over to using async/await

```js
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

let promises = files.map(name => readFile(name, { encoding: "utf8" }));
Promise.all(promises).then(values => {
  // <-- Uses .all
  console.log(values);
});
```

## My Answer

```js
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);
const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

var doSomething = async () => {
  // for (let naming of files) {
  //   console.log(await readFile(naming, 'utf8')); //puts this in the queue one at a time
  // }
  let promisesOfFiles = files.map(name => readFile(name, 'utf8'));
  let values = await Promise.all(promisesOfFiles);
  console.log(values);
};

doSomething();
```

# Question 2

Again convert the promise version of the multi-file loader over to using async/await but using a custom async iterator with the following syntax

node --harmony-async-iteration <file.js> // flag for earlier versions of node

```js
const fileIterator = files => ({
  [Symbol.asyncIterator]: () => ({
    x: 0,
    next() {
      // TODO
    }
  })
});

(async () => {
  for await (let x of fileIterator([
    "./files/demofile.txt",
    "./files/demofile.other.txt"
  ])) {
    console.log(x);
  }
})();
```

## My Answer

```js
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const fileIterator = files => ({
  [Symbol.asyncIterator]: () => ({
    x: 0,
    next() {
      if (this.x >= files.length) {
        return {
          done: true
        };
      }
      let file = files[this.x++];
      return readFile(file, "utf8").then(data => ({
        done: false,
        value: data
      }));
    }
  })
});

const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

(async () => {
  for await (let x of fileIterator(files)) {
    console.log(x);
  }
})();
```