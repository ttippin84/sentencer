/*
Copyright 2014 T.Tippin, Vega Beach Softworks
sentencer.js

sentencer.js is a library to break paragraphs of text into their component sentences.
*/

/*
 * function Sentencer()
 * (string)
 *
 * Creates the Sentencer object
*/

function Sentencer() {
	
}
/*
 * function Sentencer.getChars(input)
 * (string) -> array
 *
 * Method returns each character of `input` as array of characters.
*/

Sentencer.prototype.getChars = function(input) {
	return input.split('');
};

/*
 * function Sentencer.separatePuncs(input)
 * (string) -> array
 *
 * Method returns array of strings from `input` that have been split by ending 
 * punctuation characters (eg. ., !, ?).
*/

Sentencer.prototype.separatePuncs = function(input) {
	var chars = this.getChars(input);
	var insideQuote = false;
	var sentence = [];
	var splitStrings = [];

	// Iterate through the characters in this.text, split them into sentences by splitting at ending 
	// punctuation characters, if position is not inside a quote, and our current sentence is not an empty string.
	for (var position in chars) {
		var character = chars[position];

		// If the iterator position is the end of the input text string,
		// add the final sentence regardless of punctuation and return
		if (position == chars.length - 1) {
			sentence.push(character);
			sentence = sentence.join("");
			splitStrings.push(sentence);
			return splitStrings;
		}

		if (character == '.' || character == '!' || character == '?') {
			// Check if we are inside a quote -- if we are not, end the sentence and add it to splitStrings array
			if (!insideQuote && sentence.length != 0) {
				sentence.push(character);
				sentence = sentence.join("");
				splitStrings.push(sentence);
				sentence = [];
			}
			else {
				sentence.push(character);
			}
		}
		else if (character == '"') {
			// If we're inside a quote, ending punctuation does not split a sentence
			if (insideQuote)
				insideQuote = false;
			else
				insideQuote = true;

			sentence.push(character);
		}
		else {
			// After all other checks, add the character to current sentence array
			sentence.push(character);
		}
	}

	return splitStrings;
}

/*
 * function Sentencer.cleanSentences(input)
 * (string) -> array
 *
 * Method gets chunks of possible sentences from `input`, cleans them 
 * up into proper looking sentences and returns an array of cleaned sentence strings.
*/

Sentencer.prototype.cleanSentences = function(input) {
	var chunks = this.separatePuncs(input);
	var sentences = [];

	// Iterate through the pre-cleaned sentence chunks
	for (var chunkPosition in chunks) {
		var chunk = chunks[chunkPosition];
		var chunkChars = chunk.split("");
		
		// Remove any leading whitespace from sentences
		while (chunkChars[0] == " ") {
			chunkChars[0] = '';
		}

		// Add the cleaned sentences to the sentences array
		sentences.push(chunkChars.join(''));
	}

	return sentences;
};

module.exports = Sentencer;