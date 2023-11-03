import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookCardComponent } from './book_card.component';

@NgModule({
  declarations: [BookCardComponent],
  imports: [CommonModule],
  providers: [],
  exports: [BookCardComponent],
})
export class BookCardModule {}
