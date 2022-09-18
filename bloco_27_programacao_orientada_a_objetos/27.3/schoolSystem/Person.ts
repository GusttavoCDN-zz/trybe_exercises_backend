abstract class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length >= 3) this._name = value;
    else throw new Error('The name must have at least 3 characters');
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(value: Date) {
    const today = new Date();
    const age = today.getFullYear() - value.getFullYear();

    if (value < today || age > 120) this._birthDate = value;
    else throw new Error('The birth date must be before today');
  }
}

export default Person;