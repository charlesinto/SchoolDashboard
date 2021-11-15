import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropoutRiskAnalysisComponent } from './dropout-risk-analysis/dropout-risk-analysis.component';

import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: 'students-by-gender',
    loadChildren: () =>
      import('./students-by-gender/students-by-gender.module').then(
        (m) => m.StudentsByGenderModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'attendance-report',
    loadChildren: () =>
      import('./student-attendance/student-attendance.module').then(
        (m) => m.StudentAttendanceModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'view-attendance-report',
    loadChildren: () =>
      import('./attendance-report-detail/attendance-report-detail.module').then(
        (m) => m.AttendanceReportDetailModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'dropout-risk-analysis',
    component: DropoutRiskAnalysisComponent,
    pathMatch: 'full',
  },
  { path: '', component: StudentsComponent, pathMatch: 'full' },
  { path: ':id', component: StudentsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
