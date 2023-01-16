import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FireStoreDbService } from 'src/app/core/services/firestore-db.service';

@Component({
  selector: 'app-add-address-modal',
  templateUrl: './add-address-modal.component.html',
  styleUrls: ['./add-address-modal.component.scss'],
})
export class AddAddressModalComponent {
  firstName = new FormControl();
  lastName = new FormControl();
  telephoneNumber = new FormControl();
  addBtnDisabled = true;

  constructor(
    private firestoreDb: FireStoreDbService,
    public dialogRef: MatDialogRef<AddAddressModalComponent>
  ) {}

  /**
   * sends the new Document to Firestore
   */
  addNewAddressItem() {
    const values = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      telephoneNumber: this.telephoneNumber.value,
    };
    if (values.firstName && values.lastName) {
      this.firestoreDb
        .addAddressItem(values)
        .then(() => this.dialogRef.close());
    }
  }

  onInput() {
    if (
      this.firstName.value &&
      this.firstName.value.length > 0 &&
      this.lastName.value &&
      this.lastName.value.length > 0
    ) {
      this.addBtnDisabled = false;
    } else {
      this.addBtnDisabled = true;
    }
  }
}
