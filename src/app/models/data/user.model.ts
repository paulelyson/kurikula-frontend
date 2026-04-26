import { Variant } from "../ui/common.model";
import { Department } from "./deparment.model";
import { MongoDocument } from "./mongo-document.model";

export const USER_STATUS_VARIANT: Record<UserStatus, Variant> = {
  pending_approval: 'warning',
  active:           'success',
  deactivated:      'neutral',
  rejected:         'danger',
};

type UserStatus = 'pending_approval' | 'active' | 'deactivated' | 'rejected';

export interface UserRole {
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