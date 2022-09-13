export interface IData {
  day: number;
  month: number;
  year: number;
}

export class Data implements IData {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    if (value >= 1 && value <= 31) this._day = value;
    else throw new Error('Invalid day');
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    if (value >= 1 && value <= 12) this._month = value;
    else throw new Error('Invalid month');
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }
}
