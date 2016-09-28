//Long Qn 1
var words = ["hello", "what", "is", "up", "dude"];


var length = words.map(function(x){
  return x.length;
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

var strSplit = words.split(" ");

//return an array of the length of each word in string

var strLength= strSplit.map(function(word){
  return word.length;
});

//sort word lengths in ascending order
var strSort = strLength.sort();

//find out longest length amongst words

var longestlength = strSort[strSort.length - 1]

console.log(longestlength);

//Short Qn 8
