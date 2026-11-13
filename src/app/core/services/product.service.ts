
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 'as-whey-001',
      name: 'Whey Protein',
      category: 'Whey Protein',
      description: 'Product description will be updated after client confirmation.',
      price: 999,
      image: 'https://placehold.co/600x600/eeeeee/222222?text=AS+Whey',
      images: [
        'https://placehold.co/600x600/eeeeee/222222?text=AS+Whey'
      ],
      sizes: ['1 kg', '2 kg'],
      stock: 10,
      badge: 'FEATURED',
      featured: true
    },
    {
      id: 'as-gainer-001',
      name: 'Mass Gainer',
      category: 'Mass Gainer',
      description: 'Product description will be updated after client confirmation.',
      price: 0,
      image: 'https://placehold.co/600x600/eeeeee/222222?text=AS+Gainer',
      images: [
        'https://placehold.co/600x600/eeeeee/222222?text=AS+Gainer'
      ],
      sizes: ['1 kg', '3 kg'],
      stock: 0,
      featured: false
    },
    {
      id: 'as-creatine-001',
      name: 'Creatine',
      category: 'Creatine',
      description: 'Product description will be updated after client confirmation.',
      price: 0,
      image: 'https://placehold.co/600x600/eeeeee/222222?text=AS+Creatine',
      images: [
        'https://placehold.co/600x600/eeeeee/222222?text=AS+Creatine'
      ],
      sizes: ['100 g', '250 g'],
      stock: 0,
      badge: 'POPULAR',
      featured: true
    },
    {
      id: 'as-preworkout-001',
      name: 'Pre Workout',
      category: 'Pre Workout',
      description: 'Product description will be updated after client confirmation.',
      price: 0,
      image: 'https://placehold.co/600x600/eeeeee/222222?text=AS+Preworkout',
      images: [
        'https://placehold.co/600x600/eeeeee/222222?text=AS+Preworkout'
      ],
      sizes: ['100 g', '200 g'],
      stock: 0,
      featured: false
    }
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getFeaturedProducts(): Product[] {
    return this.products.filter(product => product.featured);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(
      product => product.category === category
    );
  }
}
