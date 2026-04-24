import { Department } from './deparment.model';
import { MongoDocument } from './mongo-document.model';

export interface Course extends MongoDocument {
  code: string;
  title: string;
  department: Department;
}
