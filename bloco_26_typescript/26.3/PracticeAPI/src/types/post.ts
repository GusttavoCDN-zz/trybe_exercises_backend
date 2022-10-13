export interface IPost {
  id?: number;
  title: string;
  author: string;
  category: string;
  publicationDate: Date;
}

export type AddPost = Omit<IPost, 'id'>;
export type UpdatePost = Partial<Omit<IPost, 'id'>>;
