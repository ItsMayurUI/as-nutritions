
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly storageKey = 'as-nutritions-cart';

  private cartItemsSubject = new BehaviorSubject<CartItem[]>(
    this.loadCart()
  );

  cartItems$ = this.cartItemsSubject.asObservable();

  // Get all cart items
  get cartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  // Total quantity of all products
  get totalItems(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  // Count of distinct cart entries
  get uniqueProductsCount(): number {
    return this.cartItems.length;
  }

  // Calculate cart subtotal
  get subtotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  // Add product to cart
  addToCart(product: Product, selectedSize: string, quantity = 1): void {
    if (product.price <= 0 || product.stock <= 0) {
      return;
    }

    const items = [...this.cartItems];

    const existingItem = items.find(
      item =>
        item.product.id === product.id &&
        item.selectedSize === selectedSize
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      items.push({ product, selectedSize, quantity });
    }

    this.updateCart(items);
  }

  // Update product quantity
  updateQuantity(index: number, quantity: number): void {
    if (quantity < 1) return;

    const items = [...this.cartItems];

    if (!items[index]) return;

    items[index] = {
      ...items[index],
      quantity
    };

    this.updateCart(items);
  }

  // Remove individual product
  removeItem(index: number): void {
    const items = this.cartItems.filter((_, i) => i !== index);
    this.updateCart(items);
  }

  // Clear entire cart
  clearCart(): void {
    this.updateCart([]);
  }

  // Update cart and local storage
  private updateCart(items: CartItem[]): void {
    this.cartItemsSubject.next(items);
    this.saveCart(items);
  }

  // Load cart from local storage
  private loadCart(): CartItem[] {
    try {
      if (typeof localStorage === 'undefined') return [];

      const savedCart = localStorage.getItem(this.storageKey);

      return savedCart
        ? JSON.parse(savedCart) as CartItem[]
        : [];

    } catch {
      return [];
    }
  }

  // Save cart to local storage
  private saveCart(items: CartItem[]): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(
          this.storageKey,
          JSON.stringify(items)
        );
      }
    } catch {
      console.warn('Cart could not be saved to local storage.');
    }
  }
}
