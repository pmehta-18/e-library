import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SearchboxModule } from './searchbox/searchbox.module';
import { AppRoutesModule } from './routes';
import { HomePageModule } from './home_page/home_page.module';
import { BooksPageModule } from './books_page/books_page.module';
import { GenreCardModule } from './genre_card/genre_card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    SearchboxModule,
    AppRoutesModule,
    HomePageModule,
    BooksPageModule,
    GenreCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
