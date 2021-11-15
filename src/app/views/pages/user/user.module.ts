import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserManagementComponent } from './user-management/user-management.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialPreviewModule } from '../../partials/content/general/material-preview/material-preview.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import {
  MatAutocompleteModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatSelectModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSliderModule,
  MatPaginatorModule,
  MatSortModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatStepperModule,
  MatToolbarModule,
  MatDividerModule,
  MatTabsModule,
  MatTableModule,
  MatTooltipModule,
  MatListModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatBottomSheetModule,
  MatExpansionModule,
  MatMenuModule,
  MatTreeModule,
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Form controls

// Navigation

// Popups & modals

import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [UserComponent, UserManagementComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CommonModule,
    PartialsModule,
    CoreModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatListModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTabsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatDividerModule,
    MatSortModule,
    MatStepperModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRippleModule,
    CoreModule,
    CommonModule,
    MatRadioModule,
    MatTreeModule,
    MatButtonToggleModule,
    PartialsModule,
    MaterialPreviewModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
