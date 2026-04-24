import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { ExceptionService } from './exception.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(
    private exceptionService: ExceptionService,
    private http: HttpClient,
  ) {}

  getCourses() {
    return this.http.get('/api/courses').pipe(catchError(this.exceptionService.handleError));
  }
}
