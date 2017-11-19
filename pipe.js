function pipe() {
  const args = Array.from(arguments);
  if (args.length === 0) {
    return pipe;
  } else if (args.length === 1) {
    if (typeof args[0] === 'function') {
      return args[0]();
    } else {
      return args[0];
    }
  } else {
    const last = args.pop();
    return last(pipe(...args));
  }
}

function add2(n) {
  return n + 2;
}

function toString(n) {
  return n.toString();
}

function repeat(n) {
  return (value) => {
    return value.repeat(n);
  }
}

console.log(pipe(1, add2, toString, repeat(3)) === '333');
