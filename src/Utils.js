const resetCase = (playerCount) => {
  const cases = {};
  for (let i = 0; i < playerCount; i++) cases[i] = "";
  return cases;
};

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomPlayers = (playerCount, data) => {
  const players = new Set();
  while (players.size < playerCount) players.add(data[getRandomNumber(0, 10)]);
  console.log(players);
  return [...players];
};

const getRandomLegs = (playerCount) => {
  const legCounts = [];
  const legs = [];
  let rows = new Set();
  let column = 0;

  for (let i = 1; i < playerCount; i++) legCounts.push(getRandomNumber(2, 5));

  while (column < playerCount - 1) {
    if (rows.size === legCounts[column]) {
      legs.push([...rows].sort());
      rows = new Set();
      column++;
    }

    const num = getRandomNumber(0, 9);
    if (column < 1) rows.add(num);
    else {
      const isDuplicate = legs[column - 1].includes(num);
      if (!isDuplicate) rows.add(num);
    }
  }

  return legs;
};

export { resetCase, getRandomLegs, getRandomPlayers };
