import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IBook from '../interfaces/book';
import BookService from '../services/BookService';

class BookController {
  private bookService = new BookService();

  public getAll = async (req: Request, res: Response): Promise<void> => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json({ books });
  };

  public getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const book = await this.bookService.getById(Number(id));
    res.status(StatusCodes.OK).json({ book });
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const bookBody = req.body as IBook;

    const book = await this.bookService.create(bookBody);
    res.status(StatusCodes.CREATED).json({ book });
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const bookBody = req.body as IBook;

    const book = await this.bookService.update(Number(id), bookBody);
    res.status(StatusCodes.OK).json({ book });
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const book = await this.bookService.delete(Number(id));
    res.status(StatusCodes.NO_CONTENT).json({ book });
  }
}

export default BookController;
