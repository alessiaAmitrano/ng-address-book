import { from } from 'rxjs';
import { AddressItem } from './core/models';

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

// describe('AppComponent', () => {
// beforeEach(async () => {
//   await TestBed.configureTestingModule({
//     imports: [RouterTestingModule, MaterialUiModule],
//     declarations: [HeaderComponent, AddressBookComponent, AppComponent],
//     providers: [{ provide: Firestore, useValue: angularFirestoreStub }],
//   }).compileComponents();
// });
// it('should create the app', () => {
//   const fixture = TestBed.createComponent(AppComponent);
//   const app = fixture.componentInstance;
//   expect(app).toBeTruthy();
// });
// it(`should have as title 'Address Book Demo'`, () => {
//   const fixture = TestBed.createComponent(AppComponent);
//   const app = fixture.componentInstance;
//   expect(app.title).toEqual('Address Book Demo');
// });
// it('should render title', () => {
//   const fixture = TestBed.createComponent(AppComponent);
//   fixture.detectChanges();
//   const compiled = fixture.nativeElement as HTMLElement;
//   expect(compiled.querySelector('.content span')?.textContent).toContain(
//     'ng-address-book app is running!'
//   );
// });
// });
