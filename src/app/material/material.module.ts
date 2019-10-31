import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]

})
export class MaterialModule { }
