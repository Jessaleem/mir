function myFunction(a, b) {
  let result
  for (let key in a) {
    console.log(key);
    if (key === b) {
      result = true;
    } else {
      result = false;
    }
  }
  return result
}

myFunction({ a: 1, b: 2, c: 3 }, "b");