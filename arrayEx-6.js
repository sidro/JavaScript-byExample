var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray IS NOW ["J", "cat"]
ourArray.unshift("Happy"); //ourArray is now ["Happy", "J", "cat"]

var myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift(); // ourArray is [["dog", 3]]
myArray.unshift(["Paul", 35]); //ourArray is now [["Paul", 35], ["dog", 3]]

console.log(ourArray);
console.log(myArray);
