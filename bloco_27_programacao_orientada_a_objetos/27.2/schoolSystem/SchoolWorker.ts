import Person from './Person';

export interface Employee {
  admissionDate: Date;
  salary: number;
  registration: string;
}

class SchoolWorker extends Person implements Employee {
  private _admissionDate: Date;
  private _salary: number;
  private _registration: string;

  constructor(name: string, admissionDate: Date, salary: number, birthDate: Date) {
    super(name, birthDate);
    this._admissionDate = admissionDate;
    this._salary = salary;
    this._registration = this.generateRegistration();
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value > 0) this._salary = value;
    else throw new Error('The salary must be greater than 0');
  }

  get registration(): string {
    return this._registration;
  }

  private generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  }
}

export default SchoolWorker;
