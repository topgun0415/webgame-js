/** @format */

const $form = document.querySelector('.form-container');
const $input = document.querySelector('.input');
const $list = document.querySelector('.list');

let lists = [];

function onPaintList() {
  const li = document.createElement('li');
  console.log(li);
  $list.appendChild(li);
}

function onEnterHandler(e) {
  e.preventDefault();
  let list = $input.value;
  lists.push(list);
  list = '';
  console.log(lists);
  onPaintList();
}

$form.addEventListener('submit', onEnterHandler);

// 1. 인풋값을 저장할 배열 변수를 선언한다.
// 2. 인풋값을 넣고 그걸 html text로 나오게 할 것
// 3. list가 생길때마다 delete dom을 만들어 바인딩하여 삭제시키는 함수를 만들 것
