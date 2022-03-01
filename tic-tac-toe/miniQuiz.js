/** @format */

// 1. mini quiz about destructuring

const obj = {
  a: 'Hello',
  b: {
    c: 'Hi',
    d: {
      e: 'wow',
    },
  },
};

const {
  a,
  b: { c },
  b: {
    d: { e },
  },
} = obj;

console.log(a, c, e);

// Hello Hi wow

// 2. mini quiz about 5 x 4 row-columns arrays

const table = [];

for (let i = 0; i < 4; i++) {
  const row = [];
  for (let j = 0; j < 5; j++) {
    row.push(1);
  }
  table.push(row);
}

console.log(table);

// [ 1, 1, 1, 1, 1 ],
// [ 1, 1, 1, 1, 1 ],
// [ 1, 1, 1, 1, 1 ],
// [ 1, 1, 1, 1, 1 ]

// 3. Event bubbling Pratice

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EventBubbling</title>
  </head>
  <body>
    <div>
      <button>클릭</button>
    </div>
    <script>
      const $container = document.querySelector('div');

      $container.addEventListener('click', () => {
        alert('Hello, Event bubbling!');
      });
    </script>
  </body>
</html>
*/

// 4. Array.prototype.some, Array.prototype.every 메서드 퀴즈
// 배열 중에 하나라도 null 이면 true를 반환하게 만들어라
const arr = [1, 'hello', null, undefined, false];
const some = arr.some((v) => v === null);
console.log(some); // true
