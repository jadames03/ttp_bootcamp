function reverse(str) {
    // created a func and passing a string parameter
    var words = []
    // initializing words to an empty array
    var words = str.split(" ");
    // using the split method to divide the string into a list of substrings...this is why we also include a space between quotations
    var strREVERSED = "";
    // this variable will be used to display the entire string 

for (var i = 0; i < words.length; i++){
    // looping i number of times depending on string length
    var word = words[i]
    // created a new variable to store the indexes of our array
    var wordsREVERSED = ""
    // another variable to store the words inside the indexes backwards 
    for (var j = word.length - 1; j > -1; j--){
        /* using length property to determine how long the word is and looping j amount times
        in descending order */ 
        wordsREVERSED += word.charAt(j)
        /* returning the character at the given position and 
           appending each character in the word j amount of times*/
    }
    strREVERSED += wordsREVERSED + " "; 
    // appending the reversed words followed with a whitespace in strREVERSED
}
return strREVERSED
// returning the entire string with reversed words
}

console.log(reverse('got the words to reverse!'))
// log output