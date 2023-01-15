import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


export const MATERIAL_COMPONENTS = [
MatCardModule,
MatButtonModule,
MatToolbarModule,
MatIconModule
]


@NgModule({
  declarations: [],
  imports: [
    ...MATERIAL_COMPONENTS
  ],
  exports: [...MATERIAL_COMPONENTS]
})
export class MaterialUiModule { }
