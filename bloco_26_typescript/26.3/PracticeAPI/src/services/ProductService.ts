import throwCustomError from '../../utils/throwCustomError';
import Product from '../database/models/Product';
import { StatusCodes } from 'http-status-codes';
import { AddProduct, IProduct, UpdateProduct } from '../types/product';
import Joi from 'joi';
import { Op } from 'sequelize';

class ProductService {
  public getAll = async (expirated?: string): Promise<Product[]> => {
    const products = expirated
      ? await Product.findAll({ raw: true, order: [['price', 'ASC']] })
      : await Product.scope('withoutExpirated').findAll({
          raw: true,
          order: [['price', 'ASC']],
        });

    return products;
  };

  public getAllByPrice = async (
    startPrice: number,
    endPrice: number
  ): Promise<Product[]> => {
    let price: { [key: symbol]: number[] } | null = null;
    if (startPrice) {
      price = {};
      price[Op.gt] = [startPrice];
      if (endPrice) price[Op.lt] = [endPrice];
    }

    const products = await Product.findAll({
      raw: true,
      where: { price },
      order: [['price', 'ASC']],
    });

    return products;
  };

  public getOne = async (id: number): Promise<Product> => {
    const product = await Product.findByPk(id, { raw: true });
    if (!product) return throwCustomError(StatusCodes.NOT_FOUND, 'Product not found');

    return product;
  };

  public create = async (product: AddProduct): Promise<Product> => {
    const { error } = this.validateProduct(product);
    if (error) return throwCustomError(StatusCodes.BAD_REQUEST, error.message);

    const createdProduct = await Product.create(product, { raw: true });
    return createdProduct;
  };

  public update = async (
    id: IProduct['id'],
    product: UpdateProduct
  ): Promise<Product> => {
    if (Object.keys(product).length === 0)
      return throwCustomError(StatusCodes.BAD_REQUEST, 'No data to update');

    if (await !this.exists({ id }))
      return throwCustomError(StatusCodes.NOT_FOUND, 'Product not found');

    await Product.update(product, { where: { id } });
    const updatedProduct = (await Product.findByPk(id, { raw: true })) as Product;
    return updatedProduct;
  };

  public delete = async (id: IProduct['id']): Promise<void> => {
    if (await !this.exists({ id }))
      return throwCustomError(StatusCodes.NOT_FOUND, 'Product not found');

    await Product.destroy({ where: { id } });
  };

  private validateProduct = (product: AddProduct) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      price: Joi.number().min(0).required(),
      expirated: Joi.date().required(),
    });

    return schema.validate(product);
  };

  private exists = async (options = {}): Promise<boolean> => {
    const product = await Product.findOne({ where: options });
    return !!product;
  };
}

export default ProductService;
