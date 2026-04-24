import { MongoDocument } from './mongo-document.model';

export interface School extends MongoDocument {
  code: string;
  name: string;
}
