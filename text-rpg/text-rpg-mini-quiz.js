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
me.showName();
me.showAge();
