import map from "./methods/map";
import filter from "./methods/filter";
import reduce from "./methods/reduce";
import find from "./methods/find";
import findIndex from "./methods/findIndex";
import emojipedia from "./emojipedia";
import substring from "./methods/substring";

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
const finder = new find();
const matchNumber = finder.findNumbers(numbers);
console.log(matchNumber);

//FindIndex - find the index of the first item that matches.
const indexFinder = new findIndex();
const matchIndex = indexFinder.findIndexOfNumbers(numbers);
console.log(matchIndex);

//Locate Substrings of entries
const substringLocator = new substring();
const newEmojipedia = substringLocator.locateSubstring(emojipedia);
console.log(newEmojipedia);
