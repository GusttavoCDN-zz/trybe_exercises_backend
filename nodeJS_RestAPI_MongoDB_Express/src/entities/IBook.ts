export interface BookDTO {
  title: string;
  publisher: string;
  author: string;
  pages?: number;
}

export interface IBook extends BookDTO {
  id: string;
}
