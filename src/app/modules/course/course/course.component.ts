import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  standalone: false,
})
export class CourseComponent implements OnInit {
  courses: WritableSignal<Course[]> = signal([]);
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((resp) => {
      this.courses.set(resp.data);
    });
  }
}
