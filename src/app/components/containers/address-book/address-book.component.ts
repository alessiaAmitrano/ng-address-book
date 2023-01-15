import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressItem } from 'src/app/core/models';

@Component({
  selector: 'app-address-book-container',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
})
export class AddressBookComponent implements OnInit {
  @Input() addressItems?: Observable<any[]>;
  filteredItems: AddressItem[] = [];

  ngOnInit() {
    this.addressItems?.subscribe(value => this.filteredItems = value);
  }
}
