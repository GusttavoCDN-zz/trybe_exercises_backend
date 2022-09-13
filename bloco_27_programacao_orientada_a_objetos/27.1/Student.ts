class Student {
  private _enrollment: string;
  private _name: string;
  private _exameGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(enrollment: string, name: string, exames: number[], works: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.exameGrades = exames;
    this.worksGrades = works;
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(value: number[]) {
    if (value.length === 2) this._worksGrades = value;
    else throw new Error('The student must have at least 2 works');
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
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
