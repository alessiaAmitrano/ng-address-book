import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressItem } from 'src/app/core/models';

@Component({
  selector: 'app-address-book-container',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
})
export class AddressBookComponent implements OnInit {
  @Input() addressItems$?: Observable<any[]>;
  addressItems: AddressItem[] = [];
  filteredItems: AddressItem[] = [];

  ngOnInit() {
    this.addressItems$?.subscribe((value) => {
      this.addressItems = value;
      this.filteredItems = this.addressItems;
    });
  }

  filterAddresses(filteringValue: string) {
    this.filteredItems = this.addressItems.filter((address) =>
      this.containsSubstring(address, filteringValue)
    );
    console.log('filter', [filteringValue, this.filteredItems]);
  }

  containsSubstring(address: AddressItem, filteringValue: string) {
    return (
      address.first_name.toLowerCase().includes(filteringValue.toLowerCase()) ||
      address.last_name.toLowerCase().includes(filteringValue.toLowerCase()) ||
      address.phone_number?.toLowerCase().includes(filteringValue.toLowerCase())
    );
  }
}
