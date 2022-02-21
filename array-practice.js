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

// 3. Make a new Array function (main array change)

let arr1 = [5, 3, 8, 1];
let arr2 = [2, 4, 6, 5, 8, 10, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    let value = arr[i]; // 5

    if (value < a || b < value) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filterRangeInPlace(arr1, 1, 4);
console.log(arr1); // [ 3, 1 ]
filterRangeInPlace(arr2, 2, 5); // 2, 4, 5
console.log(arr2);

// 4. 내림차순으로 정렬하기

let arr4 = [5, 2, 1, -10, 8];

const arrSorted = arr4.sort((a, b) => b - a);
console.log(arr4);

// 5. 배열 복사본을 정렬하기

let arr5 = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
  return arr.concat().sort();
}

const sorted = copySorted(arr5);

console.log(arr5); // [ 'HTML', 'JavaScript', 'CSS' ]
console.log(sorted); // [ 'CSS', 'HTML', 'JavaScript' ]

// 6. 확장 가능한 계산기 (추가 기능은 구현 못함)

function Calculator(number) {
  this.calculate = function (count) {
    const counts = count.split(' '); // [ '3', '+', '7' ]
    const firstNum = Number(counts[0]);
    const secondNum = Number(counts[2]);
    const fomula = counts[1];
    let answer = 0;

    if (fomula === '+') {
      answer = firstNum + secondNum;
    }

    if (fomula === '-') {
      answer = firstNum - secondNum;
    }

    return answer;
  };
}

const calc = new Calculator();
console.log(calc.calculate('3 - 7')); // -4
console.log(calc.calculate('3 + 7')); // 10
console.log(calc.calculate('3 + 15')); // 18

// Need to use more object like { } so that I can add new counter function not only plus and minus also divide, time.

// 7. 이름 맵핑하기
let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };
let users = [john, pete, mary];

let names = users.map((item) => item.name);
console.log(names); // [ 'John', 'Pete', 'Mary' ]

// 8. 객체 매핑하기

let john1 = { name: 'John', surname: 'Smith', id: 1 };
let pete1 = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary1 = { name: 'Mary', surname: 'Key', id: 3 };

let users1 = [john1, pete1, mary1];
console.log(users1);

let usersMapped = users1.map((v, i) => ({
  fullName: `${v.name} ${v.surname}`,
  id: i,
}));
console.log(usersMapped);
console.log(usersMapped[0].fullName); // John Smith

// let usersMapped = users1.map((v, i) => {
//   fullName: `${v.name} ${v.surname}`,
//   id: i,
// });

// 위와 같은 시도를 계속 했지만 계속해서 틀렸었다. 이유는 자바스크립트는 중괄호 { }를 만나면 이를 객체라 인식하지 않고 바로 함수본문이 시작되는 것이라 인식한다. 소괄호를 사용하면 이를 피할 수 있다.
