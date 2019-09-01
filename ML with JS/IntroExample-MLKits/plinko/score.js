const outputs = []; // store each observation

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
}

function runAnalysis() {
  const testSetSize = 50;
  const [testSet, trainingSet] = splitDataset(outputs, testSetSize);
  let numberCorrect = 0;
  // for (let i = 0; i < testSet.length; i++) {
  //   const bucket = knn(trainingSet, testSet[i][0]);
  //   if (bucket === testSet[i][3]) {
  //     numberCorrect++;
  //   }
  // } // replace with lodash below
  _.range(1,15).forEach(k => {
    const accuracy = _.chain(testSet)
      .filter(testPoint => knn(trainingSet, testPoint[0], k) === testPoint[3]) //testPoint is what is tested being passed in, same as above for loop
      .size()
      .divide(testSetSize) // in chain the first argument doesn't have to be passed in, it's automatic
      .value()
    console.log('For k of', k, 'Accuracy is:', accuracy)
  });
  console.log(testSet)
}

function knn(data, point, k) {
  return _.chain(data) // passing in data for any use
    .map(row => [distance(row[0], point), row[3]]) // passing in a data point to compare. Point is a second argument
    .sort(row => row[0])
    .slice(0, k)
    .countBy(row => row[1])
    .toPairs()
    .sortBy()
    .last()
    .first()
    .parseInt()
    .value()
}

function distance(pointA, pointB) {
  return Math.abs(pointA - pointB);
}

function splitDataset(data, testCount) {
  const shuffled = _.shuffle(data);
  const testSet = _.slice(shuffled, 0, testCount);
  const trainingSet = _.slice(shuffled, testCount);
  return [testSet, trainingSet];
}