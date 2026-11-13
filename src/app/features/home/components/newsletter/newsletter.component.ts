
import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {

  email = '';
  message = '';

  onEmailChange(event: Event): void {
    this.email = (event.target as HTMLInputElement).value;
    this.message = '';
  }

  onSubscribe(event: Event): void {
    event.preventDefault();

    if (!this.email.trim()) {
      return;
    }

    this.message = 'Thank you! Newsletter integration is coming soon.';
    this.email = '';
  }

}
