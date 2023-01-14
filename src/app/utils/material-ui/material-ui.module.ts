import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


export const MATERIAL_COMPONENTS = [
MatCardModule,
MatButtonModule
]


@NgModule({
  declarations: [],
  imports: [
    ...MATERIAL_COMPONENTS
  ],
  exports: [...MATERIAL_COMPONENTS]
})
export class MaterialUiModule { }
