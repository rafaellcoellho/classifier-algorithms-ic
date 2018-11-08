function main() {
  const sepalLength = parseFloat(document.getElementById('sepal_length').value)
  const sepalWidth = parseFloat(document.getElementById('sepal_width').value)
  const petalLength = parseFloat(document.getElementById('petal_length').value) 
  const petalWidth = parseFloat(document.getElementById('petal_width').value) 
  const k = parseFloat(document.getElementById('k').value) 
  const algorithm = document.getElementById("algorithm").value

  if ( sepalLength && sepalWidth && petalLength && petalWidth && algorithm) {
    const datapoint = [sepalLength, sepalWidth, petalLength, petalWidth]
    let result
    
    if (algorithm === 'nn') {
      result = nearestNeighborAlgorithm(datasetSpecies, datapoint)
    } else if (algorithm === 'knn') {
      if (k) {
        result = kNearestNeighborAlgorithm(datasetSpecies, datapoint, k)
      } else {
        alert('Fill the attributes!')
        return
      }
    } else if (algorithm === 'dmc') {
      result = dmc(datasetSpecies, datapoint)
    } 

    document.getElementById("result").innerHTML = result;
    document.getElementById("flower_image").src = "../imgs/" + result + ".jpg";
  } else {
    alert('Fill the attributes!')
  }
}
