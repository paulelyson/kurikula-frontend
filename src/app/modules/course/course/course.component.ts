import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../models/data/course.model';
import { RowColumnConfig } from '../../../models/ui/data-row.model';

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

  getBorrowedEquipmentColumns(): RowColumnConfig[] {
    return [
      {
        id: 0,
        type: 'image',
        header: '',
        image: undefined,
      },
      { id: 1, type: 'title', header: 'Header 1', content: 'Lorem Ipsum', subtitle: 'Lorem Ipsum', weight: 2.5 },
      { id: 2, type: 'text', header: 'Header 2', content: 'Lorem Ipsum', weight: 2 },
      { id: 3, type: 'text', header: 'Header 3', content: 'Lorem Ipsum', weight: 2 },
      { id: 4, type: 'text', header: 'Header 4', content: '1', weight: 1 },
      { id: 5, type: 'badge', header: 'Header 5', content: ['1 lorem'], weight: 1.5 },
      { id: 6, type: 'text', header: 'Header 6', content: 'Lorem Ipsum', weight: 1.5 },
      {
        id: 7,
        type: 'action',
        header: '',
        actions: [],
        weight: 1,
      },
    ];
  }
}
