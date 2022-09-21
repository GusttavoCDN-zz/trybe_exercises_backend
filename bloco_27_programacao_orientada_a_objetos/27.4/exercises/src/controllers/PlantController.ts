/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { IPlant } from '../interfaces/IPlant';
import { IService } from '../interfaces/IService';
import PlantService from '../services/PlantService';

export default class PlantController {
  private service: IService<IPlant>;

  constructor(plantService: PlantService) {
    this.service = plantService;
  }

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const plants = await this.service.getAll();
    res.status(200).send(plants);
  };

  public getOne = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const plant = await this.service.getOne(Number(id));
    res.status(200).send(plant);
  };

  public getSunnyById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const plant = await this.service.getSunnyById(Number(id));
    res.status(200).send(plant);
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const plant = await this.service.create(req.body);
    res.status(201).send(plant);
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const plant = await this.service.update(req.body, Number(id));
    res.status(200).send(plant);
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const removedPlant = await this.service.delete(Number(id));
    res.status(200).send({ removedPlant });
  };
}
