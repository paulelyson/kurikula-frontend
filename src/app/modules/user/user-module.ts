import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { UserComponent } from './user/user.component';
import { DataRowComponent } from '../../shared/components/layout/data-row/data-row.component';
import { TitleComponent } from '../../shared/components/layout/title/title.component';
import { UserToolbarComponent } from './user-toolbar/user-toolbar.component';

@NgModule({
  declarations: [UserComponent, UserToolbarComponent],
  imports: [CommonModule, UserRoutingModule, DataRowComponent, TitleComponent],
})
export class UserModule {}
