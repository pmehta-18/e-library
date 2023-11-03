import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SearchboxComponent } from './searchbox.component';

@NgModule({
  declarations: [SearchboxComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [],
  exports: [SearchboxComponent],
})
export class SearchboxModule {}
