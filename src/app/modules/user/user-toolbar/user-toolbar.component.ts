import { Component, Input } from '@angular/core';
import { InputComponent } from '../../../shared/components/forms/input/input.component';
import { FilterDisplay } from '../../../models/ui/common.model';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrl: './user-toolbar.component.css',
  imports: [InputComponent, BadgeComponent, ReactiveFormsModule],
})
export class UserToolbarComponent {
  @Input() filters: FilterDisplay[] = [];
  searchControl = new FormControl('');
  url: string = '';

  constructor(private router: Router) {
    this.url = this.router.url.split('?')[0];
    this.searchControl.valueChanges.pipe(debounceTime(800)).subscribe(() => this.onSearch());
  }

  onSearch(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: { page: 1, search: this.searchControl.value },
      queryParamsHandling: 'merge',
    };
    this.router.navigate([this.url], navigationExtras);
  }

  onFilterClose(filter: FilterDisplay) {
    const navigationExtras: NavigationExtras = {
      queryParams: { [filter.field]: null },
      queryParamsHandling: 'merge',
    };
    this.router.navigate([this.url], navigationExtras);
  }
}
