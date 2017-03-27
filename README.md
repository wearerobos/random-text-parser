# Random Text Parser :memo:

Generate random text by randomizing sentences between parenthesis separated by pipe.

## Example

`randomTextParser("I (don't|do|really) mind if you do this ((even if it hurts|bacause it may hurt) me)");`

Returns random sentence:
> I don't mind if you do this (bacause it may hurt me)

> I do mind if you do this (bacause it may hurt me)

> I really mind if you do this (even if it hurts me)

> I really mind if you do this (even if it hurts me)

> ...

## Usage

Just create your text with the random part between (parenthesis) and separated by |pipes| and pass it as first parameter to Random Text Parser.

You may even have nested "random objects".

`randomTextParser("I ((don't|do|really) mind|will (kill|hug|look for) you)|make you mine) if you do this.")`

## Contributing
Hope you enjoy this and contribute!

We are using ES5 syntax for better compatibility.

Please, test your pull requests. We are using Mocha and Chai for testing.

Any doubt, feel free to ask.

## License

MIT License

Copyright (c) 2017 ROBOS.im https://robos.im

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
