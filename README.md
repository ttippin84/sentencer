# sentencer.js

sentencer.js is a javascript module that will break paragraphs of text into their component sentences.

### Usage

```javascript

var Sentencer = require('./sentencer');
var sentencer = new Sentencer();

// Break this paragraph into sentences
var paragraph = 'The change of name from LiveScript to JavaScript roughly coincided'
+ ' with Netscape adding support for Java technology in its Netscape Navigator web '
+ 'browser. The final choice of name caused confusion, giving the impression that the'
+ ' language was a spin-off of the Java programming language, and the choice has been
+ ' characterized as a marketing ploy by Netscape to give JavaScript the cachet of what'
+ ' was then the hot new web programming language.';

// The cleanSentences() method returns an array of sentences
var sentences = sentencer.cleanSentences(paragraph);
console.log(sentences);
/*
[ 'The change of name from LiveScript to JavaScript roughly coincided with Netscape 
adding support for Java technology in its Netscape Navigator web browser.',
  'The final choice of name caused confusion, giving the impression that the language 
was a spin-off of the Java programming language, and the choice has been characterized 
as a marketing ploy by Netscape to give JavaScript the cachet of what was then the hot 
new web programming language.' ]
*/
```
