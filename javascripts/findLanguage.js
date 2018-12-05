const findCommonLanguage = (aryOfLanguages) => {
  let maxCount = 1;
  let langCount = 0;
  let result;
  for (let i = 0; i < aryOfLanguages.length; i += 1) {
    for (let j = i; j < aryOfLanguages.length; j += 1) {
      if (aryOfLanguages[i] === aryOfLanguages[j]) {
        langCount += 1;
        if (maxCount < langCount) {
          maxCount = langCount;
          result = aryOfLanguages[i];
        }
      }
    }
    langCount = 0;
  }
  if (result != null) {
    return `Your most used language is: ${result}`;
  }
  return 'Sorry, you prefer to write READMEs!';
};

module.exports = findCommonLanguage;
