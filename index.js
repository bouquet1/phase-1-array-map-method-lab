const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  return tutorials.map(sentence => {
  const words = sentence.split(" ");
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1, word.length))
  return capitalizedWords.join(" ");
  });
}
console.log(titleCased())

/* How can we "iterate" through individual words in a string? with .split()
let text = "How are you doing today?";
const myArray = text.split(" ");
myArray; result => [ 'How', 'are', 'you', 'doing', 'today?' ]*/

/* Can we execute an iteration inside an iteration? How? .map() inside .map()
x.map(()=>{
  return y.map(){
    //do something
  }
}) */

/* How can we capitalize just the first letter in a word? charAt() = returns the character at a given position in a string. syntax: string.charAt(index)
toUpperCase() = converts all the characters of an input string to uppercase. Syntax: string.toUpperCase()
slice() = slices from a specified 'star' position until the 'end' position. Syntax: string.slice(start, end) */

//const myVar = "hello";
//console.log(myVar.charAt(0).toUpperCase() + myVar.slice(1, myVar.length))

