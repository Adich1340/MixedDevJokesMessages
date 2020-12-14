const devJokes = {
  jokes: [
    "Two bytes meet. The first byte asks, 'Are you ill?' The second byte replies, “No, just feeling a bit off.”",
    'Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.',
    'There are only 10 kinds of people in this world: those who know binary and those who don’t.',
    'Programming is like sex: One mistake and you have to support it for the rest of your life.',
    '“I just saw my life flash before my eyes and all I could see was a close tag…”',
    'Debugging: Removing the needles from the haystack.',
  ],
  faces: ['(⌐■_■)', '(づ◔ ͜ʖ◔)づ', '¯_(ツ)_/¯', 'ʢ◉ᴥ◉ʡ', '☞   ͜ʖ  ☞'],
};

let jokeGenerator = [];

function getRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

function printRandomMessage(prop) {
  let randomJoke = getRandomNumber(devJokes[prop].length);
  switch (randomJoke) {
    case 0:
      jokeGenerator.push(devJokes[prop][0]);
      break;
    case 1:
      jokeGenerator.push(devJokes[prop][1]);
      break;
    case 2:
      jokeGenerator.push(devJokes[prop][2]);
      break;
    case 3:
      jokeGenerator.push(devJokes[prop][3]);
      break;
    case 4:
      jokeGenerator.push(devJokes[prop][4]);
      break;
    default:
      console.log('No such JOKE! ᗒ ͟ʖᗕ');
  }
}

function formatJoke() {
  printRandomMessage('jokes');
  printRandomMessage('faces');
  const formatted = jokeGenerator.join('\n');
  console.log(formatted);
}

formatJoke();
