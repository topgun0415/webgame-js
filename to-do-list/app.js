/** @format */
// Selectors
const $form = document.querySelector('.form-container');
const $input = document.querySelector('.input');
const $list = document.querySelector('.list');

// Variables
let listArr = [];

// Functions

function onPaintList(e) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  if (listArr.length < 13) {
    $list.appendChild(li);
    li.appendChild(span);
    span.textContent = `${$input.value}`;
    $input.value = '';

    span.addEventListener('click', (e) => {
      const lineList = e.target;
      lineList.classList.toggle('onList');
    });

    button.textContent = '❌';
    li.appendChild(button);
    button.type = 'button';
    button.addEventListener('click', (e) => {
      const delList = e.target.parentElement;
      delList.remove();
      listArr.pop();
    });
  } else {
    alert("You can't put over 13 lists ");
  }
}

function onEnterHandler(e) {
  e.preventDefault();
  if (!$input.value) {
    alert('Please enter your list');
    return;
  }
  let list = $input.value;
  listArr.push(list);
  list = '';
  console.log(listArr);
  onPaintList();
}

// Events

$form.addEventListener('submit', onEnterHandler);

// 1. 인풋값을 저장할 배열 변수를 선언한다.
// 2. 인풋값을 넣고 그걸 html text로 나오게 할 것
// 3. list가 생길때마다 delete dom을 만들어 바인딩하여 삭제시키는 함수를 만들 것
