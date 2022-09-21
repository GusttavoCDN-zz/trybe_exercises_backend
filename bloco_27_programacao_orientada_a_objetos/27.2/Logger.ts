interface Logger {
  log(message: string): void;
}

interface Database{
  save(key: string, value: string): void;
  logger: Logger;
}

class ConsoleLogger implements Logger {
  public log(message: string): void {
    console.log(message);
  }
}

class ConsoleLogger2 implements Logger {
  public log(message: string): void {
    console.log(message, "POO is awesome!");
  }
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}
  
  public save(key: string, value: string): void {
    this.logger.log(`Saving ${key} with value ${value}`);
  }
}

// Crie um objeto de cada um dos _Loggers_.
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício.
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');