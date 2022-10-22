import ILens from "../../interfaces/ILens";

export const lensMock: ILens = {
  degree: 2.5,
  antiGlare: true,
  blueLightFilter: true,
}

export const lensMockWithId: ILens & { _id: string } = {
  _id: '5f9f1b9b9b9b9b9b9b9b9b9b',
  ...lensMock,
};

export const updatedLensMock: ILens & { _id: string } = {
  _id: '5f9f1b9b9b9b9b9b9b9b9b9b',
  degree: 3.5,
  antiGlare: false,
  blueLightFilter: false,
};

export const lensMockWithIdArray: typeof lensMockWithId[] = [
  {
    _id: '5f9f1b9b9b9b9b9b9b9b9b9b',
    ...lensMock,
  },
  {
    _id: '5f9f1b9b9b9b9b9b9b9b9b9c',
    ...lensMock,
  },
];

