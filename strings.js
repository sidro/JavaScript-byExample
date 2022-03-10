function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
   var result ="";
    //result += "The " + myAdjective +" "+ myNoun +" "+ myVerb +" to the store " + myAdverb;
    result += `The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb} !`
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

console.info(wordBlanks("dog", "big", "ran", "quickly"));

