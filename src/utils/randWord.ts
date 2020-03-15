const randomWords = ["Cats", "Memes", "Doge", "Virus", "Death", "Depression", "Pain", "Weed", "Alcohol", "Sleep"];

function getRandWord() {
  const rand = Math.floor(Math.random() * (randomWords.length));
  return randomWords[rand];
}

export default getRandWord;