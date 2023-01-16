import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentReference } from '@firebase/firestore';
import { AddressItem } from 'src/app/core/models';
import { FireStoreDbService } from 'src/app/core/services/firestore-db.service';
import { AddAddressModalComponent } from '../../ui/add-address-modal/add-address-modal.component';

@Component({
  selector: 'app-address-book-container',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
})
export class AddressBookComponent implements OnInit {
  private addressItems: AddressItem[] = [];
  filteredItems: AddressItem[] = [];

  constructor(
    public dialog: MatDialog,
    private firestoreService: FireStoreDbService
  ) {
    this.addressItems = firestoreService.getAddressItems();
  }

  ngOnInit() {
    if (this.addressItems) {
      this.filteredItems = this.addressItems;
    }
  }

  /**
   * deletes the selected item
   * @param ref the Firebase document ref
   */
  deleteAddressItem(ref: DocumentReference) {
    this.firestoreService.deleteAddressItem(ref).then(() => {
      this.addressItems = this.firestoreService.getAddressItems();
      this.filteredItems = this.addressItems;
    });
  }

  /**
   * filters addressItems according to the search input value
   * @param filteringValue
   */
  filterAddresses(filteringValue: string) {
    if (this.addressItems) {
      this.filteredItems = this.addressItems.filter((address) =>
        this.containsSubstring(address, filteringValue)
      );
    }
    console.log('filter', [filteringValue, this.filteredItems]);
  }

  /**
   * checks if the addressItem contains the search string in any property
   * @param address
   * @param filteringValue
   * @returns true if there is a match, otherwise false
   */
  containsSubstring(address: AddressItem, filteringValue: string) {
    return (
      address.first_name.toLowerCase().includes(filteringValue.toLowerCase()) ||
      address.last_name.toLowerCase().includes(filteringValue.toLowerCase()) ||
      address.phone_number?.toLowerCase().includes(filteringValue.toLowerCase())
    );
  }

  /**
   * resets the filtering
   */
  resetFilter() {
    if (this.addressItems) {
      this.filteredItems = this.addressItems;
    }
  }

  /**
   * sorts AddressItems by first name
   */
  sortByFirst() {
    this.filteredItems.sort((a, b) => a.first_name.localeCompare(b.first_name));
  }

  /**
   * sorts AddressItems by last name
   */
  sortByLast() {
    this.filteredItems.sort((a, b) => a.last_name.localeCompare(b.last_name));
  }

  /**
   * opens the modal to add a new AddressItem
   */
  openAddNewDialog() {
    const dialogRef = this.dialog.open(AddAddressModalComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.addressItems = this.firestoreService.getAddressItems();
      this.filteredItems = this.addressItems;
    });
  }
}
