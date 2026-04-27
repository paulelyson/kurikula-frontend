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
import { CourseOffering } from '../../../models/data/course-offering.model';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { getFilterDisplay } from '../../../shared/utils/filter.util';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  imports: [TitleComponent, DataRowComponent, TabComponent, CourseToolbarComponent, ButtonComponent],
})
export class CourseComponent implements OnInit {
  url: string = '';
  tabs: string[] = ['Courses', 'Course Offerings'];
  hasMore: boolean = false;
  courses: WritableSignal<Course[]> = signal([]);
  courseOfferings: WritableSignal<CourseOffering[]> = signal([]);
  filter = signal<CourseFilter>(new CourseFilter());

  selectedTab = computed((): number => this.tabs.indexOf(this.filter().tab));
  filterDisplay = computed(() => getFilterDisplay(this.filter()));
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
    if (this.filter().page == 1) this.courses.set([]);
    this.courseService.getCourses(this.filter()).subscribe((resp) => {
      this.hasMore = resp.hasNextPage;
      this.courses.update((courses) => [...courses, ...resp.data]);
    });
  }

  getCourseOfferings() {
    if (this.filter().page == 1) this.courseOfferings.set([]);
    this.courseService.getCourseOfferings(this.filter()).subscribe((resp) => {
      this.hasMore = resp.hasNextPage;
      this.courseOfferings.update((coureOffers) => [...coureOffers, ...resp.data]);
    });
  }

  getCourseRowData(course: Course): RowColumnConfig[] {
    return this.courseService.getCourseRowData(course);
  }

  getCourseOfferingRowData(course: CourseOffering): RowColumnConfig[] {
    return this.courseService.getCourseOfferingRowData(course);
  }

  onTabChange(event: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: { page: 1, tab: event },
      queryParamsHandling: 'merge',
    };
    this.router.navigate([this.url], navigationExtras);
  }

  loadMore() {
    const navigationExtras: NavigationExtras = {
      queryParams: { page: this.filter().page + 1 },
      queryParamsHandling: 'merge',
    };

    this.router.navigate([this.url], navigationExtras);
  }

  queryParamsHandling(params: Params) {
    this.filter.set({
      ...this.filter(),
      page: params['page'] ? parseInt(params['page']) : 1,
      tab: params['tab'] ? params['tab'] : this.tabs[0],
      search: params['search'],
    });

    this.filter().tab == 'Courses' ? this.getCourses() : this.getCourseOfferings();
  }
}
