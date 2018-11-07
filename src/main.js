const { datasetSpecies } = require('./dataset.js')
const { nearestNeighborAlgorithm, kNearestNeighborAlgorithm, dmc } = require('./classifiers.js')

console.log(nearestNeighborAlgorithm(datasetSpecies, [5.9, 3.0, 5.1, 1.9]))
console.log(kNearestNeighborAlgorithm(datasetSpecies, [5.9, 3.0, 5.1, 1.9], 10))
console.log(dmc(datasetSpecies, [5.9, 3.0, 5.1, 1.9]))
