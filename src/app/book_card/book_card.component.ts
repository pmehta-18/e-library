import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book_card.component.html',
  styleUrls: ['./book_card.component.css'],
})
export class BookCardComponent {
  @Input() title!: string;
  @Input() coverImage!: string;
  @Input() author!: string;
  @Input() link!: string;

  handleCardClick() {
    window.alert('No viewable version available');
  }
}
