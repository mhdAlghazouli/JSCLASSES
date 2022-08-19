class Car {
  constructor(brand) {
    this.carName = brand;
  };
  present () {
    return `I have a ${this.carName}`
  };
  get cnam () {
    return this.carName;
  }
  set cnam(x) {
    this.carName = x;
  };
  static hello() {
    return `I'm a static, I belong to the class, not the object!`
  }
};
console.log(Car.hello())
// class Inheritance

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  };
  show() {
    return this.present() + `, it is a ` + this.model;
  };
};

const myCar = new Model('Rivian', "Really cool EV Truck");
console.log(myCar.cnam)