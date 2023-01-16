import { Component } from '@angular/core';
import { addDoc, collection, CollectionReference, DocumentData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-address-modal',
  templateUrl: './add-address-modal.component.html',
  styleUrls: ['./add-address-modal.component.scss']
})
export class AddAddressModalComponent {
  collectionItem?: CollectionReference<DocumentData>;

 constructor(private firestore: Firestore) {
    this.collectionItem = collection(firestore, '/addressbook');
 }

 addNewAddressItem() {
  if(this.collectionItem) {
    addDoc(this.collectionItem, {
      first_name: 'Danny',
      last_name: 'De Vito',
      phone_number: '07710984813'
    })
  }
  }

  deleteAddressItem() {
    // deleteDoc(
    //   this.collectionItem
    // );
  }
}
