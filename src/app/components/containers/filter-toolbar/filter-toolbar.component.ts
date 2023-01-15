import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-toolbar',
  templateUrl: './filter-toolbar.component.html',
  styleUrls: ['./filter-toolbar.component.scss'],
})
export class FilterToolbarComponent {
  filterValue = '';
  @Output() inputChangeEmitter = new EventEmitter<string>();

  resetFilterValue() {
    this.filterValue = '';
  }

  onInputChange() {
    this.inputChangeEmitter.emit(this.filterValue);
  }
}
