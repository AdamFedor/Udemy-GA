const fs = require('fs')
const dataBuffer = fs.readFileSync('json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Adam';
data.age = 39;

const newData = JSON.stringify(data);
fs.writeFileSync('json.json',newData);