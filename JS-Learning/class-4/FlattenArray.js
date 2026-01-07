// Flattening of an Array.

const arr = [1, 2, 3, [5, [6, 7]], 10];
Array.prototype.flatten = function (para) {
  let ans = [];
  for (let i = 0; i < para.length; i++) {
    if (Array.isArray(para[i])) {
      ans = ans.concat(this.flatten(para[i]));
    } else {
      ans.push(para[i]);
    }
  }
  return ans;
};
let ans = Array.prototype.flatten(arr);
console.log("The original Array: ",arr);
console.log("Flattened Array: ",ans);
