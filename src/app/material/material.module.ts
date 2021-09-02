import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgModule } from '@angular/core';


const Material = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
