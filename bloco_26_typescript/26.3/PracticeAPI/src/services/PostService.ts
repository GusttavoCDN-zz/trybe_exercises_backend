import { StatusCodes } from 'http-status-codes';
import throwCustomError from '../../utils/throwCustomError';
import Post from '../database/models/Post';
import { AddPost, IPost, UpdatePost } from '../types/post';
import Joi from 'joi';

class PostService {
  public getAll = async (): Promise<Post[]> => {
    const posts = await Post.findAll({ raw: true });
    return posts;
  };

  public getOne = async (id: number): Promise<Post> => {
    const post = await Post.findByPk(id, { raw: true });
    if (!post) return throwCustomError(StatusCodes.NOT_FOUND, 'Post not found');

    return post;
  };

  public create = async (post: AddPost): Promise<Post> => {
    const { error } = this.validatePost(post);
    if (error) return throwCustomError(StatusCodes.BAD_REQUEST, error.message);

    const createdPost = await Post.create(post, { raw: true });
    return createdPost;
  };

  public update = async (id: IPost['id'], post: UpdatePost): Promise<Post> => {
    if (Object.keys(post).length === 0)
      return throwCustomError(StatusCodes.BAD_REQUEST, 'No data to update');

    if (await !this.exists({ id }))
      return throwCustomError(StatusCodes.NOT_FOUND, 'Post not found');

    await Post.update(post, { where: { id } });
    const updatedPost = (await Post.findByPk(id, { raw: true })) as Post;
    return updatedPost;
  };

  public delete = async (id: IPost['id']): Promise<void> => {
    if (await !this.exists({ id }))
      return throwCustomError(StatusCodes.NOT_FOUND, 'Post not found');

    await Post.destroy({ where: { id } });
  };

  private validatePost = (post: AddPost) => {
    const schema = Joi.object({
      title: Joi.string().min(3).max(30).required(),
      author: Joi.string().min(3).max(30).required(),
      category: Joi.string().min(3).max(30).required(),
      publicationDate: Joi.date().required(),
    });

    return schema.validate(post);
  };

  private exists = async (options = {}): Promise<boolean> => {
    const post = await Post.findOne({ where: options });
    return !!post;
  };
}

export default PostService;
