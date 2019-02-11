
/* 
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. 
You need to form a complete sentence using words of your choice, along with the words we provide.
*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "I ran to the store and saw a " + myNoun + " It was " + myAdjective + " He saw me and " + myVerb + " " + myAdverb;
  
    // Your code above this line
    return result;
  }
  
  // Change the words here to test your function
  wordBlanks("dog", "big", "ran", "quickly");