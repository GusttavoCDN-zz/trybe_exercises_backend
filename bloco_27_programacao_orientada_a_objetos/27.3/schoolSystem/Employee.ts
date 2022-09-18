import Person from './Person';

export class Employee extends Person {
  private _admissionDate: Date;
  private _salary: number;
  private _registration = Employee.generateRegistration();

  static generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  }

  static setAdimissionDate(admissionDate: Date): Date {
    if (admissionDate < new Date()) return admissionDate;
    else throw new Error('The admission date must be before today');
  }

  constructor(name: string, birthDate: Date, admissionDate: Date, salary: number) {
    super(name, birthDate);
    this._admissionDate = Employee.setAdimissionDate(admissionDate);
    this.salary = salary;
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
}
