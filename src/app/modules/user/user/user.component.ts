import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/data/user.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RowColumnConfig } from '../../../models/ui/row-display.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: false,
})
export class UserComponent implements OnInit {
  users: WritableSignal<User[]> = signal([]);

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => this.queryParamsHandling(params));
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (response) => this.users.set(response.data),
    });
  }

  getBorrowedEquipmentColumns(): RowColumnConfig[] {
    return [
      { id: 0, type: 'image', header: '', image: undefined },
      { id: 1, type: 'title', header: 'Header 1', content: 'Lorem Ipsum', subtitle: 'Lorem Ipsum', weight: 2.5 },
      { id: 2, type: 'text', header: 'Header 2', content: 'Lorem Ipsum', weight: 2 },
      { id: 3, type: 'text', header: 'Header 3', content: 'Lorem Ipsum', weight: 2 },
      { id: 4, type: 'text', header: 'Header 4', content: '1', weight: 1 },
      { id: 5, type: 'badge', header: 'Header 5', content: ['1 lorem'], weight: 1.5 },
      { id: 6, type: 'text', header: 'Header 6', content: 'Lorem Ipsum', weight: 1.5 },
      { id: 7, type: 'action', header: '', actions: [{ type: 'icon', name: 'edit', tooltip: 'Edit' }], weight: 1 },
    ];
  }

  queryParamsHandling(params: Params) {
    this.getUsers();
  }
}
