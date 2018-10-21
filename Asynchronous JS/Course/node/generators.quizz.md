# Question 1

Create a custom async generator that loops over the files that are passed in.

```js
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

function* fileLoader(theFiles) {
  const theWork = theFiles.map(name => readFile(name, 'utf8'));
  for (let work of theWork) {
    yield work;
  }
}

let filez = ["./files/demofile.txt", "./files/demofile.other.txt"];

fileLoader(filez);

(async () => {
  for await (let contents of fileLoader(filez)) {
    console.log(contents);
  }
})();
```
