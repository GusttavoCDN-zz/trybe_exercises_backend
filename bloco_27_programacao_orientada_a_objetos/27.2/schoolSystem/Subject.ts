class Subject {
  private _name: string;

  constructor(name: string) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length >= 3) this._name = value;
    else throw new Error('The name must have at least 3 characters');
  }
}

export default Subject;