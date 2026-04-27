import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { ExceptionService } from './exception.service';
import { ApiResponse } from '../models/data/api-response.model';
import { Course } from '../models/data/course.model';
import { environment } from '../../environments/environment';
import { RowActionConfig, RowColumnConfig } from '../models/ui/data-row.model';
import { CourseOffering } from '../models/data/course-offering.model';
import { CourseFilter } from '../models/filters/course-filter.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(
    private exceptionService: ExceptionService,
    private http: HttpClient,
  ) {}

  getCourses(filter: CourseFilter) {
    let params = new HttpParams({
      fromObject: { ...(filter.search && { search: filter.search }) },
    });
    params = params.append('page', filter.page);
    return this.http.get<ApiResponse<Course[]>>(environment.api_url + '/api/course', { params }).pipe(catchError(this.exceptionService.handleError));
  }

  getCourseOfferings(filter: CourseFilter) {
    let params = new HttpParams({
      fromObject: { ...(filter.search && { search: filter.search }) },
    });
    return this.http
      .get<ApiResponse<CourseOffering[]>>(environment.api_url + '/api/course-offering', { params })
      .pipe(catchError(this.exceptionService.handleError));
  }

  getCourseRowData(course: Course): RowColumnConfig[] {
    const actions: RowActionConfig[] = [{ type: 'button', name: 'View Detail', icon: 'info_outlined', size: 'xs', appearance: 'link' }];
    const title = course.title;
    const code = course.code;
    const department = course.department.code;
    return [
      { id: 0, type: 'image', header: '', weight: 0.5 },
      { id: 1, type: 'title', header: 'Title', content: title, weight: 2 },
      { id: 2, type: 'text', header: 'Code', content: code, weight: 0.5 },
      { id: 3, type: 'text', header: 'Department', content: department, weight: 0.5 },
      { id: 4, type: 'text', header: 'Units', content: String(course.units), weight: 0.5 },
      { id: 5, type: 'action', header: '', actions: actions, weight: 1 },
    ];
  }

  getCourseOfferingRowData(courseOffer: CourseOffering): RowColumnConfig[] {
    const title = courseOffer.course.title;
    const code = courseOffer.course.code;
    const instructor = courseOffer.instructor.lastName;
    const schedule = courseOffer.schedule.map((sched) => {
      const time = sched.isOpen ? 'OPEN' : `${sched.startTime} - ${sched.endTime}`;
      return `${sched.day} ${time} ${sched.location.name}`;
    });

    return [
      { id: 0, type: 'image', header: '', weight: 0.5 },
      { id: 1, type: 'title', header: 'Title', content: title, weight: 2, subtitle: code },
      { id: 2, type: 'text', header: 'Offer Code', content: courseOffer.code, weight: 0.5 },
      { id: 3, type: 'text', header: 'Instructor', content: instructor, weight: 0.5 },
      { id: 4, type: 'text', header: 'Schedule', content: schedule, weight: 1 },
    ];
  }
}
