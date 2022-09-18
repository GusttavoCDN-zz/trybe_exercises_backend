import { Character } from './Character';

export class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'am ${this._name}. I attack at close range`);
  }

  specialMove(): void {
    console.log(this._specialMove);
  }
}
