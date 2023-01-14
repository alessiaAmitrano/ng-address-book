import { Component, Input } from '@angular/core';
import { AddressItem } from 'src/app/core/models';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent {

@Input() addressItem : AddressItem = {full_name: 'Alessia Amitrano', phone_number: '07710984813'};

}
