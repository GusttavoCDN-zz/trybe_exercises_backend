import { Request, Response } from 'express';
import { BookDTO } from '../entities/IBook';
import { IService } from '../services/IService';

export default class BooksController {
  constructor(private service: IService<BookDTO>) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const books = await this.service.getAll();
    return res.status(200).json(books);
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const book = await this.service.getById(id);
    return res.status(200).json(book);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { author, publisher, title, pages } = req.body as BookDTO;
    const createdBook = await this.service.create({ author, publisher, title, pages });

    return res.status(201).json(createdBook);
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { author, publisher, title, pages } = req.body as BookDTO;
    const updatedBook = await this.service.update(id, {
      author,
      publisher,
      title,
      pages,
    });

    return res.status(200).json(updatedBook);
  };

  public delete = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await this.service.delete(id);

    return res.status(204).json({ message: `Book ${id} deleted` });
  };
}
