// Crie uma classe cujo objeto represente um Cachorro.
export class Dog {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  bark() {
    console.log('Woof!');
  }
}

// Crie uma classe cujo objeto represente uma Casa.
export class House {
  owner: string;
  address: string;
  number: number;
  district: string;
  constructor(address: string, number: number, district: string, owner: string) {
    this.address = address;
    this.number = number;
    this.district = district;
    this.owner = owner;
  }
}

// Crie uma classe cujo objeto represente um Voo.
export class Flight {
  origin: string;
  destination: string;
  constructor(origin: string, destination: string) {
    this.origin = origin;
    this.destination = destination;
  }
}







