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
