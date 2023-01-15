import { Component, OnInit } from '@angular/core';
import { collection, collectionData, DocumentData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Address Book Demo';
  addressItems: Observable<DocumentData[]>;

  constructor(private firestore: Firestore) {
    const collectionItem = collection(firestore, '/addressbook');
    this.addressItems = collectionData(collectionItem);
  }

  ngOnInit() {}
}
