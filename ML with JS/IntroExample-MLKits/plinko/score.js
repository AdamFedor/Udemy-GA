const outputs = []; // store each observation

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
}

function runAnalysis() {
  const testSetSize = 50;
  const [testSet, trainingSet] = splitDataset(minMax(outputs, 3), testSetSize);
  let numberCorrect = 0;
  // for (let i = 0; i < testSet.length; i++) {
  //   const bucket = knn(trainingSet, testSet[i][0]);
  //   if (bucket === testSet[i][3]) {
  //     numberCorrect++;
  //   }
  // } // replace with lodash below
  _.range(1, 20).forEach(k => {
    const accuracy = _.chain(testSet)
      .filter(testPoint => knn(trainingSet, _.initial(testPoint), k) === testPoint[3]) //testPoint is what is tested being passed in, same as above for loop
      .size()
      .divide(testSetSize) // in chain the first argument doesn't have to be passed in, it's automatic
      .value()
    console.log('For k of', k, 'Accuracy is:', accuracy)
  });
  // console.log(testSet)
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