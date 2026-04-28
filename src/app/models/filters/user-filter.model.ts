export class UserFilter {
  page: number = 1;
  search: string = '';
  department: string = '';

  constructor(partial?: Partial<UserFilter>) {
    Object.assign(this, partial);
  }
}
