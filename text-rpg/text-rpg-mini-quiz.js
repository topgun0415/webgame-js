/** @format */

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(`hello my name is ${this.name}`);
  }
  showAge() {
    console.log(`hello I'm ${this.age} years old`);
  }
}

const me = new Human('philip', 30);
me.showName(); // hello my name is philip
me.showAge(); // hello I'm 30 years old

// extends를 사용해서 상속을 받는다.

class Programmer extends Human {
  constructor(name, age, languages) {
    super(name, age);

    this.languages = languages;
  }
  writeCode() {
    console.log(`I can do ${this.languages}`);
  }
}

// Prameter로 배열을 넣을 수도 있음
const programmer = new Programmer('Philipuuu', 29, [
  'html',
  'css',
  'javascript',
]);

programmer.showName(); // hello my name is Philipuuu
programmer.showAge(); // hello I'm 29 years old
programmer.writeCode(); // I can do html,css,javascript
