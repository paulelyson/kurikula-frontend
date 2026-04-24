import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { UserComponent } from './user/user.component';
import { DataRowComponent } from '../../shared/components/layout/data-row/data-row.component';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, DataRowComponent],
})
export class UserModule {}
