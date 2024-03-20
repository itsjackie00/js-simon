function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUniqueRandomNumber(min, max, blacklist) {
  let isFound = false;
  let randomNumber;
  while (isFound === false) {
    randomNumber = getRndInteger(min, max);
    if (blacklist.includes(randomNumber) === false) {
      isFound = true;
    }
    return randomNumber;
  }
}