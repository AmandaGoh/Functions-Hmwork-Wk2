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

var array = ["this", "is", "random"]

function filterArr(arr, x){

var filtered = arr.filter(function(word){
    return word.length > x
})
return filtered;
                        
}

//Additional Qns on JS Bin

//Qn 1

var words = "The quick brown fox jumped over the lazy dog"

var strSplit = words.split(" ");

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

//Qn 2
var arrOfArr =
    [
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1]
    ];

var newArr = arrOfArr.map(function(subArr){
  return subArr.reduce(function(a,b){
    return Math.max(a,b);
})
})


console.log (newArr)

  // output ==> [ 5, 27, 39, 1001 ]
