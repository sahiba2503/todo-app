
// function formatDateReadable(date) {
//     const options = {
//         weekday: 'long',
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//     };
//     return date.toLocaleString("en-us", options);
// }

// // Usage:
// const today = new Date();
// console.log("date", formatDateReadable(today));
// console.log(
//     "date", new Date().toLocaleString("en-us", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
// );

// function formatDateReadable(date) {
//     const options = {
//         weekday: 'long',
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//     };
//     return date.toLocaleString("en-us", options);
// }

// Usage:
// const today = new Date();
// console.log("date", formatDateReadable(today));
 var createDatevalue = new Date().toLocaleString("en-us", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })