const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


const finalPosition = function (moves) {
  let rtn = [0, 0];

  for (let move of moves) {
    switch (move) {
      case "north":
        rtn[1]++;
        break;

      case "south":
        rtn[1]--;
        break;

      case "east":
        rtn[0]++;
        break;

      case "west":
        rtn[0]--;
        break;

      default:
        break;
    }
  }
  return rtn;
}


console.log(finalPosition(moves));
