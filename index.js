// Write your solution here!

// 1. Declare cats array with initial values
var cats = ["Milo", "Otis", "Garfield"];

// Function to return the cats array
function getCats() {
  return cats;
}

// 2. Function to destructively append a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 3. Function to destructively prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 4. Function to destructively remove the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 5. Function to destructively remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 6. Function to append a cat to the cats array and return a new array, leaving the cats array unchanged
function appendCat(name) {
  return [...cats, name];
}

// 7. Function to prepend a cat to the cats array and return a new array, leaving the cats array unchanged
function prependCat(name) {
  return [name, ...cats];
}

// 8. Function to remove the last cat in the cats array and return a new array, leaving the cats array unchanged
function removeLastCat() {
  return cats.slice(0, -1);
}

// 9. Function to remove the first cat from the cats array and return a new array, leaving the cats array unchanged
function removeFirstCat() {
  return cats.slice(1);
}

// Example usage:
console.log(getCats()); // ["Milo", "Otis", "Garfield"]

destructivelyAppendCat("Tom");
console.log(getCats()); // ["Milo", "Otis", "Garfield", "Tom"]

destructivelyPrependCat("Jerry");
console.log(getCats()); // ["Jerry", "Milo", "Otis", "Garfield", "Tom"]

destructivelyRemoveLastCat();
console.log(getCats()); // ["Jerry", "Milo", "Otis", "Garfield"]

destructivelyRemoveFirstCat();
console.log(getCats()); // ["Milo", "Otis", "Garfield"]

console.log(appendCat("Sylvester")); // ["Milo", "Otis", "Garfield", "Sylvester"]
console.log(getCats()); // ["Milo", "Otis", "Garfield"]

console.log(prependCat("Felix")); // ["Felix", "Milo", "Otis", "Garfield"]
console.log(getCats()); // ["Milo", "Otis", "Garfield"]

console.log(removeLastCat()); // ["Milo", "Otis"]
console.log(getCats()); // ["Milo", "Otis", "Garfield"]

console.log(removeFirstCat()); // ["Otis", "Garfield"]
console.log(getCats()); // ["Milo", "Otis", "Garfield"]

