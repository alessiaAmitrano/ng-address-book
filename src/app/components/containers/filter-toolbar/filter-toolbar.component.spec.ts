import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from 'src/app/utils/material-ui/material-ui.module';
import { IconButtonComponent } from '../../ui/icon-button/icon-button.component';

import { FilterToolbarComponent } from './filter-toolbar.component';

describe('FilterToolbarComponent', () => {
  let component: FilterToolbarComponent;
  let fixture: ComponentFixture<FilterToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialUiModule,
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
      ],
      declarations: [MatToolbar, IconButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
