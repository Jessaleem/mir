// const Clock = (props) => {
// return <h1>Look at the time: {props.time} </h1>
// };

// let a = {y: 20};
// a.x =a;
// console.log(JSON.stringify(a))

// let arr=[1, "Turing", {x:2}, [3, 4]];
// delete arr[1];
// console.log(arr.length)

// const a = [34, 23, 1, 24, 75, 33, 54, 8]
// const k = 58
// let result = [];

// function sum (array, integer) {
//   for (let i = 0; i < array.length; i++){
//     for (let j = 0; j< array.length; j++){
//       if ((array[i] < array[j]) && ((array[i]+array[j])< integer)){
//         result = array[i]+ array[j]
//       }
//     }
//   }
//   return result;
// }

// console.log(sum([34, 23, 1, 24, 75, 33, 54, 8], 60))

// const twoSumLessThanK = function (A, K) {
//   let result = 0
//   for(let i = 0; i < A.length; i++) {
//     for(let j = 0; j < A.length; j++) {
//       let sum = A[i] + A[j]
//       if(sum > result && sum < K) {
//         result = sum
//       }
//     }
//   }
//   if(result === 0){
//     return -1
//   }
//   return result
// }
// console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60));
// console.log(twoSumLessThanK([10, 20, 30], 15))

function findTheDifference (S, T) {
  console.log(S.charAt(0))
  let charResult = '';
  for(let i = 0; i< S.length ; i++){
    for(let j = 0; j< T.length; i++){
      console.log(S.charAt(i))
      console.log(T.charAt(j))
      if(S.charAt(i) != T.charAt(j)){
        charResult = T.charAt(j);
      }
    }
  }
  return charResult
}

console.log(findTheDifference('abc', 'abcd'))


