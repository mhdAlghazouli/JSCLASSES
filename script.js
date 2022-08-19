class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age () {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
  greet(time) {
    return `Good ${time} ${this.name}`
  }
}

// create the new Object using the blueprint aka class

const myCar1 = new Car("space ship", 2064);
const myCar2 = new Car("pirate N' Pixie", 2019);

console.log(myCar1)
console.log(myCar1.age())
console.log(myCar2.age())
console.log(myCar2.greet(`evening`))