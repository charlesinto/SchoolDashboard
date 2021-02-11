import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentAttendanceComponent } from './student-attendance.component';

const routes: Routes = [{ path: '', component: StudentAttendanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAttendanceRoutingModule { }
