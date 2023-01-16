import { DocumentReference } from '@angular/fire/firestore';

export interface AddressItem {
  ref?: DocumentReference;
  first_name: string;
  last_name: string;
  phone_number?: string;
}
