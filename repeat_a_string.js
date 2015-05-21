function repeat(str, num) {
  // Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
  if (num < 0)
    return '';
  return str.repeat(num); // ES6 - only works in FF
}

console.log(repeat('abc', 3));
