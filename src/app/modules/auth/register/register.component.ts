import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/forms/input/input.component';
import { TitleComponent } from '../../../shared/components/layout/title/title.component';

@Component({
  selector: 'app-register',
  imports: [InputComponent, TitleComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
