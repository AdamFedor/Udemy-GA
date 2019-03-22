const fs = require('fs')
const dataBuffer = fs.readFileSync('json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Gunther';
data.age = 54;

const newData = JSON.stringify(data);
fs.writeFileSync('json.json',newData);