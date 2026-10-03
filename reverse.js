let str="my name is raja";
let words=str.split(" ");
let result=words.map(word=>word.split("").reverse().join(""));
console.log(result.join(" "));