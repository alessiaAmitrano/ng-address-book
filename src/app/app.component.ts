import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-address-book';
  addressItems: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const collectionItem = collection(firestore, '/addressbook');
    this.addressItems = collectionData(collectionItem);
  }

  ngOnInit() {}
}
