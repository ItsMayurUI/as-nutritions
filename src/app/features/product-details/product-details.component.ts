
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  selectedImage = '';
  selectedSize = '';
  quantity = 1;
  cartMessage = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.product = this.productService.getProductById(id);

        if (this.product) {
          this.selectedImage = this.product.image;
          this.selectedSize = this.product.sizes[0] ?? '';
          this.quantity = 1;
          this.cartMessage = '';
        }
      }
    });
  }

  changeImage(image: string): void {
    this.selectedImage = image;
  }

  changeQuantity(value: number): void {
    this.quantity = Math.max(1, this.quantity + value);
  }

  addToCart(): void {
    if (!this.product) return;

    if (this.product.price <= 0 || this.product.stock <= 0) {
      this.cartMessage = 'This product is currently unavailable.';
      return;
    }

    this.cartService.addToCart(
      this.product,
      this.selectedSize,
      this.quantity
    );

    this.cartMessage = 'Product added to cart successfully!';
  }
}
