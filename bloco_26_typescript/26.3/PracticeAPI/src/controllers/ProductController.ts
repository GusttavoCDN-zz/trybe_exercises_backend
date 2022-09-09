import ProductService from '../services/ProductService';
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { Op } from 'sequelize';

class ProductController {
  private productService = new ProductService();

  public getAll = async (req: Request, res: Response): Promise<void> => {
    const { expirated } = req.query;
    const products = await this.productService.getAll(expirated as string);
    res.status(StatusCodes.OK).json(products);
  };

  public getAllByPrice = async (req: Request, res: Response): Promise<void> => {
    const { start_price, end_price } = req.query;
    const products = await this.productService.getAllByPrice(
      start_price as unknown as number,
      end_price as unknown as number
    );

    res.status(StatusCodes.OK).json(products);
  };

  public getOne = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const product = await this.productService.getOne(Number(id));
    res.status(StatusCodes.OK).json(product);
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const product = req.body;
    const createdProduct = await this.productService.create(product);
    res.status(StatusCodes.CREATED).json(createdProduct);
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const product = req.body;
    const updatedProduct = await this.productService.update(Number(id), product);
    res.status(StatusCodes.OK).json(updatedProduct);
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await this.productService.delete(Number(id));
    res.status(StatusCodes.NO_CONTENT).json({ message: 'Product deleted' });
  };
}

export default new ProductController();
