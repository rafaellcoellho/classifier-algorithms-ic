function euclidianDistance (dataPoint1, dataPoint2) {
  return Math.sqrt(
    Math.pow(dataPoint2[0] - dataPoint1[0], 2) +
        Math.pow(dataPoint2[1] - dataPoint1[1], 2) +
        Math.pow(dataPoint2[2] - dataPoint1[2], 2) +
        Math.pow(dataPoint2[3] - dataPoint1[3], 2)
  )
}

function nearestNeighborAlgorithm (dataset, dataPoint) {
  const dist = dataset
    .map(data => [ euclidianDistance(dataPoint, data), data[4] ])
    .sort()

  return dist[0][1]
}

function kNearestNeighborAlgorithm (dataset, dataPoint, k) {
  const dist = dataset
    .map(data => [ euclidianDistance(dataPoint, data), data[4] ])
    .sort()

  const kNeighbor = dist
    .slice(0, k)

  let speciesOfNeighbor = { 'setosa': 0, 'versicolor': 0, 'virginica': 0 }
  kNeighbor.forEach(neighbor => {
    speciesOfNeighbor[neighbor[1]] += 1
  })

  const label = Object.keys(speciesOfNeighbor)
    .reduce((a, b) => speciesOfNeighbor[a] > speciesOfNeighbor[b] ? a : b)

  return label
}

function dmc (dataset, dataPoint) {
  const getAverage = (total, current, index, data) => {
    // Faz o somatório total
    total = current
      .map((x, i) => x + total[i])

    if (index === data.length - 1) {
      // Caso seja o ultimo, retorna a média
      return [
        total[0] / data.length,
        total[1] / data.length,
        total[2] / data.length,
        total[3] / data.length,
        current[4]]
    } else {
      return total
    }
  }

  const averageSetosa = dataset
    .filter(data => data[4] === 'setosa')
    .reduce(getAverage)

  const averageVersicolor = dataset
    .filter(data => data[4] === 'versicolor')
    .reduce(getAverage)

  const averageVirginica = dataset
    .filter(data => data[4] === 'virginica')
    .reduce(getAverage)

  const averageArray = [averageSetosa, averageVersicolor, averageVirginica]

  return nearestNeighborAlgorithm(averageArray, dataPoint)
}
