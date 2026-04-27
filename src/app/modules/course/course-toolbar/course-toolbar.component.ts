import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/forms/input/input.component';
import { TabComponent } from '../../../shared/components/layout/tab/tab.component';

@Component({
  selector: 'app-course-toolbar',
  imports: [InputComponent, TabComponent],
  templateUrl: './course-toolbar.component.html',
  styleUrl: './course-toolbar.component.css',
})
export class CourseToolbarComponent {}
