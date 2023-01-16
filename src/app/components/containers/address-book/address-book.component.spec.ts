import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { FireStoreDbService } from 'src/app/core/services/firestore-db.service';
import { MaterialUiModule } from 'src/app/utils/material-ui/material-ui.module';
import { AddressCardComponent } from '../../ui/address-card/address-card.component';
import { IconButtonComponent } from '../../ui/icon-button/icon-button.component';
import { FilterToolbarComponent } from '../filter-toolbar/filter-toolbar.component';

import { AddressBookComponent } from './address-book.component';

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of(true),
    };
  }
}

const matDialog = new MatDialogMock();

export class FirestoreDBServiceMock {
  getAddressItems() {
    return [
      {
        first_name: 'Alessia',
        last_name: 'Amitrano',
        phone_number: '07710984813',
      },
      { first_name: 'Albert', last_name: 'Einstein', phone_number: '' },
    ];
  }
}

const firestoreDB = new FirestoreDBServiceMock();

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialUiModule,
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MatDialog, useValue: matDialog },
        { provide: FireStoreDbService, useValue: firestoreDB },
      ],
      declarations: [
        AddressBookComponent,
        AddressCardComponent,
        IconButtonComponent,
        FilterToolbarComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should successfully load the address items', () => {
    expect(component.addressItems.length).toBeGreaterThanOrEqual(2);
  });

  it('should display address cards', () => {
    const cards = fixture.nativeElement.querySelector('app-address-card');
    expect(cards).toBeTruthy();
  });

  it('should display as many address cards as there are addresses', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-address-card');
    expect(cards.length).toBe(component.addressItems.length);
  });

  it('should correctly filter cards', () => {
    component.filterAddresses('Einstein');
    expect(component.filteredItems[0].last_name).toBe('Einstein');
  });

  it('should correctly reset the filter', () => {
    component.filterAddresses('Alessia');
    component.resetFilter();
    expect(component.filteredItems.length).toBe(component.addressItems.length);
  });

  it('should correctly sort by first name', () => {
    component.sortByFirst();
    expect(component.filteredItems[0].first_name).toBe('Albert');
  });
});
