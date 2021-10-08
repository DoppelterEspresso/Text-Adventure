export const GameText = {
  0: {
    text: {
      1: "Goodbye, friend",
    },
    options: {},
    nextPage: {},
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
    },
    fightInfo: {
      enemy: "Slime",
      hp: 25,
      attackPower: 3,
    },
    nextPage: {},
  },
};
