import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/data/user.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RowColumnConfig } from '../../../models/ui/data-row.model';
import { TitleComponent } from '../../../shared/components/layout/title/title.component';
import { DataRowComponent } from '../../../shared/components/layout/data-row/data-row.component';
import { UserToolbarComponent } from '../user-toolbar/user-toolbar.component';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [TitleComponent, DataRowComponent, UserToolbarComponent],
})
export class UserComponent implements OnInit {
  users: WritableSignal<User[]> = signal([]);

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => this.queryParamsHandling(params));
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (response) => this.users.set(response.data),
    });
  }

  getRowData(user: User): RowColumnConfig[] {
    return this.userService.getRowData(user);
  }

  onActionClicked(event: string, user: User) {
    switch (event) {
      case 'View Detail':
        this.dialogService.openUserDetailDialog(user)
        break;
      default:
        break;
    }
  }

  queryParamsHandling(params: Params) {
    this.getUsers();
  }
}
