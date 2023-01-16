import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  DocumentData,
  DocumentReference,
  Firestore,
  getDocs,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { AddressItem } from '../models';

interface FormValues {
  firstName: string;
  lastName: string;
  telephoneNumber?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FireStoreDbService {
  private collectionName = '/addressbook';
  private collectionItem?: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.collectionItem = collection(firestore, this.collectionName);
  }

  /**
   * retrieves the Address items from FireStore
   */
  getAddressItems() {
    const addressItems: AddressItem[] = [];
    if (this.collectionItem) {
      const collectionQuery = query(this.collectionItem);
      getDocs(collectionQuery).then(
        (querySnapshot: QuerySnapshot<DocumentData>) => {
          querySnapshot.forEach((doc) => {
            addressItems.push(this.mapDocumentToAddressItem(doc));
          });
        }
      );
    }
    return addressItems;
  }

  /**
   * sends the new Address item to Firestore
   * @param formValues - the form values
   * @returns a promise
   */
  addAddressItem(formValues: FormValues) {
    if (this.collectionItem) {
      return addDoc(this.collectionItem, {
        first_name: formValues.firstName,
        last_name: formValues.lastName,
        phone_number: formValues.telephoneNumber,
      }).catch((err) => console.log(err));
    } else {
      return new Promise((success) => {
        success([]);
      });
    }
  }

  /**
   * Deletes an Address item from FireStore
   * @param ref - the document Reference
   * @returns a promise
   */
  deleteAddressItem(ref: DocumentReference) {
    return deleteDoc(ref);
  }

  /**
   * Maps the document using the AddressItem interface
   * @param doc - the document snapshot
   * @returns the address item
   */
  mapDocumentToAddressItem(doc: QueryDocumentSnapshot<DocumentData>) {
    return {
      ref: doc.ref,
      first_name: doc.data()['first_name'],
      last_name: doc.data()['last_name'],
      phone_number: doc.data()['phone_number'],
    } as AddressItem;
  }
}
