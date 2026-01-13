// function fetchData(callback) {
//   setTimeout(() => {
//     callback("DATA RECEIVED");
//   }, 1000);
// }

// fetchData((data) => {
//   console.log(data);
// });
// worrking fine till here
// O/P :- DATA RECEIVED

// callback problem
function fetchData(callback) {
  callback("DATA 1");
  callback("DATA 2"); // 😱 called twice
}
fetchData((data) => {
  console.log("Processing:", data);
});
// Processing: DATA 1
// Processing: DATA 2