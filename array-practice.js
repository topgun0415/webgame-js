/** @format */

// 1. Make a camalize function : border-left-width -> borderLeftWidth

function wordCalmelize(item) {
  return item
    .split('-')
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join('');
}

console.log(wordCalmelize('border-left-width')); // borderLeftWidth
console.log(wordCalmelize('list-style-image')); // listStyleImage
console.log(wordCalmelize('-webkit-transition')); // WebkitTransition

// 2. Make a new Array prototype function

/* example 
 let arr = [5, 3, 8, 1];
 let filtered = filterRange(arr, 1, 4);
 alert( filtered );  3,1 
 alert( arr ); 5,3,8,1 
*/

let arr = [5, 3, 8, 1];
let answer = filterRange(arr, 1, 4);
console.log(answer);
console.log(arr);

function filterRange(arr, a, b) {
  return arr.slice(a, b);
}

/* answer
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

정답에서는 Array.prototype.filter 메서드를 사용해서 작성하였지만 문제에서는 어떠한 배열메서드를 써도 상관없었기에 slice()를 사용하였다.
충분히 filter 메서드도 사용할줄 알기에 더 쉬운 방법을 사용. 
*/
