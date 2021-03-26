const fs = require('fs');

const entries = fs.readFileSync('./input.txt', 'utf-8').split('\n');

const getValidPasswords = (entries) => {
  const validPasswords = [];
  entries.forEach((entry) => {
    const [letterOccurrences, word] = entry.split(':');
    const [range, letter] = letterOccurrences.split(' ');
    const [first, second] = range.split('-').map(Number);

    const isValid =
      (word[first] === letter || word[second] === letter) &&
      word[first] !== word[second];
    if (isValid) {
      validPasswords.push(word);
    }
  });

  return validPasswords;
};

const result = getValidPasswords(entries);
console.log(result.length);
