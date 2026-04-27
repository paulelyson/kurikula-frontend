import { Department } from "./deparment.model";
import { MongoDocument } from "./mongo-document.model";

export enum LocationType {
  ROOM = 'room',
  GYM = 'gym',
  LABORATORY = 'laboratory',
  FIELD = 'field',
  AUDITORIUM = 'auditorium',
  OFFICE = 'office',
}


export interface ClassLocation extends MongoDocument {
 name: string;
 type: LocationType;
 department: Department
}