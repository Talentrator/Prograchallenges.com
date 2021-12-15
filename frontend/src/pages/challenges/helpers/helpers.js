
/**
 * Changes a markdown text to an array of phrases with codeblocks
 * @param { String } text
 * @returns { Array } Phrases array
 */

const categorizeCodeSnippetsAndText = (text) => {
  const phrases = [];
  let currentPhrase = "";
  let backtickCount = 0;
  let isIteratingThroughCode = false;
  const occurences = (text.match(/```/g) || []).length;
  if (occurences === 0 || occurences % 2)
    phrases.push({ phrase: text, type: "text" });
  else {
    text.split("").forEach((currentCharacter) => {
      if (currentCharacter === "`") {
        backtickCount += 1;
        if (backtickCount === 3) {
          backtickCount = 0;
          phrases.push({
            phrase: isIteratingThroughCode
              ? currentPhrase.substr(currentPhrase.indexOf("\n")).trim()
              : currentPhrase,
            type: isIteratingThroughCode ? "code" : "text",
            lang: isIteratingThroughCode
              ? currentPhrase.substr(0, currentPhrase.indexOf("\n")).trim()
              : null,
          });
          currentPhrase = "";
          isIteratingThroughCode = !isIteratingThroughCode;
        }
      } else {
        currentPhrase += currentCharacter;
      }
    });
  }
  if (currentPhrase.length)
    phrases.push({ phrase: currentPhrase, type: "text" });
  return phrases;
};

export {
  categorizeCodeSnippetsAndText,
};
