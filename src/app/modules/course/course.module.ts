import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { DataRowComponent } from '../../shared/components/layout/data-row/data-row.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [CourseComponent],
  imports: [CommonModule, CourseRoutingModule, DataRowComponent],
})
export class CourseModule {}
