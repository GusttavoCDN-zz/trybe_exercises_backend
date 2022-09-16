import Person from './Person';

class Student extends Person {
  private static instanceCounter = 0;

  public static getInstanceCounter(): number {
    return Student.instanceCounter;
  }

  private _enrollment: number;
  private _exameGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, exames: number[], works: number[], birthDate: Date) {
    super(name, birthDate);
    this._enrollment = ++Student.instanceCounter;
    this.exameGrades = exames;
    this.worksGrades = works;
  }

  public get enrollment(): number {
    return this._enrollment;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(value: number[]) {
    if (value.length === 2) this._worksGrades = value;
    else throw new Error('The student must have at least 2 works');
  }

  public get exameGrades(): number[] {
    return this._exameGrades;
  }

  public set exameGrades(value: number[]) {
    if (value.length === 4) this._exameGrades = value;
    else throw new Error('The student must have at least 4 exames');
  }

  public sumGrades = (): number => {
    const sumWorks = this.worksGrades.reduce((acc, curr) => acc + curr);
    const sumExames = this.exameGrades.reduce((acc, curr) => acc + curr);
    return sumWorks + sumExames;
  };

  public averageGrades = (): number => {
    const totalGrade = this.sumGrades();
    const grades = this.worksGrades.length + this.exameGrades.length;
    return (totalGrade / grades).toFixed(2) as unknown as number;
  };
}

export default Student;
