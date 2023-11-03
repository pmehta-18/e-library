import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre_card.component.html',
  styleUrls: ['./genre_card.component.css'],
})
export class GenreCardComponent {
  @Input() title!: string;
  @Input() iconPath!: string;
  @Input() navigationPath!: string;
  @Input() key!: string;
}
