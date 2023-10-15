// Q No 1
let str = "sonu\""
console.log(str)
console.log(str.length)
const sentence = "the quick brown fox jumps over a lazy dog"
const word = "fox"
console.log(`the word ${word} ${sentence.includes(word)? 'is': 'is not'} included in the sentence `);
// Q No 2
console.log(sentence.includes(word))
let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("Hello"));
// Q No 3
console.log(text.endsWith("universe."))
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())
// Q No 4
let str1 = "Please give me RS 1000"
let amount = Number.parseInt(str1.slice("Please give me RS ".length))
console.log(amount)
// Q No 5
let friend = "Deepika "
console.log(friend.replace("p","r"))