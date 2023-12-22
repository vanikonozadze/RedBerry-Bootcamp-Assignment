import { Category } from './categorie.model';

export interface Blog {
  data: any;
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  publish_date: string;
  categories: Category[];
  email: string;
}
