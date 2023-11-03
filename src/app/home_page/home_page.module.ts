import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home_page.component';
import { GenreCardModule } from '../genre_card/genre_card.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, GenreCardModule],
  providers: [],
  exports: [HomePageComponent],
})
export class HomePageModule {}
