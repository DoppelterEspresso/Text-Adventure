export const GameText = {
  0: {
    text: {
      1: "TEXT ADVENTURE",
    },
    options: {
      1: "start",
    },
    nextPage: {
      start: 1,
    },
  },
  1: {
    text: {
      1: "Hello Friend",
      2: "Welcome to this text adventure.",
      3: "What do you want to do?",
    },
    options: {
      1: "continue",
      2: "exit",
    },
    nextPage: {
      continue: 2,
      exit: 0,
    },
  },
  2: {
    text: {
      1: "So you have chosen to play this game...",
      2: "Very well,",
      3: "Lets get started...",
      4: "You are armed with a sword and get attacked by a slime. What will you do?",
    },
    options: {
      1: "fight",
      2: "retreat",
      3: "continue",
    },
    fightInfo: {
      enemy: "Slime",
      hp: 25,
      maxHp: 25,
      defense: 5,
      attackPower: 3,
    },
    nextPage: {
      retreat: 1,
      continue: 3,
    },
  },
  3: {
    text: {
      1: "DEBUG",
    },
    options: {
      1: "back",
      2: "exit^",
    },
    nextPage: {
      back: 1,
      exit: 0,
    },
  },
};
