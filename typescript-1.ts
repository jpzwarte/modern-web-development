class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

var greeter = new Greeter(123);
// Error: Argument of type 'number' is
// not assignable to parameter of type 'string'
