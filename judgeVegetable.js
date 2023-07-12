function judgeVegetable(vegetables, metric) {
  let correctIndex = 0;
  let currentBest = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > currentBest) {
      currentBest = vegetables[i][metric];
      correctIndex = i;
    }
  }
  return vegetables[correctIndex].submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))