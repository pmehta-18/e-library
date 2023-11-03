import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';

import { BooksPageComponent } from './books_page.component';
import { SearchboxModule } from '../searchbox/searchbox.module';
import { BookCardModule } from '../book_card/book_card.module';

@NgModule({
  declarations: [BooksPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    SearchboxModule,
    InfiniteScrollModule,
    HttpClientModule,
    BookCardModule,
  ],
  providers: [],
  exports: [BooksPageComponent],
})
export class BooksPageModule {}
