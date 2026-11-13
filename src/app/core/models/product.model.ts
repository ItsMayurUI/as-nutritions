
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  sizes: string[];
  stock: number;
  badge?: string;
  featured: boolean;
}
