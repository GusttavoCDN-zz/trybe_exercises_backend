import Person from './Person';
import { Employee } from './SchoolWorker';
import Subject from './Subject';

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration = this.generateRegistration();
  private _admissionDate: Date;
  private _salary: number;

  constructor(
    name: string,
    birthDate: Date,
    subject: Subject,
    admissionDate: Date,
    salary: number
  ) {
    super(name, birthDate);
    this._subject = subject;
    this._admissionDate = this.setAdimissionDate(admissionDate);
    this.salary = salary;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  get subject(): Subject {
    return this._subject;
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

  private setAdimissionDate(admissionDate: Date): Date {
    if (admissionDate < new Date()) return admissionDate;
    else throw new Error('The admission date must be before today');
  }
}

export default Teacher;
