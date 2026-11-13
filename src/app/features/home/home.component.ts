
import { Component } from '@angular/core';

import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    BenefitsComponent,
    CategorySectionComponent,
    FeaturedProductsComponent,
    AboutSectionComponent,
    NewsletterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
