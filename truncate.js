function truncate(str, num) {
  // Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.
  if (num < str.length)
    return str.slice(0,num -3).concat('...');
  else
    return str;
}

console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));
