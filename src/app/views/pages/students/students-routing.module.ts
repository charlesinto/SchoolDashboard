import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  {
    path: 'students-by-gender',
    loadChildren: () =>
      import('./students-by-gender/students-by-gender.module').then(
        (m) => m.StudentsByGenderModule
      ),
  },
  {
    path: 'attendance-report',
    loadChildren: () =>
      import('./student-attendance/student-attendance.module').then(
        (m) => m.StudentAttendanceModule
      ),
  },
  { path: 'view-attendance-report', loadChildren: () => import('./attendance-report-detail/attendance-report-detail.module').then(m => m.AttendanceReportDetailModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
