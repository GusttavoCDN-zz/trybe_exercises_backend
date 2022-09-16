interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `Sum of ${this.myNumber} and ${myParam} is ${this.myNumber + myParam}`;
  }
}

const myClass = new MyClass(10);
console.log(myClass.myFunc(5));