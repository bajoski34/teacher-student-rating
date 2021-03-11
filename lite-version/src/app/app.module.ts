import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';
import { HeaderInterceptor } from '../interceptors/HeaderInterceptor';

/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AddTeacherComponent } from './demo/teacher/add-teacher/add-teacher.component';
import { TeacherListComponent } from './demo/teacher/teacher-list/teacher-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { AddStudentComponent } from './demo/student/add-student/add-student.component';
import { StudentListComponent } from './demo/student/student-list/student-list.component';
import { AddDepartmentComponent } from './demo/department/add-department/add-department.component';
import { DepartmentListComponent } from './demo/department/department-list/department-list.component';
import { AddCourseComponent } from './demo/courses/add-course/add-course.component';
import { StartRatingComponent } from './demo/rating/start-rating/start-rating.component';
import { CourseListComponent } from './demo/courses/course-list/course-list.component';
import { EnrolledCoursesComponent } from './demo/courses/enrolled-courses/enrolled-courses.component';
import { StudentRatingOverviewComponent } from './demo/rating/student-rating-overview/student-rating-overview.component';
import { TeacherAssessmentComponent } from './demo/teacher/teacher-assessment/teacher-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    ToggleFullScreenDirective,
    AddTeacherComponent,
    TeacherListComponent,
    AddStudentComponent,
    StudentListComponent,
    AddDepartmentComponent,
    DepartmentListComponent,
    AddCourseComponent,
    StartRatingComponent,
    CourseListComponent,
    EnrolledCoursesComponent,
    StudentRatingOverviewComponent,
    TeacherAssessmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    HttpClientModule,
    NgbTabsetModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPopoverModule,
    NgbTooltipModule
  ],
  providers: [NavigationItem,   { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
