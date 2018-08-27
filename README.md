# Random Text Parser :memo:

Generate random text by randomizing sentences between parenthesis separated by pipe.

## Example

`randomTextParser("I (don't|do|really) mind if you do this ((even if it hurts|bacause it may hurt) me)");`

Returns random sentence:
> I don't mind if you do this (bacause it may hurt me)
>
> I do mind if you do this (bacause it may hurt me)
>
> I really mind if you do this (even if it hurts me)
>
> I really mind if you do this (even if it hurts me)
>
> ...

# Installation
`npm install @wearerobos/random-text-parser --save`

## Usage

Just create your text with the random part between (parenthesis) and separated by |pipes| and pass it as first parameter to Random Text Parser.

You may even have nested "random objects".

```
const randomTextParser = require('@wearerobos/random-text-parser');
randomTextParser("I ((don't|do|really) mind|will (kill|hug|look for) you)|make you mine) if you do this.")
```

## Contributing
Hope you enjoy this and contribute!

We are using ES5 syntax for better compatibility.

Please, test your pull requests. We are using Mocha and Chai for testing.

Any doubt, feel free to ask.
