import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EffectiveStateReportComponent } from './effective-state-report/effective-state-report.component';
import { TeacherAssessmentDetailComponent } from './teacher-assessment-detail/teacher-assessment-detail.component';

import { TeachersComponent } from './teachers.component';

const routes: Routes = [
  {
    path: 'teachers-by-qualification',
    loadChildren: () =>
      import('./teacher-by-qualification/teacher-by-qualification.module').then(
        (m) => m.TeacherByQualificationModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'attendance-report',
    loadChildren: () =>
      import('./teacher-attendance/teacher-attendance.module').then(
        (m) => m.TeacherAttendanceModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'view-attendance-report',
    loadChildren: () =>
      import('./teacher-report-detail/teacher-report-detail.module').then(
        (m) => m.TeacherReportDetailModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'teachers-qualification-by-schoool',
    loadChildren: () =>
      import(
        './teachers-qualification-by-school/teachers-qualification-by-school.module'
      ).then((m) => m.TeachersQualificationBySchoolModule),
    pathMatch: 'full',
  },
  {
    path: 'teachers-distribution-by-subject',
    loadChildren: () =>
      import('./subject-distribution/subject-distribution.module').then(
        (m) => m.SubjectDistributionModule
      ),
    pathMatch: 'full',
  },

  // {
  //   path: 'teachers/coaching-mentoring/:id',
  //   component: TeacherAssessmentDetailComponent,
  // },
  // {
  //   path: 'teachers/coaching-mentoring',
  //   component: TeacherAssessmentDetailComponent,
  // },

  {
    path: '',

    children: [
      {
        path: 'effectiveness-report-by-state',
        component: EffectiveStateReportComponent,
      },
      { path: 'teacher/:id', component: TeachersComponent },
      {
        path: 'coaching-mentoring',
        component: TeacherAssessmentDetailComponent,
      },

      { path: '', component: TeachersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
