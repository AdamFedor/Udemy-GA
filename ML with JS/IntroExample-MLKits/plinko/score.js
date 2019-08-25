const outputs = []; // store each observation
const predictionPoint = 300;
const k = 3;

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
}

function runAnalysis() {
  const bucket = _.chain(outputs)
    .map(row => [distance(row[0]), row[3]])
    .sort(row => row[0])
    .slice(0, k)
    .countBy(row => row[1])
    .toPairs()
    .sortBy()
    .last()
    .first()
    .parseInt()
    .value()
  
  console.log('Most likely it will fall into', bucket);
}

function distance(point) {
  return Math.abs(point - predictionPoint);
}
