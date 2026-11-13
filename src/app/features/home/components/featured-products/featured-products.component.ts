
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  badge: string;
}

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {

  products: Product[] = [
    {
      id: 'pfn-whey-001',
      name: 'Whey Protein',
      category: 'Whey Protein',
      price: 'Price coming soon',
      image: 'https://placehold.co/600x600/eeeeee/222222?text=PFN+Whey',
      badge: 'FEATURED'
    },
    {
      id: 'pfn-gainer-001',
      name: 'Mass Gainer',
      category: 'Mass Gainer',
      price: 'Price coming soon',
      image: 'https://placehold.co/600x600/eeeeee/222222?text=PFN+Gainer',
      badge: ''
    },
    {
      id: 'pfn-creatine-001',
      name: 'Creatine',
      category: 'Creatine',
      price: 'Price coming soon',
      image: 'https://placehold.co/600x600/eeeeee/222222?text=PFN+Creatine',
      badge: 'POPULAR'
    },
    {
      id: 'pfn-preworkout-001',
      name: 'Pre Workout',
      category: 'Pre Workout',
      price: 'Price coming soon',
      image: 'https://placehold.co/600x600/eeeeee/222222?text=PFN+Preworkout',
      badge: ''
    }
  ];

}
