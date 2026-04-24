import { MongoDocument } from './mongo-document.model';
import { School } from './school.model';

export interface Department extends MongoDocument {
  code: string;
  name: string;
  school: School;
  deleted?: boolean;
}
