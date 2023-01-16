import { Injectable } from '@angular/core';
import {
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

@Injectable({
  providedIn: 'root',
})
export class FireStoreDbService {
  private collectionName = '/addressbook';
  private collectionItem?: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.collectionItem = collection(firestore, this.collectionName);
  }

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

  deleteAddressItem(ref: DocumentReference) {
    return deleteDoc(ref);
  }

  mapDocumentToAddressItem(doc: QueryDocumentSnapshot<DocumentData>) {
    return {
      ref: doc.ref,
      first_name: doc.data()['first_name'],
      last_name: doc.data()['last_name'],
      phone_number: doc.data()['phone_number'],
    };
  }
}
