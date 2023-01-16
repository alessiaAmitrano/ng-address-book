import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { AddressItem } from 'src/app/core/models';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent {
@Input() addressItem! : AddressItem;
@Output() onAddressEdit = new EventEmitter();
@Output() onAddressDelete = new EventEmitter<DocumentReference>();

}
