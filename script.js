//Long Qn 1
var words = ["hello", "what", "is", "up", "dude"];


var length = words.map(function(wordsLength){
  return wordsLength.length;
})

console.log(length);

//Short Qn 4
var nums = [10, 9, 5, 4];

var add = function (a, b){
  return a + b;
}

var sumArray = nums.reduce(add);

console.log(sumArray);

var multiply = function (a, b){
  return a * b;
}

var multiplyArray = nums.reduce(multiply);

console.log(multiplyArray);

//Short Qn 7

var words = "The quicker brown fox jumps over the lazy dog"

var strSplit = str.split(" ");

//return an array of the length of each word in string

var strLength= strSplit.map(function(word){
  return word.length;
});


//sort word lengths in ascending order
var strSort = strLength.sort();

//find out longest length amongst words

var longestlength = strSort[strSort.length - 1]

//filter longest word
var longestWord = strSplit.filter(function(word){
  return word.length === longestlength;
});

console.log(longestWord);

//Alt answer found on web using sort function
var wordsSplit = words.split(" ");

var lengthDiff = function (a,b){
  return b.length - a.length
}

var longestWord = wordsSplit.sort(lengthDiff)[0]

console.log(longestWord);

//Short Qn 8
