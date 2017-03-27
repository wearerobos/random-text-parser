function randomTextParser (text) {
  if (!text) return text;

  const matched = text.match(/\((?:[^()]+)\|(?:[^()]+)\)/g);
  if (!matched) return text;

  matched.forEach(function (bundle) {
    var options = bundle.substring(1, (bundle.length - 1)).split('|');
    var index = Math.floor(Math.random() * options.length);
    var chosen = options[index];
    text = text.replace(bundle, chosen);
  });
  
  return randomTextParser(text);
}

module.exports = randomTextParser;
