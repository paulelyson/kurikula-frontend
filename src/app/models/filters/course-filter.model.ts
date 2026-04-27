export class CourseFilter {
  page: number = 1;
  tab: string = '';
  search: string = '';

  constructor(partial?: Partial<CourseFilter>) {
    Object.assign(this, partial);
  }
}
