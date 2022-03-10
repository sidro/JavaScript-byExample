var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); // remove first element from ourArray
var myArray = [
  ["John", 23],
  ["dog", 3],
];
var removedFromMyArray = myArray.shift();

console.log(ourArray); // ourArray now is ["J", ["cat"]]
console.log(myArray); // myArray now is [["dog", 3]]
console.log(removedFromOurArray); // removed element from ourArray; Stimpson
console.log(removedFromMyArray); // removed element from myArray; ["John", 23]
