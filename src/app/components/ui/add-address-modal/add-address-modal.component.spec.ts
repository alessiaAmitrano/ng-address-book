import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { AddAddressModalComponent } from './add-address-modal.component';

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of(true),
    };
  }
}

const matDialog = new MatDialogMock();

describe('AddAddressModalComponent', () => {
  let component: AddAddressModalComponent;
  let fixture: ComponentFixture<AddAddressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: MatDialog, useValue: matDialog }],
      declarations: [AddAddressModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
