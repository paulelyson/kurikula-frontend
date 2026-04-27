import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../models/data/course.model';
import { RowColumnConfig } from '../../../models/ui/data-row.model';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { TitleComponent } from '../../../shared/components/layout/title/title.component';
import { DataRowComponent } from '../../../shared/components/layout/data-row/data-row.component';
import { TabComponent } from '../../../shared/components/layout/tab/tab.component';
import { CourseToolbarComponent } from '../course-toolbar/course-toolbar.component';
import { CourseFilter } from '../../../models/filters/course-filter.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  imports: [TitleComponent, DataRowComponent, TabComponent, CourseToolbarComponent],
})
export class CourseComponent implements OnInit {
  url: string = '';
  tabs: string[] = ['Courses', 'Course Offerings'];
  courses: WritableSignal<Course[]> = signal([]);
  filter = signal<CourseFilter>(new CourseFilter());

  selectedTab = computed((): number => this.tabs.indexOf(this.filter().tab));
  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.url = this.router.url.split('?')[0];
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => this.queryParamsHandling(params));
  }

  getCourses() {
    this.courseService.getCourses().subscribe((resp) => {
      this.courses.set(resp.data);
    });
  }

  getRowData(course: Course): RowColumnConfig[] {
    return this.courseService.getRowData(course);
  }

  onTabChange(event: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: { page: 1, tab: event },
      queryParamsHandling: 'merge',
    };
    this.router.navigate([this.url], navigationExtras);
  }

  queryParamsHandling(params: Params) {
    this.filter.set({
      ...this.filter(),
      page: params['page'] ? parseInt(params['page']) : 1,
      tab: params['tab'] ? params['tab'] : this.tabs[0],
    });
    this.getCourses();
  }
}
