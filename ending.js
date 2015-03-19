function end(str, target) {
  return str.slice(-target.length) === target ? true: false;
}

console.log(end('Bastian', 'n'));
