import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-toolbar',
  templateUrl: './filter-toolbar.component.html',
  styleUrls: ['./filter-toolbar.component.scss'],
})
export class FilterToolbarComponent {
  filterValue = '';
  @Output() inputChangeEmitter = new EventEmitter<string>();
  @Output() addNewEmitter = new EventEmitter();
  @Output() resetFilterEmitter = new EventEmitter();
  @Output() sortByFirstEmitter = new EventEmitter();
  @Output() sortByLastEmitter = new EventEmitter();

  resetFilterValue() {
    this.filterValue = '';
    this.resetFilterEmitter.emit();
  }

  onInputChange() {
    this.inputChangeEmitter.emit(this.filterValue);
  }
}
