class Superclass {
  public isSuper: boolean = true;

  public sayHello = () => {
    console.log('Hello World!');
  };
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }

  public callSuperClassHello = () => {
    this.sayHello();
  };
}

function myFunc(object: Superclass) {
  if (object.isSuper) console.log('This is a Superclass');
  else console.log('This is a Subclass');
  
  object.sayHello();
}

const superClass = new Superclass();
const subClass = new Subclass();

// myFunc(superClass);
myFunc(subClass);
