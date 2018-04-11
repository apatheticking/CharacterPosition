var sentence = "Lighthouse in the house";
var inputArr = sentence.split("");

function characterPositioning(sentence){
 var letterPos = {};

 for(var i = 0; i < sentence.length; i++){
  if(!letterPos[sentence[i]]){
    letterPos[sentence[i]] = [];
    letterPos[sentence[i]].push(i);
  } else {
    letterPos[sentence[i]].push(i);
  }
 }
 delete letterPos[" "];
 return letterPos;
}

console.log(characterPositioning(inputArr));