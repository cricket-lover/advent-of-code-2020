const fs = require('fs');

const entries = fs.readFileSync('./input.txt', 'utf-8').split('\n');

const getCharCount = function (string, alphabet) {
  let count = 0;
  const list = string.split('');
  list.forEach((letter) => {
    count += letter === alphabet ? 1 : 0;
  });
  return count;
};

const getValidPasswords = (entries) => {
  const validPasswords = [];
  entries.forEach((entry) => {
    const [letterOccurrences, word] = entry.split(':');
    const [range, letter] = letterOccurrences.split(' ');
    const [down, up] = range.split('-').map(Number);

    const letterCount = getCharCount(word, letter);
    if (letterCount >= down && letterCount <= up) {
      validPasswords.push(word);
    }
  });

  return validPasswords;
};

const result = getValidPasswords(entries);
console.log(result.length);
