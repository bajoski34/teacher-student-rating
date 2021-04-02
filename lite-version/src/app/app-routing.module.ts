import { DepartmentStudentComponent } from './demo/teacher/department-student/department-student.component';
import { MyPerformanceComponent } from './demo/teacher/my-performance/my-performance.component';
import { ViewRatedTeacherComponent } from './demo/student/view-rated-teacher/view-rated-teacher.component';
import { DepartmentTeachersComponent } from './demo/student/department-teachers/department-teachers.component';
import { TeacherAssessmentComponent } from './demo/teacher/teacher-assessment/teacher-assessment.component';
import { StudentRatingOverviewComponent } from './demo/rating/student-rating-overview/student-rating-overview.component';
import { StartRatingComponent } from './demo/rating/start-rating/start-rating.component';
import { DepartmentListComponent } from './demo/department/department-list/department-list.component';
import { AddDepartmentComponent } from './demo/department/add-department/add-department.component';
import { AfterLoginGuard } from './guards/after-login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';
import { BeforeLoginGuard } from './guards/before-login.guard';
import { from } from 'rxjs';
import { AddTeacherComponent } from './demo/teacher/add-teacher/add-teacher.component';
import { TeacherListComponent } from './demo/teacher/teacher-list/teacher-list.component';
import { AddStudentComponent } from './demo/student/add-student/add-student.component';
import { StudentListComponent } from './demo/student/student-list/student-list.component';
const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth/signin',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then(module => module.MaintenanceModule)
      }
    ]
  },
  {
    path: 'authenticated',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/analytics',
        pathMatch: 'full'
      },
      {
        path: 'add-new-teacher',
        component: AddTeacherComponent
      },
      {
        path: 'view-teachers-list',
        component: TeacherListComponent
      },
      {
        path: 'view-unrated-teachers',
        component: DepartmentTeachersComponent
      },
      {
        path: 'view-rated-teachers',
        component: ViewRatedTeacherComponent
      },
      {
        path: 'teacher/my-performance',
        component: MyPerformanceComponent
      },
      {
        path: 'teacher/my-performance/:teacher_id',
        component: MyPerformanceComponent
      },
      {
        path: 'teacher/department-student',
        component: DepartmentStudentComponent
      },
      {
        path: 'add-new-student',
        component: AddStudentComponent
      },
      {
        path: 'view-student-list',
        component: StudentListComponent
      },
      {
        path: 'add-new-department',
        component: AddDepartmentComponent
      },
      {
        path: 'view-department-list',
        component: DepartmentListComponent
      },
      {
        path: 'rate-teacher/:id',
        component: StartRatingComponent
      },
      {
        path: 'teacher-rating-overview',
        component: StudentRatingOverviewComponent
      },
      {
        path: 'teacher/:id/assessment',
        component: TeacherAssessmentComponent
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then(module => module.MaintenanceModule)
      }
    ]
  }
  // {
  //   path: '',
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: 'auth',
  //       loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
  //     },
  //     {
  //       path: 'maintenance',
  //       loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then(module => module.MaintenanceModule)
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
