import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
})
export class SearchboxComponent {
  @Output() onSearchChange = new EventEmitter<string | null>();
  formGroup = new FormGroup({
    searchControl: new FormControl(''),
  });

  constructor() {
    this.formGroup.get('searchControl')?.valueChanges.subscribe((value) => {
      this.onSearchChange.emit(value);
    });
  }

  handleClearSearch() {
    this.formGroup.get('searchControl')?.reset();
  }
}
