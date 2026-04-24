import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { ExceptionService } from './exception.service';
import { ApiResponse } from '../models/api-response.model';
import { Course } from '../models/course.model';
import { environment } from '../../environments/environment';

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
}
