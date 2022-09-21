import { Character } from './Character';

export class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I attack at long range`);
  }

  specialMove(): void {
    console.log(this._specialMove);
  }
}
