import { Department } from "./deparment.model";
import { MongoDocument } from "./mongo-document.model";

type UserStatus = 'pending_approval' | 'active' | 'deactivated' | 'rejected';

interface UserRole {
  role: 'administrator' | 'chairman' | 'lab_in_charge' | 'instructor' | 'assistant' | 'student';
  department: Department;
}

export interface User extends MongoDocument {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  email: string;
  idNumber: string;
  roles: UserRole[];
  activated: boolean;
  account_status: UserStatus;
  deleted?: boolean;
}