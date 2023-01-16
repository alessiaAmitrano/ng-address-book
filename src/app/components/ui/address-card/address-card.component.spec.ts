import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialUiModule } from 'src/app/utils/material-ui/material-ui.module';
import { IconButtonComponent } from '../icon-button/icon-button.component';

import { AddressCardComponent } from './address-card.component';

describe('AddressCardComponent', () => {
  let component: AddressCardComponent;
  let fixture: ComponentFixture<AddressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialUiModule],
      declarations: [IconButtonComponent, AddressCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressCardComponent);
    component = fixture.componentInstance;
    component.addressItem = {
      first_name: 'Alessia',
      last_name: 'Amitrano',
      phone_number: '07710984813',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
