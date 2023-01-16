import { Component } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-address-modal',
  templateUrl: './add-address-modal.component.html',
  styleUrls: ['./add-address-modal.component.scss'],
})
export class AddAddressModalComponent {
  collectionItem?: CollectionReference<DocumentData>;
  firstName = new FormControl();
  lastName = new FormControl();
  telephoneNumber = new FormControl();

  constructor(
    private firestore: Firestore,
    public dialogRef: MatDialogRef<AddAddressModalComponent>
  ) {
    this.collectionItem = collection(firestore, '/addressbook');
  }

  onFormSubmit() {
    console.log('form', [
      this.firstName.value,
      this.lastName.value,
      this.telephoneNumber.value,
    ]);
    if (this.collectionItem) {
      this.addNewAddressItem();
    }
  }

  addNewAddressItem() {
    if (this.collectionItem) {
      addDoc(this.collectionItem, {
        first_name: this.firstName.value,
        last_name: this.lastName.value,
        phone_number: this.telephoneNumber.value,
      }).then(() => this.dialogRef.close());
    }
  }
}
