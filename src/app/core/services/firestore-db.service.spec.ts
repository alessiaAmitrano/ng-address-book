import { from } from 'rxjs';
import { AddressItem } from '../models';

const input: AddressItem[] = [
  { first_name: 'Alessia', last_name: 'Amitrano', phone_number: '07710984813' },
  { first_name: 'Albert', last_name: 'Einstein', phone_number: '' },
];

const data = from(input);

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data),
};

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub),
};

// describe('FireStoreDbService', () => {
//   let service: FireStoreDbService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [{ provide: Firestore, useValue: angularFirestoreStub }],
//     });
//     service = TestBed.inject(FireStoreDbService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
