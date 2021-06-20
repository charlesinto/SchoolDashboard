import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersQualificationBySchoolRoutingModule } from './teachers-qualification-by-school-routing.module';
import { TeachersQualificationBySchoolComponent } from './teachers-qualification-by-school.component';

import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';

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
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialPreviewModule } from '../../../partials/content/general/material-preview/material-preview.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
// import { DatepickerComponent } from './formcontrols/datepicker/datepicker.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [TeachersQualificationBySchoolComponent],
  imports: [
    CommonModule,
    TeachersQualificationBySchoolRoutingModule,
    CoreModule,
    PartialsModule,
    MatCheckboxModule,
    MatRippleModule,
    MatSlideToggleModule,
    MaterialPreviewModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
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
  ],
})
export class TeachersQualificationBySchoolModule {}
