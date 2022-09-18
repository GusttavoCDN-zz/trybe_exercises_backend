import Person from './Person';
import { Employee } from './Employee';
import Subject from './Subject';

class Teacher extends Employee {
  private _subject: Subject;

  constructor(
    name: string,
    birthDate: Date,
    subject: Subject,
    admissionDate: Date,
    salary: number
  ) {
    super(name, birthDate, admissionDate, salary);
    this._subject = subject;
  }

  get subject(): Subject {
    return this._subject;
  }

  private generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  }
}

export default Teacher;
