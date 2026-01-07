// Memoization is an optimization technique
//  where we cache the result of a function 
// call and reuse 
// it when the same inputs occur again.

// Instead of recomputing → reuse stored result.
function memoize(fn) {
  const cache = {}; // closure variable

  return function (x) {
    if (x in cache) {
      console.log("From cache");
      return cache[x];
    }

    console.log("Calculated");
    cache[x] = fn(x);
    return cache[x];
  };
}
const res = memoize((x) => x * x);
console.log(res(5));
// Calculated
// 25



console.log(res(6));
// Calculated
// 36
console.log(res(7));
// Calculated
// 49
console.log(res(6));
// From cache
// 36
