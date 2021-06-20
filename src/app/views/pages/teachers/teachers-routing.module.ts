import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersComponent } from './teachers.component';

const routes: Routes = [
  { path: '', component: TeachersComponent },
  {
    path: 'teachers-by-qualification',
    loadChildren: () =>
      import('./teacher-by-qualification/teacher-by-qualification.module').then(
        (m) => m.TeacherByQualificationModule
      ),
  },
  { path: 'attendance-report', loadChildren: () => import('./teacher-attendance/teacher-attendance.module').then(m => m.TeacherAttendanceModule) },
  { path: 'view-attendance-report', loadChildren: () => import('./teacher-report-detail/teacher-report-detail.module').then(m => m.TeacherReportDetailModule) },
  { path: 'teachers-qualification-by-schoool', loadChildren: () => import('./teachers-qualification-by-school/teachers-qualification-by-school.module').then(m => m.TeachersQualificationBySchoolModule) },
  { path: 'teachers-distribution-by-subject', loadChildren: () => import('./subject-distribution/subject-distribution.module').then(m => m.SubjectDistributionModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
