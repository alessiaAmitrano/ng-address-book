import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-toolbar',
  templateUrl: './filter-toolbar.component.html',
  styleUrls: ['./filter-toolbar.component.scss'],
})
export class FilterToolbarComponent {
  filterValue= new FormControl('');
  @Output() inputChangeEmitter = new EventEmitter<string>();

  resetFilterValue() {
    this.filterValue.setValue('');
  }

  onInputChange() {
    if(this.filterValue.value) {
      this.inputChangeEmitter.emit(this.filterValue.value);
    }
  }

}
