// ./src/tests/mocks/frameMock.ts

import IFrame from '../../interfaces/IFrame';

const frameMock: IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe',
};

const frameMockWithId: IFrame & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe',
};

const frameArrayMock: typeof frameMockWithId[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    material: 'Ouro',
    color: 'Daquele naipe',
  },
  {
    _id: '62cf1fc6498565d94eba52ce',
    material: 'Prata',
    color: 'Daquele naipe',
  },
  {
    _id: '62cf1fc6498565d94eba52cf',
    material: 'Bronze',
    color: 'Daquele naipe',
  },
];

const frameUpdatedMock: typeof frameMockWithId = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Bronze',
  color: 'Preto',
};

export { frameMock, frameMockWithId, frameArrayMock, frameUpdatedMock };
