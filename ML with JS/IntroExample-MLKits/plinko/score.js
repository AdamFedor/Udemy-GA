const outputs = []; // store each observation

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
}

function runAnalysis() {
  const testSetSize = 50;
  const k = 10;
  _.range(0, 3).forEach(feature => {
    // feature === 0, then 1, then 2 (dropPosition is 0, bounciness is 1, ball size is 2)
    const data = _.map(outputs, row => [row[feature], _.last(row)]) // aka row[0], row[1], row[2] for row[feature]
    const [testSet, trainingSet] = splitDataset(minMax(data, 1), testSetSize);
    const accuracy = _.chain(testSet)
      .filter(testPoint => knn(trainingSet, _.initial(testPoint), k) === _.last(testPoint)) //testPoint is what is tested being passed in, same as above for loop
      .size()
      .divide(testSetSize) // in chain the first argument doesn't have to be passed in, it's automatic
      .value()
    console.log('For feature of', feature, 'Accuracy is:', accuracy)
  });
}

function knn(data, point, k) {
  return _.chain(data)
    .map(row => {
      return [
        distance(_.initial(row), point), // assume point has 3 values - removing bucketLabel via runAnalysis()
        _.last(row)
      ]
    })
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

function minMax (data, featureCount) {
  const clonedData = _.cloneDeep(data)
  for (let i = 0; i < featureCount; i++) {
    // iterate over each collumn (feature) of the array data if looking at it vertically
    const column = clonedData.map(row => row[i]); // an array of numbers, extracting
    const min = _.min(column);
    const max = _.max(column);
    for (let j = 0; j < clonedData.length; j++) {
      clonedData[j][i] = (clonedData[j][i] - min) / (max - min)// j is the row, i is the column
    }
  }
  return clonedData;
}