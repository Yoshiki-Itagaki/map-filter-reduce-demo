import map from "./methods/map";
import filter from "./methods/filter";
import reduce from "./methods/reduce";
import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const mapper = new map();
const mapNumbers = mapper.mapNumbers(numbers);
console.log(mapNumbers);

//Filter - Create a new array by keeping the items that return true.
const filterer = new filter();
const filterNumbers = filterer.filterNumbers(numbers);
console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
const reducer = new reduce();
const reduceNumbers = reducer.reduceNumbers(numbers);
console.log(reduceNumbers)


//Find - find the first item that matches from an array.

const newEmojipedia = emojipedia.map(function (emojiEntry){
  return emojiEntry.meaning.substring(0, 100);
})

console.log(newEmojipedia);
//FindIndex - find the index of the first item that matches.
