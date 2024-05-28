export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  stock: number;
  img: string[];
  onsale: boolean;
  supplier: string;
  colors: string[];
  tax: string;
}
