import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

export const MATERIAL_COMPONENTS = [
MatCardModule,
MatButtonModule,
MatDialogModule,
MatToolbarModule,
MatIconModule,
MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    ...MATERIAL_COMPONENTS
  ],
  exports: [...MATERIAL_COMPONENTS]
})
export class MaterialUiModule { }
