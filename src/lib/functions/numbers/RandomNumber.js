//! Code snipped grabbed from MDN Math.random() example.
//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Grabbing a random name by checking array length, offsetting it to allow for full array length.
// Since the method grabs a range of numbers between including 0 and max number as an argument.
// Max number will not be chosen randomly, since it max number is excluded.
// Offset by +1 to include as a possible option in desired range.
const RandomNumber = (max) => Math.floor(Math.random() * max);

export default RandomNumber;
