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
    this.addressItems?.subscribe((value) => (this.filteredItems = value));
  }

  filterAddresses(filteringValue: string) {
    const filteringResult = this.filteredItems.filter((address) => {
      if (
        address.first_name.includes(filteringValue) ||
        address.last_name.includes(filteringValue) ||
        address.phone_number?.includes(filteringValue)
      ) {
        return address;
      } else {
        return;
      }
    });
    console.log('filter', [filteringValue, filteringResult]);
  }
}
