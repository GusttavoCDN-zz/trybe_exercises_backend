export interface IData {
  day: number;
  month: number;
  year: number;
}

enum Months {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
}

export class Data implements IData {
  private _day: number;
  private _month: number;
  private _year: number;
  private monthNames = Months;

  private static privateIsLeapYear = (year: number): boolean => {
    if (year % 4 === 0 && year % 100 !== 0) return true;
    if (year % 400 === 0) return true;
    return false;
  };

  private static validateDay = (day: number, month: number, year: number): boolean => {
    if (month === 2) {
      if (Data.privateIsLeapYear(year)) return day <= 29;
      return day <= 28;
    }
    if (month === 4 || month === 6 || month === 9 || month === 11) return day <= 30;
    return day <= 31;
  };

  private static validateRawData(rawData: string): boolean {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(rawData);
  }

  constructor(rawData: string) {
    const isDataFormatValid = Data.validateRawData(rawData);
    if (!isDataFormatValid) throw new Error('The data must have the format dd/mm/yyyy');

    const [day, month, year] = rawData.split('/').map(Number);
    const isDayValid = Data.validateDay(day, month, year);

    if (!isDayValid) throw new Error('Invalid day');

    this.day = day;
    this.month = month;
    this.year = year;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    const isDayValid = Data.validateDay(value, this.month, this.year);
    if (!isDayValid) throw new Error('Invalid day');
    else this._day = value;
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

  public getMonthName = (): string => this.monthNames[this.month];

  public isLeapYear = (): boolean => Data.privateIsLeapYear(this.year);

  public compare = ({ day, month, year }: Data) => {
    if (this.year === year && this.month === month && this.day === day) return 0;
    if (this.year > year) return 1;
    if (this.year < year) return -1;
    if (this.month > month) return 1;
    if (this.month < month) return -1;
    if (this.day > day) return 1;
    if (this.day < day) return -1;
  };
}
