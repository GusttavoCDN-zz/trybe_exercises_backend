import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import PostService from '../services/PostService';

class PostController {
  private postService = new PostService();

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const posts = await this.postService.getAll();
    res.status(StatusCodes.OK).json(posts);
  };

  public getOne = async (req: Request, res: Response): Promise<void> => {
    const post = await this.postService.getOne(Number(req.params.id));
    res.status(StatusCodes.OK).json(post);
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    await this.postService.create(req.body);
    res.status(StatusCodes.CREATED).json({ message: 'Post created' });
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updatedPost = await this.postService.update(Number(id), req.body);
    res.status(StatusCodes.OK).json(updatedPost);
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    await this.postService.delete(Number(req.params.id));
    res.status(StatusCodes.OK).json({ message: 'Post deleted' });
  };
}

export default new PostController();
