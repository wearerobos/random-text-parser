function randomTextParser(text) {
  if (!text) return text;

  const matched = text.match(/\((?:[^()]+)\|(?:[^()]+)\)/g);
  if (!matched) return text;

  const parsedText = matched.reduce((acc, bundle) => {
    const options = bundle.substring(1, (bundle.length - 1)).split('|');
    const index = Math.floor(Math.random() * options.length);
    const chosen = options[index];
    return acc.replace(bundle, chosen);
  }, text);

  return randomTextParser(parsedText);
}

module.exports = randomTextParser;
