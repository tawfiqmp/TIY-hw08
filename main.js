/**
 * 1. create a new repo on Github called TIY-hw08 (08 for the day,
 * 2. add this script file to your index.html and run it in the browser to get the output
 * 3. debug and see the console.log() messages in the chrome dev tools
 */

/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

var num = function max(a, b){
    "use strict";
    if( a > b ) {
        return a
    }
    else {
        return b
    }
}

console.log(num(3,11));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    "use strict";
    if (x >= y && x >= z) {
        return x
    } else if (y >= x && y >= z) {
        return y
    } else {
        return z
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    var vowel = ["a", "e", "i", "o", "u"]
    for (var x = 0; x < vowel.length; i++) {
        if (char === vowel[x]) {
            return true;
        }
    }
    else {
        return false;
    }
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var vowels = "aeiou";
    return phrase.split("").map(function(letter){
    return "aeiouAEIOU \"'/\\".indexOf(letter) >= 0 ? letter : letter+"o"+letter;

    }).join("");
    
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";
    var sum = 0;
    for(var i = 0; i < array.length; i++) { 
      sum = sum + array[i];
   }
   return sum;
}

console.log(sum([1, 2, 3, 4]));

function multiply(array){
    "use strict";
    var multiply = 1;
    for(var i = 0; i < array.length; i++) { 
    multiply = multiply * array[i];
    }
    return multiply;
}

console.log(multiply([1, 2, 3, 4]));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(words){
    "use strict";
    var x = '';
    for (var i = words.length - 1; i >= 0; i--)
    x += words[i];
    return x;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var str = string.split(" ");
    var longest = 0;
    var word = null;

    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });

return word; 
}


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var filterLongWords = new Array ("I", "will", "try", "to", "be", "the", "greatest");
    var i = 3;
    var list = function(filterLongWords) {
        for (var g=0; g < filterLongWords.length; g++){
            if (filterLongWords[g].length > i {
                document.write(filterLongWords[g]);
                console.log(filterLongWords[g]);
            }
        }
    }

}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var characters = {};

    for (var i=0; i<string.length; i++){

        characters[string[i]] = 
            (characters[string[i]] === undefined) ?
            1 : 
            characters[string[i]]+1;
    }
    return characters;    
}





/**
 * part 1 notes
 *
 * equality operator is bad, causes hard to track down bugs
 * it also forces a string to convert into a number in order to compare to anoher number affecting performance
 * strict equality operator is good, causes early breakage in code
 * instanceof operator only useful when comparing made objects
 * to cast a number, use the unary plus operator
 * not using operator twice converts to a boolean
 * typeof only has one use, to check if a variable is defined or not. It should be avoided otherwise.
 * the best way to check for the type of an object use Object.prototype.toString instead of typeof
 * instanceof doesn't work on objects that originate from different javascript contexts
 * javascript will try to apply coercion wherever possible since it's weakly typed
 * a value can easily be cast into a string by prepending an empty string
 * using the not operator twice, any value can be convereted a boolean
 * 
 * 
 */

