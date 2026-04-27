import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/forms/input/input.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-course-toolbar',
  imports: [InputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './course-toolbar.component.html',
  styleUrl: './course-toolbar.component.css',
})
export class CourseToolbarComponent {
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
}
