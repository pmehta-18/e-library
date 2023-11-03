import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GenreCardComponent } from './genre_card.component';

@NgModule({
  declarations: [GenreCardComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [GenreCardComponent],
})
export class GenreCardModule {}
