import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { ExceptionService } from './exception.service';
import { ApiResponse } from '../models/data/api-response.model';
import { Course } from '../models/data/course.model';
import { environment } from '../../environments/environment';
import { RowColumnConfig } from '../models/ui/data-row.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(
    private exceptionService: ExceptionService,
    private http: HttpClient,
  ) {}

  getCourses() {
    return this.http.get<ApiResponse<Course[]>>(environment.api_url + '/api/course').pipe(catchError(this.exceptionService.handleError));
  }

  getRowData(course: Course): RowColumnConfig[] {
    return [
      { id: 0, type: 'image', header: '', weight: 0.5 },
      { id: 1, type: 'title', header: 'Title', content: course.title, weight: 2 },
      { id: 2, type: 'text', header: 'Code', content: course.code, weight: 0.5 },
      { id: 3, type: 'text', header: 'Department', content: course.department.code, weight: 0.5 },
      { id: 4, type: 'text', header: 'Units', content: String(course.units), weight: 0.5 },
      {
        id: 5,
        type: 'action',
        header: '',
        actions: [
          {
            type: 'button',
            name: 'View Detail',
            icon: 'info_outlined',
            size: 'xs',
            appearance: 'link',
          },
        ],
        weight: 1,
      },
    ];
  }
}
