/* eslint-disable class-methods-use-this */
import Plant from '../database/models/PlantModel';
import { IPlant } from '../interfaces/IPlant';
import { IService } from '../interfaces/IService';

export default class PlantService implements IService<IPlant> {
  private model = Plant;

  public getAll = async (): Promise<IPlant[]> => this.model.findAll({ raw: true });

  public getOne = async (id: IPlant['id']): Promise<IPlant | null> =>
    this.model.findByPk(id, { raw: true });

  public create = async (plant: IPlant): Promise<IPlant> => {
    const { id } = await this.model.create(plant, { raw: true });
    return { id, ...plant };
  };

  public getSunnyById = async (id: IPlant['id']): Promise<IPlant | null> => {
    const plant = await this.model.scope('sunny').findByPk(id, { raw: true });
    return plant;
  };

  public update = async (plant: IPlant, id: number): Promise<IPlant | string> => {
    const [affectedCount] = await this.model.update(plant, { where: { id } });

    if (affectedCount === 0) return 'Plant not found';

    const updatedPlant = await this.model.findByPk(id, { raw: true });
    return updatedPlant as IPlant;
  };

  public delete = async (id: IPlant['id']): Promise<number | string> => {
    const removedPlant = await this.model.destroy({ where: { id } });

    if (!removedPlant) return 'Plant not found';
    return removedPlant;
  };
}
