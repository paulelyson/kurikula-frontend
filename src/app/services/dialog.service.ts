import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/data/user.model';
import { UserDetailDialogComponent } from '../shared/components/dialogs/user-detail-dialog/user-detail-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openUserDetailDialog(user: User) {
    const dialogRef = this.dialog.open(UserDetailDialogComponent, {
      data: user,
    });
    return dialogRef.afterClosed();
  }
}
