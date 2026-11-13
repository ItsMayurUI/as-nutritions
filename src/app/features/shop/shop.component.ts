
import { Component } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  badge: string;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  searchTerm = '';
  selectedCategory = 'All';
  sortBy = 'default';

  categories = [
    'All',
    'Whey Protein',
    'Mass Gainer',
    'Creatine',
    'Pre Workout'
  ];

  products: Product[] = [
    {
      id: 'as-whey-001',
      name: 'Whey Protein',
      category: 'Whey Protein',
      price: 0,
      image: 'https://placehold.co/600x600/eeeeee/222222?text=AS+Whey',
      badge: 'FEATURED'
    },
    {
      id: 'as-gainer-001',
      name: 'Mass Gainer',
      category: 'Mass Gainer',
      price: 0,
      image: 'https://placehold.co/600x600/eeeeee/222222?text=AS+Gainer',
      badge: ''
    },
    {
      id: 'as-creatine-001',
      name: 'Creatine',
      category: 'Creatine',
      price: 0,
      image: 'https://placehold.co/600x600/eeeeee/222222?text=AS+Creatine',
      badge: 'POPULAR'
    },
    {
      id: 'as-preworkout-001',
      name: 'Pre Workout',
      category: 'Pre Workout',
      price: 0,
      image: 'https://placehold.co/600x600/eeeeee/222222?text=AS+Preworkout',
      badge: ''
    }
  ];

  get filteredProducts(): Product[] {
    let result = this.products.filter(product => {
      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (this.sortBy === 'low-high') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'high-low') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  onSort(event: Event): void {
    this.sortBy = (event.target as HTMLSelectElement).value;
  }
}
