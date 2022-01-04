import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { MatButtonModule } from '@angular/material/button';
 import { MatCardModule } from '@angular/material/card';
 import { MatDividerModule } from '@angular/material/divider';
 import { MatIconModule } from '@angular/material/icon';
 import { MatInputModule } from '@angular/material/input';
 import { MatMenuModule } from '@angular/material/menu';
 import { MatSelectModule } from '@angular/material/select';
 import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
 MatButtonModule,
 MatCardModule,
 MatInputModule,
 MatIconModule,
 MatDividerModule,
 MatMenuModule,
 MatSelectModule,
 MatSnackBarModule,
 MatTooltipModule,
 MatSidenavModule,
 LayoutModule,
 FlexLayoutModule,
 MatListModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule
]
})
export class NgMaterialModule { }
