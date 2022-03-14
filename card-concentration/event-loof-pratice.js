/** @format */

function aaa() {
  setTimeout(() => {
    console.log('d');
  }, 0);
  console.log('c');
}

setTimeout(() => {
  console.log('a');
  aaa();
}, 0);

setTimeout(() => {
  aaa();
  console.log('b');
}, 0);

// Call Stack :
// Web API :
// Task Queue :
// console : a , c , c, b , d , d
