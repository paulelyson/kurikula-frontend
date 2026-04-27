import { Course } from './course.model';
import { Department } from './deparment.model';
import { ClassLocation } from './location.model';
import { MongoDocument } from './mongo-document.model';
import { User } from './user.model';

export enum DayOfWeek {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

export interface Schedule {
  day: DayOfWeek;
  startTime: string;
  endTime: string;
  isOpen: boolean;
  location: ClassLocation;
}

export interface CourseOffering extends MongoDocument {
  code: string;
  course: Course;
  instructor: User;
  schedule: Schedule[];
  department: Department;
  units: number;
}
