export type PlantSize = 'small' | 'medium' | 'large';

export interface IPlant {
  id?: number;
  breed: string;
  needsSun: boolean;
  origin: string;
  size: PlantSize;
}
